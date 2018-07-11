import React from "react"
import { ThemeProvider } from "@staccx/theme"
import { Heading, Divider, Text, Layout } from "@staccx/base"
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
    <Layout variant="componentAndProps">
      <ComponentDocumentation width={width}>
        <ThemeProvider themeName={themeName} themes={themes}>
          <div>
            {Reflect.ownKeys(variants).map(key => {
              const variant = variants[key]
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
            })}
          </div>
        </ThemeProvider>
      </ComponentDocumentation>
      {/* <CustomProps
        componentProps={componentProps}
        setComponentState={setComponentState}
      /> */}
    </Layout>
  )
}
