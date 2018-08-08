const getLoanType = loanType => {
  switch (loanType) {
    case "car-loan":
      return "Lån"
    case "leasing":
      return "Leasing"
    case "leasingPlus":
      return "Leasing pluss"
    case "privateRent":
      return "Privatleie"
    case "privateRentPlus":
      return "Privatleie Pluss"
    case "rent":
      return "Leie"
    default:
      return null
  }
}

export default getLoanType
