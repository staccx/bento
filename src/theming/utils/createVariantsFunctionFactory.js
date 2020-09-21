import createVariants from "./createVariants"
import { Theme, themes } from "../index"
import { themeLogger } from "../theme.logger"

export const componentCreateFactory = component => (
  variants,
  name = "_default"
) => {
  if (!themes.hasOwnProperty(name)) {
    themeLogger.warn(
      `Theme with name ${name} does not exists. One will be created`
    )
    themes[name] = new Theme()
  }
  const theme = themes[name]

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

    const styles = createVariants(
      variant,
      themeProp?.references?.name ?? themeProp.name
    )
    theme.append(styles)
  }
}
