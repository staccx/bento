const getStatus = status => {
  switch (status) {
    case 1:
      return "Opprettet"
    case 2:
      return "Dokumentasjon"
    case 3:
      return "Kontroll"
    case 4:
      return "Utbetaling"
    case isNaN:
      console.warn("Status must be a number")
      break
    default:
      return "Ukjent status"
  }
}

export default getStatus
