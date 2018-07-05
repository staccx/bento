const getStatus = label => {
  switch (label) {
    case "price":
      return "Pris"
    case "oneTimeFee":
      return "Engangsavgift"
    case "startRent":
      return "Startleie eks. mva"
    case "startRentIncTax":
      return "Startleie inkl. mva"
    case "rentCalculationBasis":
      return "Leieberegningsgrunnlag"
    case "rentLength":
      return "Leieperiode mnd"
    case "rentFrequency":
      return "Leietermin"
    case "restValue":
      return "Restverdi"
    case "arrangementFee":
      return "Etableringsgebyr inkl. mva"
    case "installmentFee":
      return "Termingebyr inkl. mva"
    case "totalInterest":
      return "Total rente"
    case "termRent":
      return "Terminleie per mnd inkl. mva: "
    default:
      return null
  }
}

export default getStatus
