import React, { Component, createRef } from "react"
import {
  Tab as UnstyledTab,
  TabList as UnstyledTabList,
  TabPanel as UnstyledTabPanel,
  Tabs as UnstyledTabs
} from "react-tabs"
import { formatCurrency } from "@staccx/formatting"
import { FadeIn } from "@staccx/animations"
import { theming } from "@staccx/base"
import PieChart from "./components/PieChart"
import PortfolioExpand from "./components/PortfolioExpand"
import PortfolioFilter from "./components/PortfolioFilter"
import ShotgunChart from "./components/ShotgunChart"
import CurrencyInputSteppers from "./components/CurrencyInputSteppers"
import styled from "styled-components"
import stringTrimAll from "../../utils/stringTrimAll"
import QuestionLead from "../QuestionLead"
import Spinner from "../Spinner"
import { i18nInstance } from "@staccx/i18n"

const explodeAmount = 10

class Summary extends Component {
  constructor(props, context) {
    super(props, context)
    this.pieChartInjector = createRef()
  }

  handleInputChange = (value, isStart = true, addToExisting = true) => {
    value = parseInt(stringTrimAll(value.toString()), 10)
    const { depositStart, depositMonthly, setState } = this.props
    const func = isStart
      ? val => setState({ depositStart: val })
      : val => setState({ depositMonthly: val })
    const val =
      value + (addToExisting ? (isStart ? depositStart : depositMonthly) : 0)

    if (func) {
      func(parseInt(stringTrimAll(val.toString()), 10))
    }
  }

  componentDidMount() {
    if (this.pieChartInjector.current) {
      console.log(this.pieChartInjector.current)
      this.pieChart = this.pieChartInjector.current
      this.updatePie(this.props.selectedInstrument, 1000)
    }
  }

  componentDidUpdate() {
    this.updatePie(this.props.selectedInstrument, 100)
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
      setState,
      data,
      selectedInstrument,
      depositStart,
      depositMonthly,
      expected,
      years,
      steps,
      calculated,
      isChartLoading,
      horizon = 0,
      themes,
      savingsPlan,
      ...rest
    } = this.props

    console.log(savingsPlan)

    const recommendedPortfolio = [
      {
        assetClass: {
          code: "c2",
          label: "Money market",
          subclassCode: null
        },
        instrument: {
          isin: "NO0010272347",
          expenseRatio: 0.1,
          name: "KLP FRN",
          performanceId: "0P00000MY7",
          roboEligible: false
        },
        weight: 1
      }
    ]

    return (
      <div>
        <QuestionLead question={i18nInstance.convert(data.header)} />
        <PortfolioFilter
          riskLabels={[]}
          horizonLabels={[]}
          horizon={horizon}
          themes={themes}
        />
        <InputsWrapper>
          <CurrencyInputSteppers
            label={i18nInstance.convert(data.firstDepositLabel)}
            name={"deposit/START_DEPOSIT"}
            value={depositStart}
            onIncrement={() => this.handleInputChange(2000)}
            onDecrement={() => this.handleInputChange(-2000)}
            onChange={e => this.handleInputChange(e.target.value, true, false)}
            id={"deposit_start"}
          />
          <CurrencyInputSteppers
            label={i18nInstance.convert(data.monthlyDepositLabel)}
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
                <Tab>{i18nInstance.convert(data.expectedDevelopmentLabel)}</Tab>
                <Tab>{i18nInstance.convert(data.backtestLabel)}</Tab>
                <Tab disabled>{i18nInstance.convert(data.barChartLabel)}</Tab>
              </TabList>

              <TabPanel>
                <WrittenExplanation>
                  If you save{" "}
                  <strong>
                    {formatCurrency(depositMonthly, {
                      precision: 0
                    })}
                  </strong>{" "}
                  month we expect <br /> you’ll have around{" "}
                  <strong>
                    {formatCurrency(expected, {
                      precision: 0
                    })}
                  </strong>{" "}
                  in <strong>{years} years</strong>
                </WrittenExplanation>
                <ShotgunChart
                  height={300}
                  width={1000}
                  forecast={savingsPlan.forecast}
                />
              </TabPanel>
              <TabPanel>
                <WrittenExplanation>
                  If you saved{" "}
                  <strong>
                    {formatCurrency(depositMonthly, {
                      precision: 0
                    })}
                  </strong>{" "}
                  /month with this portfolio <br />
                  since <strong>1996</strong> you would now have{" "}
                  <strong>
                    {formatCurrency(calculated, {
                      precision: 0
                    })}
                  </strong>
                </WrittenExplanation>
                <ShotgunChart
                  height={300}
                  width={1000}
                  isForecast={false}
                  test
                  backtest={savingsPlan.backtest}
                />
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
              ref={this.pieChartInjector}
              padding={10}
              explodeAmount={10}
              recommendedPortfolio={recommendedPortfolio}
            />
            <PortfolioExpand
              funds={recommendedPortfolio}
              selectedIndex={selectedInstrument}
              onClick={selectedInstrument => setState({ selectedInstrument })}
            />
          </PortfolioWrapper>
        </ContentWrapper>
      </div>
    )
  }
}

Summary.propTypes = {}

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

export default Summary
