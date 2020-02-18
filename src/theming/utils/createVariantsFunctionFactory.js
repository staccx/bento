import curry from "lodash.curry"
import createVariants from "./createVariants"

export default themeProps =>
  Object.entries(themeProps).reduce((acc, curr) => {
    const [key, value] = curr
    return {
      ...acc,
      [key]: {
        ...value,
        createVariants: variants => curry(createVariants)(variants)(value)
      }
    }
  }, {})
