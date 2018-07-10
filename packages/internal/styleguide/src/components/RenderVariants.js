import React from "react"
import { ThemeProvider, VARIANT_DEFAULT } from "@staccx/theme"
import { Heading, Divider, Text } from "@staccx/base"
import ComponentDocumentation from "./ComponentDocumentation"

const getVariants = (theme, themeProps) => {
  const variants = {}
  variants[VARIANT_DEFAULT] = { name: "default", value: VARIANT_DEFAULT }
  Reflect.ownKeys(themeProps).reduce((acc, curr) => {
    const prop = themeProps[curr]

    if (theme.hasOwnProperty(prop.name)) {
      const vars = theme[prop.name]

      Reflect.ownKeys(vars).reduce((v, k) => {
        variants[k] = {
          name: `${k}`,
          value: k,
          isOverriddenDefault: k === VARIANT_DEFAULT
        }
      }, {})
    }

    return acc
  }, {})

  if (!variants.hasOwnProperty(VARIANT_DEFAULT)) {
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

  const variants = getVariants(theme, component.component.themeProps)

  return (
    <ThemeProvider themeName={themeName} themes={themes}>
      <div>
        <ComponentDocumentation width={"320px"}>
          {Reflect.ownKeys(variants).map(key => {
            const variant = variants[key]
            return (
              <React.Fragment key={variant.name}>
                <Heading level={5}>{variant.name}</Heading>
                {variant.isOverriddenDefault && <Text>Overridden default</Text>}
                <Divider />
                {component.render({
                  ...componentState,
                  setState: setComponentState,
                  variant: variant.value
                })}
              </React.Fragment>
            )
          })}
        </ComponentDocumentation>
      </div>
    </ThemeProvider>
  )
}
