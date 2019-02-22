export const getPortfolio = async (
  client,
  {
    investmentHorizon = 1,
    riskTolerance = 1,
    startingCapital = 1000,
    periodicSavings = 1000,
    optionals = []
  }
) => {
  try {
    const result = await client.get(
      "/api/portfolio",
      {},
      {
        investment_horizon: investmentHorizon,
        risk_tolerance: riskTolerance,
        starting_capital: startingCapital,
        periodic_savings: periodicSavings,
        optionals
      }
    )

    return result.data
  } catch (e) {
    throw e
  }
}
