import React, { Component } from "react"
import PropTypes from "prop-types"
import { theming } from "@staccx/base"
import { withTheme } from "styled-components"
import Chart from "chart.js"

const fullCircle = Math.PI * 2

class PieChart extends Component {
  static defaultProps = {}

  static propTypes = {
    explodeAmount: PropTypes.any,
    padding: PropTypes.any,
    recommendedPortfolio: PropTypes.any,
    setInstrument: PropTypes.any,
    theme: PropTypes.any
  }

  constructor(props, context) {
    super(props, context)

    this.chartRef = React.createRef()
  }

  getAngle = index =>
    -this.getAngleToElement(index) - this.getElementDegrees(index)
  getElementDegrees = index => fullCircle * this.dataset.data[index] * 0.5
  getAngleToElement = index => {
    return this.dataset.data.reduce((acc, current, i) => {
      if (i >= index) {
        return acc
      }
      return acc + fullCircle * current
    }, 0)
  }

  componentDidMount() {
    this.chartContext = this.chartRef.current.getContext("2d")

    if (this.chart) {
      this.chart = null
    }
    const self = this
    const { recommendedPortfolio } = this.props

    this.generateData = p => {
      const portfolio = p.map(portfolio => portfolio)
      this.dataset = {
        data: portfolio.sort((a, b) => a.weight < b.weight).map(p => p.weight)
      }

      const graphColor = theming.getProp("graphColor", "pie")(this.props)
      return {
        datasets: [
          {
            data: this.dataset.data.map(d => d * 100),
            backgroundColor: graphColor
          }
        ],
        labels: portfolio.map(p => p.instrument.name)
      }
    }

    self.selectedIndex = 0

    this.createChart = ctx => {
      this.chart = new Chart(ctx, {
        data: this.generateData(recommendedPortfolio),
        type: "doughnut",
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
          onClick: function(evt, elements) {
            if (elements && elements.length) {
              const segment = elements[0]
              const index = segment["_index"]
              const angle = self.getAngle(index)
              self.chart.options.rotation = angle
              self.chart.update()
              if (self.selectedIndex !== index) {
                self.selectedIndex = index
                segment._model.outerRadius += self.props.explodeAmount
              } else {
                self.selectedIndex = null
              }
              self.props.setInstrument(self.selectedIndex)
            }
          },
          layout: {
            padding: self.props.padding
          }
        }
      })
    }
    this.createChart(this.chartContext)
  }

  componentDidUpdate() {
    const { recommendedPortfolio } = this.props
    this.chart.data = this.generateData(recommendedPortfolio)
    this.chart.update()
  }

  render() {
    const { recommendedPortfolio } = this.props // eslint-disable-line no-unused-vars
    return <canvas ref={this.chartRef} />
  }
}

export default withTheme(PieChart)
