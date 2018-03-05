import React, {Component} from "react"
import {inject, observer} from "mobx-react"
import PieChart from "./PieChart"
import PortfolioExpand from "./PortfolioExpand"
import PortfolioFilter from "./PortfolioFilter";
import ShotgunChart from "./ShotgunChart";
import styled, {css} from "styled-components";

const explodeAmount = 20

@inject("apiStore", "uiStore")
@observer
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
      if (index !== null) {
        const angle = this.pieChart.getAngle(index)
        this.pieChart.chart.options.rotation = angle
      }
      this.pieChart.chart.update()
      if (index !== null) {
        const doughnut = this.pieChart.chart.getDatasetMeta(0)
        const data = doughnut.data[index]
        data._model.outerRadius += explodeAmount
      }
    }, delay)
  }

  render() {
    const {selectedInstrument, setInstrument} = this.props.uiStore
    return (
      <div>
        <Heading1>Your portfolio</Heading1>
        <PortfolioFilter/>
        <Heading2> Forecasted
          annual
          return
        </Heading2>
        <ShotgunChart height={500} width={1000}/>
        <div>
          <Heading2>Suggested portfolio</Heading2>
          <PortfolioWrapper>
            <PieChart
              ref={node => (this.pieChartInjector = node)}
              padding={30}
              explodeAmount={explodeAmount}
            />
            <PortfolioExpand
              funds={this.props.apiStore.recommendedPortfolio}
              selectedIndex={selectedInstrument}
              onClick={setInstrument}
            />
          </PortfolioWrapper>
        </div>
      </div>
    )
  }
}

Portfolio.propTypes = {}

const PortfolioWrapper = styled.div`
  padding-top: ${p => p.theme.spacing.large};
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: ${p => p.theme.spacing.large};
  grid-template-areas: "left right";
  @media (max-width: 735px) {
    grid - gap: ${p => p.theme.spacing.medium};
  }
  @media (max-width: 710px) {
    grid - template - columns: 100%;
    grid-template-areas: "one";
  }

  > canvas {
    margin - top: ${p => p.theme.spacing.medium};
    width: 100% !important;
    height: auto !important;
  }
  `

const Heading = css`
  text-align: center;
  font-weight: 100;
  margin-top: ${p => p.theme.spacing.huge};
  `

const Heading1 = styled.h1`
  ${Heading};
  font-size: ${p => p.theme.font.size.h1};
  color: ${p => p.theme.color.grayDark};
  margin-bottom: ${p => p.theme.spacing.medium};
  `

const Heading2 = styled.h2`
  ${Heading};
  font-size: ${p => p.theme.font.size.h2};
  color: ${p => p.theme.color.wcag};
  `


export default Portfolio
