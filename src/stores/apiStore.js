import { observable,action } from 'mobx'
import axios from 'axios'
import data from './data.json'

const client = axios.create({
  baseURL: 'https://13.95.84.217/',
  headers:
    {
      Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2RlbW8ucXVhbnRmb2wuaW8iLCJhdWQiOiJRUE0tREVNTyIsInN1YiI6IlF1YW50Zm9saW86aW50ZWdyYXRpb24tdGVzdGluZyIsImlhdCI6IjE1MTY2MzM1ODMiLCJleHAiOiIxNTc5NzA1NTgzIn0.3fc44XDwBkcJwHBlwP0qQGKwCsl076Fxls6j55Ts2aY`
    }
})

class ApiStore {
  @observable savingsplan = null
  @observable marketReturns = null
  @observable recommendedPortfolio = null
  @observable forecastedAnnualReturn = 0

  // @action getResult = () => client.get('qpm', {
  //   params: {
  //     InvestmentHorizon:3,
  //     RiskTolerance:1,
  //     PeriodicSavings:1000,
  //     StartingCapital:10000
  //   }
  // }).then(result => result.data)
  @action getResult = () => {
    this.savingsplan = data.savingsplan
    this.marketReturns = data.marketReturns
    this.recommendedPortfolio = data.recommendedPortfolio
    this.forecastedAnnualReturn = data.forecastedAnnualReturn
  }
}

export default ApiStore