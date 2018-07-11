import React from "react"
import { ThemeProvider } from "@staccx/theme"
import { Heading, Divider, Text } from "@staccx/base"
import ComponentDocumentation from "./ComponentDocumentation"
import CustomProps from "./CustomProps"

export default ({
  component,
  themeName,
  themes,
  componentState,
  setComponentState,
  variants,
  componentProps,
  width
}) => {
  return (
    <ComponentDocumentation width={width}>
      <ThemeProvider themeName={themeName} themes={themes}>
        <div>
          <CustomProps
            componentProps={componentProps}
            setComponentState={setComponentState}
          />
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
        </div>
      </ThemeProvider>
    </ComponentDocumentation>
  )
}
