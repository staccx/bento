import { action, observable } from "mobx"
import { differenceInCalendarYears } from "date-fns"
import axios from "axios"
import mock from "./data.json"
import { clamp, inverseLerp } from "@staccx/math"
import qs from "qs"
import { parseDate } from "../utils/parseDate"

const client = axios.create({
  baseURL: process.env.NODE_ENV === "production" ? "https://demo.quantfol.io/" : "",
  headers: {
    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2RlbW8ucXVhbnRmb2wuaW8iLCJhdWQiOiJRUE0tREVNTyIsInN1YiI6IlF1YW50Zm9saW86aW50ZWdyYXRpb24tdGVzdGluZyIsImlhdCI6IjE1MTY2MzM1ODMiLCJleHAiOiIxNTc5NzA1NTgzIn0.3fc44XDwBkcJwHBlwP0qQGKwCsl076Fxls6j55Ts2aY`
  }
})

export const horizonLabels = [
  "Soon",
  "Rainy days",
  "No goal",
  "Build fortune",
  "Pension"
]

export const horizonYears = [
  "3+ years",
  "5+ years",
  "10 years",
  "10+ years",
  "25 years"
]

export const riskLabels = ["LOW", "MEDIUM", "HIGH"]

export const optionList = [
  { label: "USA", code: "c11", img: "/img/usa.jpg" },
  { label: "Latin America", code: "c13", img: "/img/latam.jpg" },
  { label: "Asia / Pacific", code: "c12", img: "/img/asia.jpg" },
  { label: "Europe", code: "c10", img: "/img/europe.jpg" },
  { label: "Automation & Robotics", code: "c100", img: "/img/robots.jpg" },
  { label: "Digitalisation", code: "c101", img: "/img/digital.jpg" },
  { label: "Ageing Population", code: "c102", img: "/img/ageing.jpg" },
  { label: "Healthcare Innovation", code: "c103", img: "/img/healthcare.jpg" },
  { label: "Clean Energy", code: "c105", img: "/img/cleanenergy.jpg" }
]

class ApiStore {
  @observable savingsplan = null
  @observable marketReturns = null
  @observable recommendedPortfolio = []
  @observable forecastedAnnualReturn = 0
  @observable forecast = null
  @observable backtest = null
  @observable expected = 0
  @observable calculated = 0
  @observable years = null

  @observable currentRisk = null
  @observable horizon = null

  @observable optionList = []

  @observable depositStart = 0
  @observable depositMonthly = 2000

  @observable timeout = null

  @observable isChartLoading = true

  @observable settings = null

  @action setIsChartLoading = isLoading => (this.isChartLoading = isLoading)

  @action
  toggleOption = option => {
    const index = this.optionList.indexOf(option)
    if (index !== -1) {
      this.optionList.splice(index, 1)
    } else {
      this.optionList.push(option)
    }

    this.getResultFromApi()
  }

  @action
  setDefaults = settings => {
    this.setRisk(settings.riskDefault)
    this.setHorizon(settings.horizonDefault)
    this.setDepositStart(settings.depositStart)
    this.setDepositMonthly(settings.depositMonthly)

    this.settings = {
      horizonLow: settings.horizonRange.low,
      horizonHigh: settings.horizonRange.high,
      riskLow: settings.riskRange.low,
      riskHigh: settings.riskRange.high
    }
  }

  @action
  setRisk = risk => {
    this.currentRisk = risk
    this.getResultFromApi()
  }

  @action
  setDepositStart = value => {
    const clamped = clamp(0, 1000000, value)
    this.depositStart = clamped
    this.getResultFromApi()
  }
  @action
  setDepositMonthly = value => {
    this.depositMonthly = clamp(0, 1000000, value)
    this.getResultFromApi()
  }

  @action
  setHorizon = horizon => {
    this.horizon = horizon
    this.getResultFromApi()
  }

  @action
  getResultFromApi = () => {
    clearTimeout(this.timeout)
    this.isChartLoading = true
    this.timeout = setTimeout(() => {
      client
        .get("qpm", {
          params: {
            InvestmentHorizon: Math.floor(clamp(1, 4, this.horizon)),
            RiskTolerance: getActualRisk(this.currentRisk),
            PeriodicSavings: this.depositMonthly,
            StartingCapital: this.depositStart,
            OptionList: this.optionList.length
              ? this.optionList.map(o => o)
              : null
          },
          paramsSerializer: params => {
            if (!params.OptionList) {
              delete params.OptionList
            }
            return qs.stringify(params, { indices: false })
          }
        })
        .then(result => result.data)
        .then(result => {
          this.isChartLoading = false
          this.savingsplan = result.savingsPlan
          this.forecast = this.savingsplan.forecast
          this.backtest = this.savingsplan.backtest
          const forecastArray = Object.keys(this.forecast)
          const last = forecastArray[forecastArray.length - 1]
          this.expected = this.forecast[last].Median
          const lastDate = parseDate(last)
          this.years = differenceInCalendarYears(lastDate, new Date()) + 1

          const backtestArray = Object.keys(this.savingsplan.backtest)
          const lastBacktest = backtestArray[backtestArray.length - 1]
          this.calculated = this.savingsplan.backtest[
            lastBacktest
          ].PortfolioReturns
          this.marketReturns = result.marketReturns
          this.recommendedPortfolio = result.recommendedPortfolio
          this.forecastedAnnualReturn = result.forecastedAnnualReturn
        })
        .catch(err => {
          console.warn(err)
          console.log("FAlling back to mock")
          this.savingsplan = mock.savingsPlan
          this.forecast = this.savingsplan.forecast
          this.backtest = this.savingsplan.backtest
          this.marketReturns = mock.marketReturns
          this.recommendedPortfolio = mock.recommendedPortfolio

          this.forecastedAnnualReturn = mock.forecastedAnnualReturn
          this.isChartLoading = false
          const forecastArray = Object.keys(this.forecast)
          const last = forecastArray[forecastArray.length - 1]
          this.expected = this.forecast[last].Median
          const lastDate = parseDate(last)
          this.years = differenceInCalendarYears(lastDate, new Date()) + 1

          const backtestArray = Object.keys(this.savingsplan.backtest)
          const lastBacktest = backtestArray[backtestArray.length - 1]
          this.calculated = this.savingsplan.backtest[
            lastBacktest
            ].PortfolioReturns
        })
    }, 600)
  }
}

export const getActualRisk = (risk, min = 1, max = 100, low = 1, high = 3) =>
  Math.round(clamp(low, high, inverseLerp(min, max, risk) * high))

export default ApiStore
