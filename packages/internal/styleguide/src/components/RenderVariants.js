import React from "react"
import { ThemeProvider } from "@staccx/theme"
import { Heading, Divider, Text } from "@staccx/base"
import ComponentDocumentation from "./ComponentDocumentation"

export default ({
  component,
  themeName,
  themes,
  componentState,
  setComponentState,
  variants,
  componentProps,
  width,
  renderHeading
}) => {
  return (
    <ComponentDocumentation width={width}>
      <ThemeProvider themeName={themeName} themes={themes}>
        <div>
          {Reflect.ownKeys(variants).map(key => {
            const variant = variants[key]
            if (renderHeading) {
              return (
                <React.Fragment key={variant.name}>
                  <Heading level={5}>{variant.name}</Heading>
                  {variant.isOverriddenDefault && (
                    <Text>Overridden default</Text>
                  )}
                  <Divider />
                  {component.render({
                    ...componentState,
                    setState: setComponentState,
                    variant: variant.value
                  })}
                </React.Fragment>
              )
            }
            return component.render({
              ...componentState,
              setState: setComponentState,
              variant: variant.value
            })
          })}
        </div>
      </ThemeProvider>
    </ComponentDocumentation>
  )
}
