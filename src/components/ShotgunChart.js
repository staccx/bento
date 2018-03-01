import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Chart from 'chart.js'
import {inject, observer} from 'mobx-react'
import tinycolor from 'tinycolor2'
import {differenceInCalendarYears} from 'date-fns'
import nb from 'date-fns/locale/nb'

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
    const dates = keys.map(key => {
      // const diff = differenceInCalendarYears(new Date(Date.parse(key)), new Date())
      // const mod = Math.floor(diff / 2)
      // if(existing.indexOf(mod) !== -1 || mod < 0) {
      //   return ""
      // }
      // existing.push(mod)
      // return `${(mod) * 2 + 2} years`
      const date = new Date(Date.parse(key))
      return date
    })
    let max = 0
    let min = 1000000

    const getData = prop => keys.map((key, index) => {
      const value = forecast[key][prop]
      if(value > max) max = value
      if(value < min) min = value
      return {
        x: dates[index],
        y:  value
      }
    })

    const createDataset = (data, backgroundColor, label) => ({
      data, backgroundColor, label
    })

    const baseColor = tinycolor('rgba (155, 81, 224, 1.0)')
    const colors = [baseColor.toRgbString(),
      baseColor.setAlpha(0.5).toRgbString(),
      baseColor.setAlpha(0.25).toRgbString()
    ]

    const fifthData = getData('5thPercentile')
    const ninetyFifthData = getData('95thPercentile')
    const medianData = getData('Median')


    const fifth = createDataset(fifthData, baseColor, '5th Percentile')
    const ninetyFifth = createDataset(ninetyFifthData, baseColor, '95th Percentile')
    const median = createDataset(medianData, baseColor, 'Median')

    const createSubGroup = (data, label) => ({
      data: data.map((data, index) => ({
        x: data.x,
        y: (medianData[index].y + data.y) * .5
      })),
      label
    })

    const medianFifth = createSubGroup(fifthData, 'medianfifth')
    const medianNine = createSubGroup(ninetyFifthData, 'mediannine')

    const dataSets = [median, medianFifth, medianNine, fifth, ninetyFifth]

    console.log(min, max)
    const chart = new Chart(this.chartContext,
      {
        type: 'line',
        data: {
          labels: dates,
          datasets: dataSets.map((dataset, index) => {
            return {
              data: dataset.data,
              label: dataset.label,
              backgroundColor: baseColor.toRgbString(),
              borderColor: baseColor.toRgbString(),
              borderWidth: 0,
              fill: '0'
            }
          })
        },
        options: {
          legend: {
            display: false
          },
          elements: {
            point: {
              radius: 0
            },
            line: {
              borderWidth: 0
            }
          },
          plugins: {
            filler: {
              propagate: true
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
                callback: (value) => differenceInCalendarYears(value, new Date()),
                maxRotation: 0,
                minRotation: 0
              }
            }],
            yAxes: [{
              type: 'linear',

              ticks: {
                beginAtZero: false,
                min: 0,
                max,
                stepSize: 1000
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
  }

  render() {
    return (
      <canvas ref={node => this.chartContext = node.getContext('2d')}
              id={this.props.chartId}
              width={this.props.width}
              height={this.props.height}>
      </canvas>
    )
  }
}

export default ShotgunChart
