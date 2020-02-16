import { countries } from "libphonenumber-js/metadata.min.json"
import { distinct } from "../../../../utils/distinct"
export const NORWAY = {
  name: "NO",
  code: "47"
}

export default distinct(
  Object.keys(countries)
    .map(name => {
      return {
        code: countries[name][0],
        name
      }
    })
    .sort((a, b) => {
      return parseInt(a.code, 10) < parseInt(b.code, 10)
    }),
  "code"
)
