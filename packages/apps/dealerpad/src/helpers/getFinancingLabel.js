const getStatus = label => {
  switch (label) {
    case "purchasePrice":
      return "Kjøpspris"
    case "oneTimeFee":
      return "Engangsavgift"
    case "startRent(eks mva)":
      return "Startleie eks. mva"
    case "startRent(inc mva)":
      return "Startleie inkl. mva"
    case "rentCalculationBasis":
      return "Leieberegningsgrunnlag"
    case "rentPeriodMnd":
      return "Leieperiode mnd"
    case "rentTerm":
      return "Leietermin"
    case "salvage":
      return "Restverdi"
    case "establishmentFees(inc mva)":
      return "Etableringsgebyr inkl. mva"
    case "installmentFees":
      return "Termingebyr inkl. mva"
    case "totalFee":
      return "Total rente"
    case "termFeePerMnd(inc mva)":
      return "Terminleie per mnd inkl. mva: "
    case "purchasePriceWithExtra":
      return "Kjøpspris, eks. årsavgift og evt reg omkostning, inkl. engangsavgift"
    default: {
      return "___" + label
    }
  }
}

export default getStatus
