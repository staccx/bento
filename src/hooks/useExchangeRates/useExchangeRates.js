import React from "react"
import axios from "axios"

export const useExchangeRates = currency => {
  const [rates, ratesSet] = React.useState(null)

  React.useEffect(() => {
    axios
      .get(`https://api.exchangeratesapi.io/latest?base=${currency}`)
      .then(response => response.data)
      .then(result => {
        ratesSet(result.rates)
      })
  }, [currency])

  const validateCurrency = React.useCallback(
    curr => {
      if (!rates) {
        return false
      }

      if (!rates.hasOwnProperty(curr)) {
        throw new Error(`${curr} is an invalid currency`)
      }

      return true
    },
    [rates]
  )

  const convert = React.useCallback(
    (curr, value) => {
      if (!validateCurrency(curr)) {
        return 0
      }
      return rates[curr] * value
    },
    [rates, validateCurrency]
  )

  const getExchangeRate = React.useCallback(
    curr => {
      if (!validateCurrency(curr)) {
        return 0
      }
      return rates[curr]
    },
    [rates, validateCurrency]
  )

  return {
    convert,
    getExchangeRate
  }
}
