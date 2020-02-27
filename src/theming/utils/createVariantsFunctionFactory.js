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

export const componentCreateFactory = component => variants => {
  if (!component) {
    throw new Error("No component")
  }

  if (!component.hasOwnProperty("themeProps")) {
    throw new Error(
      "Theme props not defined. Called before asssigment? <Component>.themeProps = themeProps"
    )
  }

  if (!variants) {
    throw new Error("Why? No variants? 🤷")
  }

  for (const key of Object.keys(variants)) {
    if (!component.themeProps.hasOwnProperty(key)) {
      throw new Error(
        `${key} no a valid themeProp for ${
          component.name
        }. Valid themeProps are ${Object.keys(component.themeProps).join(", ")}`
      )
    }
    const themeProp = component.themeProps[key]
    const variant = variants[key]

    const styles = createVariants(variant, themeProp.name)
    instance.append(styles)
  }
}
