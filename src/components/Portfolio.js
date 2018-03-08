import React, { Component } from "react"
import { inject, observer } from "mobx-react"
import PieChart from "./PieChart"
import PortfolioExpand from "./PortfolioExpand"
import PortfolioFilter from "./PortfolioFilter"
import ShotgunChart from "./ShotgunChart"
import CurrencyInputSteppers from "./CurrencyInputSteppers"
import styled from "styled-components"
import stringTrimAll from "../utils/stringTrimAll"
import QuestionLead from "./QuestionLead"

const explodeAmount = 10

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

  handleInputChange = (value, isStart = true, addToExisting = true) => {
    const { apiStore } = this.props
    value = parseInt(stringTrimAll(value.toString()), 10)
    const func = isStart ? apiStore.setDepositStart : apiStore.setDepositMonthly
    const val =
      value +
      (addToExisting
        ? isStart ? apiStore.depositStart : apiStore.depositMonthly
        : 0)

    func(parseInt(stringTrimAll(val.toString()), 10))
  }

  render() {
    const { selectedInstrument, setInstrument } = this.props.uiStore
    const { depositStart, depositMonthly } = this.props.apiStore
    return (
      <div>
        <QuestionLead question="Your portfolio" />
        <PortfolioFilter />
        <InputsWrapper>
          <CurrencyInputSteppers
            label={"Første innskudd"}
            name={"deposit/START_DEPOSIT"}
            value={depositStart}
            onIncrement={() => this.handleInputChange(2000)}
            onDecrement={() => this.handleInputChange(-2000)}
            onChange={e => this.handleInputChange(e.target.value, true, false)}
            id={"deposit_start"}
          />
          <CurrencyInputSteppers
            label={"Månedlig innskudd"}
            name={"deposit/MONTHLY_DEPOSIT"}
            value={depositMonthly}
            onIncrement={() => this.handleInputChange(2000, false)}
            onDecrement={() => this.handleInputChange(-2000, false)}
            onChange={e => this.handleInputChange(e.target.value, false, false)}
            id={"deposit_monthly"}
          />
        </InputsWrapper>
        <Heading2> Forecasted annual return</Heading2>
        <ShotgunChart height={500} width={1000} />
        <div>
          <Heading2>Suggested portfolio</Heading2>
          <PortfolioWrapper>
            <PieChart
              ref={node => (this.pieChartInjector = node)}
              padding={10}
              explodeAmount={10}
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

const Heading2 = styled.h2`
  text-align: center;
  font-weight: 100;
  margin-top: ${p => p.theme.spacing.huge};
  font-size: ${p => p.theme.font.size.h2};
  color: ${p => p.theme.color.wcag};
`

const PortfolioWrapper = styled.div`
  padding-top: ${p => p.theme.spacing.large};
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: ${p => p.theme.spacing.large};
  grid-template-areas: "left right";
  @media (max-width: 735px) {
    grid-gap: ${p => p.theme.spacing.medium};
  }
  @media (max-width: 710px) {
    grid-template-columns: 100%;
    grid-template-areas: "one";
  }

  > canvas {
    margin-top: ${p => p.theme.spacing.medium};
    width: 100% !important;
    height: auto !important;
  }
`

const InputsWrapper = styled.div`
  margin-top: ${p => p.theme.spacing.large};
  display: grid;
  grid-template-columns: repeat(2, auto);
  grid-column-gap: ${p => p.theme.spacing.large};
  justify-content: center;
  @media (max-width: ${p => p.theme.wrapper.medium}) {
    grid-template-columns: repeat(1, auto);
    grid-row-gap: ${p => p.theme.spacing.large};
  }
`

export default Portfolio
