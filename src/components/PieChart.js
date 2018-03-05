import React, {Component} from "react"
import PropTypes from "prop-types"
import {inject, observer} from 'mobx-react'
import Chart from "chart.js"
import {themeLaser} from '../theme/themeLaser'

const fullCircle = Math.PI * 2

@inject("apiStore", "uiStore") @observer
class PieChart extends Component {
  static defaultProps = {}

  static propTypes = {
    apiStore: PropTypes.any
  }
  getAngle = index => -this.getAngleToElement(index) - this.getElementDegrees(index)
  getElementDegrees = index => fullCircle * this.dataset.data[index] * 0.5
  getAngleToElement = (index) => {
    return this.dataset.data.reduce((acc, current, i) => {
      if (i >= index) {
        return acc
      }
      return acc + fullCircle * current
    }, 0)
  }

  componentDidMount() {
    if (this.chart) {
      this.chart = null
    }
    const self = this
    const {recommendedPortfolio} = this.props.apiStore
    const portfolio = recommendedPortfolio.map(portfolio => portfolio)
    this.dataset = {
      data: portfolio.map(p => p.weight),
    }

    const data = {
      datasets: [{
        data: this.dataset.data.map(d => d * 100),
        backgroundColor: themeLaser.graphColor
      }],
      labels: portfolio.map(p => p.instrument.name)
    };

    self.selectedIndex = 0
    this.createChart = (ctx) => {
      console.log('creating chart')
      this.chart = new Chart(ctx, {
        data: data,
        type: 'doughnut',
        options: {
          legend: {
            display: false
          },
          tooltips: {
            callbacks: {
              label: (item, data) => {
                const value = data.datasets[item.datasetIndex].data[item.index]
                const name = data.labels[item.index]

                return `${name}: ${value}%`
              }
            }
          },
          onClick: function (evt, elements) {
            if (elements && elements.length) {
              const segment = elements[0];
              const index = segment["_index"]
              const angle = self.getAngle(index)
              self.chart.options.rotation = angle
              self.chart.update();
              if (self.selectedIndex !== index) {
                self.selectedIndex = index;
                segment._model.outerRadius += self.props.explodeAmount;
              }
              else {
                self.selectedIndex = null;
              }
              self.props.uiStore.setInstrument(self.selectedIndex)
            }
          },
          layout: {
            padding: self.props.padding
          }
        },

      });
    }
    this.createChart(this.chartContext)
  }

  componentDidUpdate() {
    this.createChart(this.chartContext)
  }

  render() {
    return <canvas ref={node => {
      if (!node) {
        return
      }
      this.chartContext = node.getContext("2d")
    }}/>
  }
}

export default PieChart
