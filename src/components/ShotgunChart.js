import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Chart from 'chart.js'
import {inject, observer} from 'mobx-react'
import tinycolor from 'tinycolor2'
import {differenceInCalendarYears} from 'date-fns'
import {lerp, clamp, coserp} from "@staccx/base"
import {parseDate} from "../utils/parseDate";
import {colorTransparent} from "../utils/colorTransparent";



const getShotgunConfig = (labels, dataSets, baseColor) => ({
  type: 'line',
  data: {
    labels,
    datasets: dataSets.map((dataSet, index) => {
      return {
        data: dataSet.data,
        label: dataSet.label,
      }
    })
  },
  options: {
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
        borderWidth: 1,
        backgroundColor: baseColor.toRgbString(),
        fill: '0'
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
  }
})

const createSubgroups = (data, other, amount = 3, label) => {
  return new Array(amount).fill(undefined).map((v, i) => ({
      data: data.map((data, index) => {
        return {
          x: data.x,
          y: coserp(other[index].y, data.y, i / amount)
        }
      }),
      label: label + i
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

  constructor(props, context) {
    super(props, context)

    this.chartContext = null
  }

  componentDidMount() {
    const {forecast} = this.props.apiStore.marketReturns
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

    const baseColor = tinycolor('rgba (155, 81, 224, 1.0)')

    const fifthData = getData('5thPercentile')
    const ninetyFifthData = getData('95thPercentile')
    const medianData = getData('Median')

    const fifth = createDataset(fifthData, baseColor, '5th Percentile')
    const ninetyFifth = createDataset(ninetyFifthData, baseColor, '95th Percentile')
    const median = createDataset(medianData, baseColor, 'Median')

    const medianFifth = createSubgroups(fifthData, medianData, 3, '')
    const medianNine = createSubgroups(ninetyFifthData, medianData, 3, '')

    const dataSets = [median, ...medianFifth, ...medianNine, fifth, ninetyFifth]
    const gradient = this.chartContext.createLinearGradient(0, 0, 0, 400)
    gradient.addColorStop(0, baseColor.toRgbString());
    gradient.addColorStop(1, baseColor.setAlpha(clamp(.3, 1, 1 / dataSets.length)).toRgbString());

    this.chart = new Chart(this.chartContext, getShotgunConfig(dates, dataSets, baseColor))
  }

  render() {
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
