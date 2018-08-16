const getVehicleLabel = label => {
  switch (label) {
    case "make":
      return "Kjøretøy"
    case "chassisType":
      return "Karosseritype"
    case "variant":
      return "Modellvariant"
    case "maxMileage":
      return "Max. tillat årlig kj.lengde"
    case "mileageOverageFee":
      return "Pris pr. km over max kj. lengde"
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
    case "maxDriveRange":
      return "Max. tillat årlig kj.lengde"
    case "pricePerKm":
      return "Pris per km"
    default:
      return null
  }
}

export default getVehicleLabel
