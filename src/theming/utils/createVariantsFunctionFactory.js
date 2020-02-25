import curry from "lodash.curry"
import createVariants from "./createVariants"
import { theme as instance } from "../index"

export default themeProps =>
  Object.entries(themeProps).reduce((acc, curr) => {
    const [key, value] = curr
    return {
      ...acc,
      [key]: {
        ...value,
        createVariants: variants => {
          const styles = curry(createVariants)(variants)(value)
          instance.append(styles)
          return styles
        }
      }
    }
  }, {})
