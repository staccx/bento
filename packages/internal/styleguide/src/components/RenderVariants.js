import React from "react"
import { Heading, Divider, Text } from "@staccx/base"
import ComponentDocumentation from "./ComponentDocumentation"

export default ({
  component,
  theme,
  componentState,
  setComponentState,
  variants,
  componentProps,
  width,
  renderHeading
}) => {
  return (
    <ComponentDocumentation width={width}>
      <div>
        {Reflect.ownKeys(variants).map(key => {
          const variant = variants[key]
          if (renderHeading) {
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
          }
          return component.render({
            key: variant.name,
            ...componentState,
            setState: setComponentState,
            variant: variant.value
          })
        })}
      </div>
    </ComponentDocumentation>
  )
}
