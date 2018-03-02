import React, {Component} from "react"
import PropTypes from "prop-types"
import {inject, observer} from 'mobx-react'
import Chart from "chart.js"
import tinycolor from 'tinycolor2'

const desaturate = (base, count) => new Array(count).fill(undefined).map((v, i) => tinycolor(base).desaturate(i / count * 100).toRgbString())

@inject("apiStore") @observer
class PieChart extends Component {
  static defaultProps = {
  }

  static propTypes = {
    apiStore: PropTypes.any
  }

  componentDidMount() {
    if (this.chart) {
      this.chart = null
    }
    const self = this
    const {recommendedPortfolio} = this.props.apiStore
    const portfolio = recommendedPortfolio.map(portfolio => portfolio)
    console.log(portfolio);
    const colors = desaturate("rgba (155, 81, 224, 1.0)", portfolio.length)
    console.log(colors);
    const dataset = {
      data: portfolio.map(p => p.weight),
    }

    const data = {
      datasets: [{
        data: dataset.data.map(d => d * 100),
        backgroundColor: colors
      }],

      // These labels appear in the legend and in the tooltips when hovering different arcs
      labels: portfolio.map(p => p.instrument.name)
    };
    self.rotations = {}
    self.startRotation = -0.5 * Math.PI
    const fullCircle = Math.PI * 2

    this.createChart = (ctx) => {
      this.chart = new Chart(ctx, {
        data: data,
        type: 'doughnut',
        options: {
          legend: {
            display: false
          },
          onClick: function (evt, elements) {
            if (!self.startRotation) {
              self.startRotation = self.chart.options.rotation
            }
            if (elements && elements.length) {
              const segment = elements[0];
              const index = segment["_index"]

              if (!self.rotations.hasOwnProperty(index)) {
                self.rotations[index] = segment._model.endAngle
              }

              const angleToMe = dataset.data.reduce((acc, current, i) => {
                if (i >= index) {
                  return acc
                }
                return acc + fullCircle * current
              }, 0)
              const me = fullCircle * dataset.data[index] * 0.5
              const angle = -angleToMe - me
              self.chart.options.rotation = angle
              self.chart.update();
              if (self.selectedIndex !== index) {
                self.selectedIndex = index;
                segment._model.outerRadius += 50;
              }
              else {
                self.selectedIndex = null;
              }
            }
          },
          layout: {
            padding: 50
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
