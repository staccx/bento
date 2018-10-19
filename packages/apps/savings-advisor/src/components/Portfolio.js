import React, { Component } from "react"
import { inject, observer } from "mobx-react"
import {
  Tab as UnstyledTab,
  TabList as UnstyledTabList,
  TabPanel as UnstyledTabPanel,
  Tabs as UnstyledTabs
} from "react-tabs"
import { formatCurrency } from "@staccx/formatting"
import { FadeIn } from "@staccx/animations"
import { theming } from "@staccx/base"
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
  handleInputChange = (value, isStart = true, addToExisting = true) => {
    const { apiStore } = this.props
    value = parseInt(stringTrimAll(value.toString()), 10)
    const func = isStart ? apiStore.setDepositStart : apiStore.setDepositMonthly
    const val =
      value +
      (addToExisting
        ? isStart
          ? apiStore.depositStart
          : apiStore.depositMonthly
        : 0)

    func(parseInt(stringTrimAll(val.toString()), 10))
  }

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
    const {
      selectedInstrument,
      setInstrument,
      cmsSummary,
      translate
    } = this.props.uiStore
    const { depositStart, depositMonthly, isChartLoading } = this.props.apiStore
    return (
      <div>
        <QuestionLead question={translate(cmsSummary.header)} />
        <PortfolioFilter />
        <InputsWrapper>
          <CurrencyInputSteppers
            label={translate(cmsSummary.firstDepositLabel)}
            name={"deposit/START_DEPOSIT"}
            value={depositStart}
            onIncrement={() => this.handleInputChange(2000)}
            onDecrement={() => this.handleInputChange(-2000)}
            onChange={e => this.handleInputChange(e.target.value, true, false)}
            id={"deposit_start"}
          />
          <CurrencyInputSteppers
            label={translate(cmsSummary.monthlyDepositLabel)}
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
                <Tab>{translate(cmsSummary.expectedDevelopmentLabel)}</Tab>
                <Tab>{translate(cmsSummary.backtestLabel)}</Tab>
                {/* <Tab disabled>{translate(cmsSummary.barChartLabel)}</Tab> */}
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
                  /month with this portfolio <br />
                  since <strong>1996</strong> you would now have{" "}
                  <strong>
                    {formatCurrency(this.props.apiStore.calculated, {
                      precision: 0
                    })}
                  </strong>
                </WrittenExplanation>
                <ShotgunChart height={300} width={1000} isForecast={false} />
              </TabPanel>
              <TabPanel>
                <div>Coming soon</div>
              </TabPanel>
            </Tabs>
          </TabsWrapper>
        </ContentWrapper>
        <ContentWrapper>
          <Heading2>Suggested portfolio</Heading2>
          {isChartLoading && <Spinner />}
          <PortfolioWrapper isVisible={!isChartLoading}>
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
        </ContentWrapper>
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
  margin-top: ${theming.spacing.huge};
  font-size: ${theming.font.h2};
  color: ${theming.color.wcag};
`

const PortfolioWrapper = styled.div`
  transition: opacity 0.3s ease-out;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  padding-top: ${theming.spacing.large};
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: ${theming.spacing.large};
  grid-template-areas: "left right";
  @media (max-width: 735px) {
    grid-gap: ${theming.spacing.medium};
  }
  @media (max-width: 710px) {
    grid-template-columns: 100%;
    grid-template-areas: "one";
  }

  > canvas {
    margin-top: ${theming.spacing.medium};
    width: 100% !important;
    height: auto !important;
  }
`

const InputsWrapper = styled.div`
  margin-top: ${theming.spacing.large};
  display: grid;
  grid-template-columns: repeat(2, auto);
  grid-column-gap: ${theming.spacing.large};
  justify-content: center;
  @media (max-width: ${theming.wrapper.medium}) {
    grid-template-columns: repeat(1, auto);
    grid-row-gap: ${theming.spacing.large};
  }
`

const Tabs = styled(UnstyledTabs)`
  margin-top: ${theming.spacing.huge};
`

const TabList = styled(UnstyledTabList)`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 0;
  margin: 0 0 ${theming.spacing.medium} 0;
`

const Tab = styled(UnstyledTab).attrs({
  selectedClassName: "selected",
  disabledClassName: "disabled"
})`
  text-align: center;
  padding: ${theming.spacing.small} ${theming.spacing.medium};
  list-style: none;
  cursor: pointer;
  background: #fafafa;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.02), 0px 4px 4px rgba(0, 0, 0, 0.02),
    0px 8px 8px rgba(0, 0, 0, 0.03);
  border-radius: 60px;
  margin-right: ${theming.spacing.small};
  margin-bottom: ${theming.spacing.small};
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
    color: ${theming.color.white};
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
    animation: 0.6s ${FadeIn} 0.2s ease-out 1 forwards;
    opacity: 0;
  }
`

Tab.tabsRole = "Tab"
Tabs.tabsRole = "Tabs"
TabPanel.tabsRole = "TabPanel"
TabList.tabsRole = "TabList"

const WrittenExplanation = styled.p`
  padding: 0;
  margin: 0 0 ${theming.spacing.large} 0;
  text-align: center;
  line-height: 1.5;
  font-size: ${theming.font.h3};
`

export default Portfolio
