import React, { Component } from "react"
import { inject, observer } from "mobx-react"
import {
  Tab as UnstyledTab,
  TabList as UnstyledTabList,
  Tabs as UnstyledTabs,
  TabPanel as UnstyledTabPanel
} from "react-tabs"
import { formatCurrency, Animations } from "@staccx/base"
import PieChart from "./PieChart"
import PortfolioExpand from "./PortfolioExpand"
import PortfolioFilter from "./PortfolioFilter"
import ShotgunChart from "./ShotgunChart"
import CurrencyInputSteppers from "./CurrencyInputSteppers"
import styled from "styled-components"
import stringTrimAll from "../utils/stringTrimAll"
import QuestionLead from "./QuestionLead"
import Spinner from "./Spinner"

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
    const { depositStart, depositMonthly, isChartLoading } = this.props.apiStore
    return (
      <div>
        <QuestionLead question="Your portfolio" />
        <PortfolioFilter />
        <InputsWrapper>
          <CurrencyInputSteppers
            label={"First deposit"}
            name={"deposit/START_DEPOSIT"}
            value={depositStart}
            onIncrement={() => this.handleInputChange(2000)}
            onDecrement={() => this.handleInputChange(-2000)}
            onChange={e => this.handleInputChange(e.target.value, true, false)}
            id={"deposit_start"}
          />
          <CurrencyInputSteppers
            label={"Monthly deposit"}
            name={"deposit/MONTHLY_DEPOSIT"}
            value={depositMonthly}
            onIncrement={() => this.handleInputChange(2000, false)}
            onDecrement={() => this.handleInputChange(-2000, false)}
            onChange={e => this.handleInputChange(e.target.value, false, false)}
            id={"deposit_monthly"}
          />
        </InputsWrapper>
        <ContentWrapper>
          {isChartLoading && <Spinner />}
          <TabsWrapper isVisible={!isChartLoading}>
            <Tabs>
              <TabList>
                <Tab>Expected development</Tab>
                <Tab>Historical data</Tab>
              </TabList>

              <TabPanel>
                <WrittenExplanation>
                  If you save{" "}
                  <strong>
                    {formatCurrency(this.props.apiStore.depositMonthly, {
                      precision: 0
                    })}
                  </strong>{" "}
                  month we expect <br /> you’ll have around{" "}
                  <strong>
                    {formatCurrency(this.props.apiStore.expected, {
                      precision: 0
                    })}
                  </strong>{" "}
                  in <strong>{this.props.apiStore.years} years</strong>
                </WrittenExplanation>
                <ShotgunChart height={300} width={1000} />
              </TabPanel>
              <TabPanel>
                <WrittenExplanation>
                  If you saved{" "}
                  <strong>
                    {formatCurrency(this.props.apiStore.depositMonthly, {
                      precision: 0
                    })}
                  </strong>{" "}
                  /month with this portfolio <br />since <strong>1996</strong>{" "}
                  you would now have{" "}
                  <strong>
                    {formatCurrency(this.props.apiStore.calculated, {
                      precision: 0
                    })}
                  </strong>
                </WrittenExplanation>
                <ShotgunChart height={300} width={1000} isForecast={false} />
              </TabPanel>
            </Tabs>
          </TabsWrapper>
        </ContentWrapper>
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

const ContentWrapper = styled.div`
  position: relative;
`

const TabsWrapper = styled.div`
  transition: opacity 0.3s ease-out;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
`

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

const Tabs = styled(UnstyledTabs)`
  margin-top: ${p => p.theme.spacing.huge};
`

const TabList = styled(UnstyledTabList)`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 0;
  margin: 0 0 ${p => p.theme.spacing.medium} 0;
`

const Tab = styled(UnstyledTab).attrs({
  selectedClassName: "selected",
  disabledClassName: "disabled"
})`
  text-align: center;
  padding: ${p => p.theme.spacing.small} ${p => p.theme.spacing.medium};
  list-style: none;
  cursor: pointer;
  background: #fafafa;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.02), 0px 4px 4px rgba(0, 0, 0, 0.02),
    0px 8px 8px rgba(0, 0, 0, 0.03);
  border-radius: 60px;
  margin-right: ${p => p.theme.spacing.small};
  margin-bottom: ${p => p.theme.spacing.small};
  transition: box-shadow 0.2s ease-out;

  &:hover {
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.02), 0px 4px 4px rgba(0, 0, 0, 0.02),
      0px 8px 8px rgba(0, 0, 0, 0.03), 0px 16px 16px rgba(0, 0, 0, 0.03),
      0px 32px 32px rgba(0, 0, 0, 0.03), 0px 64px 64px rgba(0, 0, 0, 0.03);
  }

  &:last-child {
    margin-right: 0;
  }

  &.selected {
    color: ${p => p.theme.color.white};
    background: linear-gradient(90deg, #5d3b9f 8.41%, #cf27aa 95.8%);
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.02), 0px 4px 4px rgba(0, 0, 0, 0.02),
      0px 8px 8px rgba(0, 0, 0, 0.03), 0px 16px 16px rgba(0, 0, 0, 0.03),
      0px 32px 32px rgba(0, 0, 0, 0.03), 0px 64px 64px rgba(0, 0, 0, 0.03);
    cursor: default;
  }

  &.disabled {
    color: #e0e0e0;
    cursor: not-allowed;
  }
`

const TabPanel = styled(UnstyledTabPanel).attrs({
  selectedClassName: "selected"
})`
  display: none;
  padding: 10px 20px;
  &.selected {
    display: block;
    animation: 0.6s ${Animations.FadeIn} 0.2s ease-out 1 forwards;
    opacity: 0;
  }
`

Tab.tabsRole = "Tab"
Tabs.tabsRole = "Tabs"
TabPanel.tabsRole = "TabPanel"
TabList.tabsRole = "TabList"

const WrittenExplanation = styled.p`
  padding: 0;
  margin: 0 0 ${p => p.theme.spacing.large} 0;
  text-align: center;
  line-height: 1.5;
  font-size: ${p => p.theme.font.size.h3};
`

export default Portfolio
