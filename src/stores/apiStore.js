import { observable, action } from "mobx"
import { differenceInCalendarYears } from "date-fns"
import axios from "axios"
import mock from "./data.json"
import { inverseLerp, clamp } from "@staccx/base/dist/index.es"
import qs from "qs"
import { parseDate } from "../utils/parseDate"

const client = axios.create({
  baseURL: "https://13.95.84.217/",
  headers: {
    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2RlbW8ucXVhbnRmb2wuaW8iLCJhdWQiOiJRUE0tREVNTyIsInN1YiI6IlF1YW50Zm9saW86aW50ZWdyYXRpb24tdGVzdGluZyIsImlhdCI6IjE1MTY2MzM1ODMiLCJleHAiOiIxNTc5NzA1NTgzIn0.3fc44XDwBkcJwHBlwP0qQGKwCsl076Fxls6j55Ts2aY`
  }
})

class ApiStore {
  @observable savingsplan = null
  @observable marketReturns = null
  @observable recommendedPortfolio = []
  @observable forecastedAnnualReturn = 0
  @observable forecast = null
  @observable expected = 0
  @observable calculated = 0
  @observable years = null

  @observable currentRisk = 1
  @observable horizon = 1

  @observable optionList = []

  @observable depositStart = 0
  @observable depositMonthly = 2000

  @observable timeout = null

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
    this.timeout = setTimeout(() => {
      client
        .get("qpm", {
          params: {
            InvestmentHorizon: Math.floor(this.horizon),
            RiskTolerance: Math.round(
              clamp(1, 3, inverseLerp(1, 100, this.currentRisk) * 3)
            ),
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
          this.savingsplan = result.savingsPlan
          this.forecast = this.savingsplan.forecast
          const forecastArray = Object.keys(this.forecast)
          const last = forecastArray[forecastArray.length - 1]
          this.expected = this.forecast[last].Median
          const lastDate = parseDate(last)
          this.years = differenceInCalendarYears(lastDate, new Date())

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
          this.marketReturns = mock.marketReturns
          this.recommendedPortfolio = mock.recommendedPortfolio
          this.forecastedAnnualReturn = mock.forecastedAnnualReturn
        })
    }, 200)
  }
}

export default ApiStore
