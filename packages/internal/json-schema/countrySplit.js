const countries = require("./src/data/countries")
const fs = require("fs-extra")

const split = async () => {
  const codes = countries.map(item => item.code)
  const names = countries.map(item => item.name)
  await fs.writeJson("countryCodes.json", codes)
  await fs.writeJson("countryNames.json", names)
}

split()
