import React, {Component} from 'react';
import {inject, observer} from 'mobx-react'
import styled from 'styled-components'
import PieChart from "./PieChart";
import PortfolioExpand from "./PortfolioExpand";

const explodeAmount = 20

const PortfolioWrapper = styled.div`
  display: flex;
  > canvas {
    max-width: 50%;
  }
`

@inject("apiStore", "uiStore") @observer
class Portfolio extends Component {

  componentDidMount() {
    this.pieChart = this.pieChartInjector.wrappedInstance
    this.updatePie(this.props.uiStore.selectedInstrument, 1000)
  }

  componentDidUpdate() {
    this.updatePie(this.props.uiStore.selectedInstrument, 100)
  }

  updatePie(index, delay = 200) {
    this.pieChart.selectedIndex = index
    setTimeout(() => {
      const angle = this.pieChart.getAngle(index)
      const doughnut = this.pieChart.chart.getDatasetMeta(0)
      const data = doughnut.data[index]
      this.pieChart.chart.options.rotation = angle
      this.pieChart.chart.update()
      data._model.outerRadius += explodeAmount
    }, delay)
  }

  render() {
    const {selectedInstrument, setInstrument} = this.props.uiStore
    return (
      <PortfolioWrapper>
        <PieChart ref={node => this.pieChartInjector = node} padding={30} explodeAmount={explodeAmount}/>
        <PortfolioExpand
          funds={this.props.apiStore.recommendedPortfolio}
          selectedIndex={selectedInstrument}
          onClick={setInstrument}
        />
      </PortfolioWrapper>
    );
  }
}

Portfolio.propTypes = {};

export default Portfolio;
