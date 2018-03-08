import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Chart from 'chart.js'
import {inject, observer} from 'mobx-react'
import tinycolor from 'tinycolor2'
import {differenceInCalendarYears} from 'date-fns'
import {clamp, coserp} from "@staccx/base"
import {parseDate} from "../utils/parseDate";
import {colorTransparent} from "../utils/colorTransparent";

const baseColor = tinycolor('rgba (155, 81, 224, 1.0)') // TODO: Make prop

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
      fill: '0',
      backgroundColor: baseColor.toRgbString()
    }
  },
  tooltips: {
    callbacks: {
      label: (item, data) => {
        const label = data.datasets
          .sort((a, b) => a.data[item.index].y < b.data[item.index].y)
          .map(current => current.label ? `${current.label}: ${current.data[item.index].y}` : null) // TODO: Format currency

        if(!label) {
          return null
        }
        return label.filter(l => l)
      },
      title: item => {
        const firstItem = item[0]
        if(!firstItem || !firstItem.xLabel) {
          return null
        }

        const date = parseDate(firstItem.xLabel)
        return `in ${differenceInCalendarYears(date, new Date())} years`
      },
      labelColor: () => ({backgroundColor: baseColor.toRgbString()}),
    }
  },
  plugins: {
    filler: {
      propagate: false,
    }
  },
  scales: {
    xAxes: [{
      type: 'time',
      distribution: 'series',
      gridLines: {
        display: false
      },
      ticks: {
        autoSkip: true,
        callback: (value) => `${differenceInCalendarYears(value, new Date())} years`,
        maxRotation: 0,
        minRotation: 0
      }
    }],
    yAxes: [{
      type: 'linear',
      ticks: {
        beginAtZero: false,
      },
      gridLines: {
        display: false
      },
      stacked: false
    }]
  },
  showLines: true,
})

const getShotgunConfig = (labels, dataSets, baseColor) => ({
  type: 'line',
  data: {
    labels,
    datasets: dataSets.map((dataSet, index) => {
      return {
        data: dataSet.data,
        label: dataSet.label,
        borderWidth: index === 0 ? 10 : 1
      }
    })
  },

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
    })
  )
}

@inject('apiStore') @observer
class ShotgunChart extends Component {
  static propTypes = {
    chartId: PropTypes.string,
    height: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired
  }

  constructor() {
    super()
    this.chartContext = null
  }

  componentDidMount() {
    this.getLabels = () => {
      const {forecast} = this.props.apiStore
      const years = {}
      Object.keys(forecast).forEach(key => {
        const date = parseDate(key)
        if(!years.hasOwnProperty(date.getFullYear().toString())) {
          years[date.getFullYear().toString()] = date
        }
      })
      return Object.keys(years)
    }

    this.generateData = () => {
      const {forecast} = this.props.apiStore
      const years = {}
      const decimate = key => {
        const date = parseDate(key)
        if (!years.hasOwnProperty(date.getFullYear().toString())) {
          years[date.getFullYear().toString()] = date
          return true
        }
        return false
      }
      const keys = Object.keys(forecast)
      const dates = parseDate(keys)
      let max = 0
      let min = 1000000

      const getData = prop => keys.map((key, index) => {
        const value = forecast[key][prop]
        if (value > max) max = value
        if (value < min) min = value
        return {
          x: dates[index],
          y: value
        }
      })

      const createDataset = (data, backgroundColor, label) => ({
        data, backgroundColor, label
      })

      const fifthData = getData('5thPercentile')
      const ninetyFifthData = getData('95thPercentile')
      const medianData = getData('Median')

      const fifth = createDataset(fifthData, baseColor, '5th Percentile')
      const ninetyFifth = createDataset(ninetyFifthData, baseColor, '95th Percentile')
      const median = createDataset(medianData, baseColor, 'Median')

      const medianFifth = createSubgroups(fifthData, medianData, 3, '')
      const medianNine = createSubgroups(ninetyFifthData, medianData, 3, '')

      return [median, ...medianFifth, ...medianNine, fifth, ninetyFifth]
    }

    this.getData = () => {
      const dataSets = this.generateData()
      const labels = this.getLabels()
      return {
        datasets: dataSets.map((dataSet, index) => {
          return {
            data: dataSet.data,
            label: dataSet.label,
            borderWidth: index === 0 ? 8 : .1,
          }
        }),
        labels
      }
    }

    const data = this.getData()

    const gradient = this.chartContext.createLinearGradient(0, 0, 0, 400)
    gradient.addColorStop(0, baseColor.toRgbString());
    const colorTo = tinycolor(baseColor)
    gradient.addColorStop(1, colorTo.setAlpha(0.3).toRgbString());

    this.chart = new Chart(this.chartContext, {
      type: "line",
      data: data,
      options: shotgunOptions()
    })
  }

  componentDidUpdate() {
    this.chart.data = this.getData()
    this.chart.update()
  }

  render() {
    const {forecast} = this.props.apiStore
    return (
      <canvas ref={node => {
        if (!node) {
          return
        }
        this.chartContext = node.getContext('2d')
      }}
              id={this.props.chartId}
              width={this.props.width}
              height={this.props.height}>
      </canvas>
    )
  }
}

export default ShotgunChart
