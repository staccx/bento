import React from "react"
import { ThemeProvider, VARIANT_DEFAULT } from "@staccx/theme"
import { Heading, Divider } from "@staccx/base"
import ComponentDocumentation from "./ComponentDocumentation"

const getVariants = (theme, name) => {
  const variants = theme.hasOwnProperty(name)
    ? Reflect.ownKeys(theme[name]).map(key => ({
        name: key,
        value: theme[name][key]
      }))
    : []

  if (!variants.some(v => v.name === VARIANT_DEFAULT)) {
    variants.push({ name: VARIANT_DEFAULT, value: "" })
  }
  return variants
}

export default props => {
  const {
    theme,
    component,
    themeName,
    themes,
    componentState,
    setComponentState
  } = props

  const variants = getVariants(theme, component.name)

  return (
    <ThemeProvider themeName={themeName} themes={themes}>
      <div>
        <ComponentDocumentation width={"320px"}>
          {variants.map(variant => (
            <React.Fragment>
              <Heading level={5}>{variant.name}</Heading>
              <Divider />
              {component.render({
                ...componentState,
                setState: setComponentState,
                variant: variant.name
              })}
            </React.Fragment>
          ))}
        </ComponentDocumentation>
      </div>
    </ThemeProvider>
  )
}
