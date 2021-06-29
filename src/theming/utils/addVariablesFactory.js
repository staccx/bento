import set from "lodash.set"
import { Theme, themes } from "../index"
import { themeLogger } from "../theme.logger"
import { getDisplayName } from "./getDisplayName"

export const addVariablesFactory = component => (
  variables,
  themeName = "_default"
) => {
  if (!themes.hasOwnProperty(themeName)) {
    themeLogger.warn(
      `Theme with name ${themeName} does not exists. One will be created`
    )
    themes[themeName] = new Theme()
  }
  const theme = themes[themeName]

  if (!component) {
    throw new Error("No component")
  }

  if (!variables) {
    throw new Error("addVariables called with no variables")
  }

  for (const key of Object.keys(variables)) {
    const variant = variables[key]

    const styles = {}
    set(styles, `variables.${getDisplayName(component)}.${key}`, variant)
    theme.append(styles)
  }
}
