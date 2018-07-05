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
    default:
      return null
  }
}

export default getVehicleLabel
