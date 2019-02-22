import axios from "axios"
import { getPortfolio } from "./portfolio"
import { getCategories } from "./categories"

class QuantfolioClient {
  constructor(backend, apiKey) {
    this.backend = backend
    this.apiKey = apiKey

    this.init()
  }

  init = async () => {
    const success = await this.authorize()
    if (success) {
      this.client = axios.create({
        baseURL: this.backend,
        headers: {
          "content-type": "application/json",
          Authorization: this.Authorization,
          "cache-control": "no-cache"
        }
      })
    }
  }

  authorize = async () => {
    try {
      const result = await axios.post(
        "/auth/login",
        {},
        { apiKey: this.apiKey }
      )
      const { status, Authorization, message } = result
      if (status === "success") {
        this.Authorization = Authorization
        return true
      } else {
        console.log("Authorization failed ", message)
        return false
      }
    } catch (e) {
      throw e
    }
  }

  getPortfolio = ({
    investmentHorizon = 1,
    riskTolerance = 1,
    startingCapital = 1000,
    periodicSavings = 1000,
    optionals = []
  }) =>
    getPortfolio(this.client, {
      investmentHorizon,
      riskTolerance,
      startingCapital,
      periodicSavings,
      optionals
    })

  getCategories = () => getCategories(this.client)

  getMacros = async () => {
    const { data } = await axios.get(
      "https://quantfolio-5b43.restdb.io/rest/macroai/5c52ceb60968281c0000daeb",
      {
        headers: {
          "content-type": "application/json",
          "x-apikey": "5c52cdc85594726a72eca24b",
          "cache-control": "no-cache"
        }
      }
    )

    return data
  }
}

export default QuantfolioClient
