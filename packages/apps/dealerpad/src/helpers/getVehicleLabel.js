const getVehicleLabel = label => {
  switch (label) {
    case "make":
      return "Kjøretøy"
    case "chassisType":
      return "Karosseritype"
    case "variant":
      return "Modellvariant"
    case "maxMileage":
    case "maxDriveRange":
      return "Max. tillat årlig kj.lengde"
    case "mileageOverageFee":
    case "pricePerKm":
      return "Pris overkjørte km"
    case "options":
      return "Ekstrautstyr"
    case "vehicle":
      return "Modell"
    case "yearModel":
      return "Årsmodell"
    case "bodyStyle":
      return "Modellvariant"
    case "enhancement":
      return "Ekstrautstyr"
    default:
      return null
  }
}

export default getVehicleLabel
