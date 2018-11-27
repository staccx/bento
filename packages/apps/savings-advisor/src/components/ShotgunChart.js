import React, { Component } from "react"
import PropTypes from "prop-types"
import Chart from "chart.js"
import { inject, observer } from "mobx-react"
import tinycolor from "tinycolor2"
import { differenceInCalendarYears } from "date-fns"
import { coserp } from "@staccx/math"
import { formatCurrency } from "@staccx/formatting"
import { parseDate } from "../utils/parseDate"
import { colorTransparent } from "../utils/colorTransparent"

const baseColorString = "rgba(155, 81, 224, 1.0)"
const midColorString = "rgba(155, 81, 224, 0.5)"
const lowColorString = "rgba(155, 81, 224, 0.25)"
const baseColor = tinycolor(baseColorString) // TODO: Make prop

const backgroundColors = [
  baseColorString,
  midColorString,
  midColorString,
  lowColorString,
  lowColorString,
  lowColorString,
  lowColorString
]

const shotgunOptions = (duration = 500) => ({
  animation: {
    duration
  },
  legend: {
    display: false
  },
  elements: {
    point: {
      radius: 5,
      borderWidth: 0,
      backgroundColor: colorTransparent,
      borderColor: colorTransparent
    },
    line: {
      fill: "0",
      backgroundColor: baseColor.toRgbString(),
      borderColor: baseColorString
    }
  },
  tooltips: {
    callbacks: {
      label: (item, data) => {
        const label = data.datasets
          .sort((a, b) => a.data[item.index].y < b.data[item.index].y)
          .map(current =>
            current.label
              ? `${current.label}: ${formatCurrency(
                  current.data[item.index].y,
                  { precision: 0 }
                )}`
              : null
          ) // TODO: Format currency

        if (!label) {
          return null
        }
        return label.filter(l => l)
      },
      title: item => {
        const firstItem = item[0]
        if (!firstItem || !firstItem.xLabel) {
          return null
        }

        const date = parseDate(firstItem.xLabel)
        const diff = differenceInCalendarYears(date, new Date())
        return `${diff < 0 ? "" : "in"} ${Math.abs(diff)} years ${
          diff < 0 ? "ago" : ""
        }`
      },
      labelColor: () => ({ backgroundColor: baseColorString })
    }
  },
  plugins: {
    filler: {
      propagate: false
    }
  },
  scales: {
    xAxes: [
      {
        type: "time",
        distribution: "series",
        gridLines: {
          display: false
        },
        ticks: {
          autoSkip: true,
          callback: value =>
            `${differenceInCalendarYears(value, new Date())} years`,
          maxRotation: 0,
          minRotation: 0
        }
      }
    ],
    yAxes: [
      {
        type: "linear",
        ticks: {
          beginAtZero: false
        },
        gridLines: {
          display: false
        },
        stacked: false
      }
    ]
  },
  showLines: true
})

const createSubgroups = (data, other, amount = 3, label) => {
  return new Array(amount).fill(undefined).map((v, i) => ({
    data: data.map((data, index) => {
      return {
        x: data.x,
        y: coserp(other[index].y, data.y, i / amount)
      }
    }),
    label: null
  }))
}

@inject("apiStore")
@observer
class ShotgunChart extends Component {
  static propTypes = {
    chartId: PropTypes.string,
    height: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
    isForecast: PropTypes.bool
  }

  static defaultProps = {
    isForecast: true
  }

  constructor() {
    super()
    this.chartContext = null
  }

  componentDidMount() {
    const createDataset = (data, backgroundColor, label) => ({
      data,
      backgroundColor,
      label
    })

    this.getLabels = data => {
      if (!data) {
        return []
      }

      const years = {}
      Object.keys(data).forEach(key => {
        const date = parseDate(key)
        if (!years.hasOwnProperty(date.getFullYear().toString())) {
          years[date.getFullYear().toString()] = date
        }
      })
      return Object.keys(years)
    }

    this.generateData = data => {
      if (!data) {
        return []
      }
      const keys = Object.keys(data)
      const dates = parseDate(keys)
      let max = 0
      let min = 1000000

      const getData = prop =>
        keys.map((key, index) => {
          const value = data[key][prop]
          if (value > max) max = value
          if (value < min) min = value
          return {
            x: dates[index],
            y: value
          }
        })

      const fifthData = getData("5thPercentile")
      const ninetyFifthData = getData("95thPercentile")
      const medianData = getData("Median")

      const fifth = createDataset(fifthData, baseColor, "5th Percentile")
      const ninetyFifth = createDataset(
        ninetyFifthData,
        baseColor,
        "95th Percentile"
      )
      const median = createDataset(medianData, baseColor, "Median")

      const medianFifth = createSubgroups(fifthData, medianData, 3, "")
      const medianNine = createSubgroups(ninetyFifthData, medianData, 3, "")

      return [median, ...medianFifth, ...medianNine, fifth, ninetyFifth]
    }

    this.generateBackTest = data => {
      if (!data) {
        return []
      }
      const keys = Object.keys(data)
      const dates = parseDate(keys)
      let max = 0
      let min = 1000000

      const values = keys.map((key, index) => {
        const value = data[key].PortfolioReturns
        if (value > max) max = value
        if (value < min) min = value
        return {
          x: dates[index],
          y: value
        }
      })

      return [createDataset(values, baseColor.toRgbString(), "Backtest")]
    }

    this.getData = (generateDataSets, generateLabels) => {
      const dataSets = generateDataSets()
      const labels = generateLabels()
      return {
        datasets: dataSets.map((dataSet, index) => {
          return {
            data: dataSet.data,
            label: dataSet.label,
            borderWidth: index === 0 ? 2 : 0.1,
            backgroundColor: backgroundColors[index],
            pointBackgroundColor: colorTransparent
          }
        }),
        labels
      }
    }

    const { forecast, backtest } = this.props.apiStore

    const { isForecast } = this.props

    const data = isForecast
      ? this.getData(
          () => this.generateData(forecast),
          () => this.getLabels(forecast)
        )
      : this.getData(
          () => this.generateBackTest(backtest),
          () => this.getLabels(backtest)
        )

    const gradient = this.chartContext.createLinearGradient(0, 0, 0, 400)
    gradient.addColorStop(0, baseColor.toRgbString())
    const colorTo = tinycolor(baseColor)
    gradient.addColorStop(1, colorTo.setAlpha(0.3).toRgbString())

    this.chart = new Chart(this.chartContext, {
      type: "line",
      data: data,
      options: shotgunOptions()
    })
  }

  componentDidUpdate() {
    const { backtest, forecast } = this.props.apiStore
    const { isForecast } = this.props

    const data = isForecast
      ? this.getData(
          () => this.generateData(forecast),
          () => this.getLabels(forecast)
        )
      : this.getData(
          () => this.generateBackTest(backtest),
          () => this.getLabels(backtest)
        )
    this.chart.data = data
    this.chart.update()
  }

  render() {
    // NOTE: The next line needs to exist in other to force mobx to update the component when the observable changes
    const { forecast, backtest } = this.props.apiStore // eslint-disable-line no-unused-vars
    return (
      <canvas
        ref={node => {
          if (!node) {
            return
          }
          this.chartContext = node.getContext("2d")
        }}
        id={this.props.chartId}
        width={this.props.width}
        height={this.props.height}
      />
    )
  }
}

export default ShotgunChart
