import createWrapperProxy from "react-cosmos-wrapper-proxy"
import { ThemeProvider, injectGlobal } from "styled-components"
import {BaseTheme} from "@staccx/base"
import theme from "./theme"

injectGlobal`
${theme.reset(theme)}
${theme.global}
`

console.log(theme)
const baseThemeProxy = createWrapperProxy({
  // Required
  component: ThemeProvider, // The wrapper component
  fixtureKey: "baseTheme", // Used for toggling (or passing props)

  // Optional
  // Props to pass to the wrapper component
  props: {
    theme: BaseTheme
  }
})

const themeProxy = createWrapperProxy({
  // Required
  component: ThemeProvider, // The wrapper component
  fixtureKey: "themed", // Used for toggling (or passing props)

  // Optional
  // Props to pass to the wrapper component
  props: {
    theme: theme
  }
})

export default [baseThemeProxy, themeProxy]
