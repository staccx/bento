import React, { Component } from "react"
import PropTypes from "prop-types"
import {inject, observer} from 'mobx-react'
import Chart from "chart.js"
import tinycolor from 'tinycolor2'

const desaturate = (base, count) => new Array(count).fill(undefined).map((v, i) => tinycolor(base).desaturate(i / count * 100).toRgbString())

@inject("apiStore") @observer
class PieChart extends Component {
  static propTypes = {
    apiStore: PropTypes.object
  }

  componentDidMount() {
    const { recommendedPortfolio } = this.props.apiStore
    const portfolio = recommendedPortfolio.map(portfolio => portfolio)
    console.log(portfolio);
    const colors = desaturate("rgba (155, 81, 224, 1.0)", portfolio.length)
    console.log(colors);
    const data = {
      datasets: [{
        data: portfolio.map(p => p.weight * 100),
        backgroundColor: colors
      }],

      // These labels appear in the legend and in the tooltips when hovering different arcs
      labels: portfolio.map(p => p.instrument.name)
    };
    this.chart = new Chart(this.chartContext, {
      data: data,
      type: 'polarArea',
      options: {
        scale: {
          ticks: {
            display: false
          },
          gridLines: {
            display: false
          },
          angleLines: {
            display: false
          },
          pointLabels: {
            display: false
          }
        }
      }
    });
  }

  render() {
    return <canvas ref={node => (this.chartContext = node.getContext("2d"))} />
  }
}

export default PieChart
