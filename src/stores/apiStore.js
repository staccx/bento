import { observable, action } from "mobx"
import axios from "axios"
import data from "./data.json"
import { inverseLerp, clamp } from "@staccx/base/dist/index.es"

const client = axios.create({
  baseURL: "https://13.95.84.217/",
  headers: {
    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2RlbW8ucXVhbnRmb2wuaW8iLCJhdWQiOiJRUE0tREVNTyIsInN1YiI6IlF1YW50Zm9saW86aW50ZWdyYXRpb24tdGVzdGluZyIsImlhdCI6IjE1MTY2MzM1ODMiLCJleHAiOiIxNTc5NzA1NTgzIn0.3fc44XDwBkcJwHBlwP0qQGKwCsl076Fxls6j55Ts2aY`
  }
})

class ApiStore {
  @observable savingsplan = null
  @observable marketReturns = null
  @observable recommendedPortfolio = null
  @observable forecastedAnnualReturn = 0
  @observable forecast = null

  @observable resultDirty = false

  @observable currentRisk = null

  @observable depositStart = 0
  @observable depositMonthly = 2000

  @observable timeout = null

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
  getResultFromApi = () => {
    clearTimeout(this.timeout)
    this.timeout = setTimeout(() => {
      client
        .get("qpm", {
          params: {
            InvestmentHorizon: 3,
            RiskTolerance: Math.round(
              clamp(1, 3, inverseLerp(1, 100, this.currentRisk) * 3)
            ),
            PeriodicSavings: this.depositMonthly,
            StartingCapital: this.depositStart
          }
        })
        .then(result => result.data)
        .then(result => {
          this.savingsplan = result.savingsPlan
          this.forecast = this.savingsplan.forecast
          this.marketReturns = result.marketReturns
          this.recommendedPortfolio = result.recommendedPortfolio
          this.forecastedAnnualReturn = result.forecastedAnnualReturn
        })
    }, 200)
  }
  @action
  getResult = () => {
    this.savingsplan = data.savingsplan
    this.marketReturns = data.marketReturns
    this.recommendedPortfolio = data.recommendedPortfolio
    this.forecastedAnnualReturn = data.forecastedAnnualReturn
  }
}

export default ApiStore
