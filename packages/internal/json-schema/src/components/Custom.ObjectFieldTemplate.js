import React from "react"
import { Wrapper, Layout, Box, theming } from "@staccx/base"

const CustomObjectFieldTemplate = ({
  TitleField,
  properties,
  title,
  description,
  uiSchema,
  ...rest
}) => {
  const highlightBox = uiSchema["ui:options"] ? !!uiSchema["ui:options"].highlightBox : false
  console.log(rest)
  const level = rest.idSchema.$id.split("_").length
  return (
    <Box variant={highlightBox ? "highlightBox" : theming.VARIANT_DEFAULT}>
      <TitleField title={title} level={level} variant={"schemaHeading"} />
      <Wrapper size={"small"}>
        <Layout rowGap={"small"}>
          {description}
          {properties.map(prop => {
            return (
              <React.Fragment key={prop.content.key}>
                {prop.content}
              </React.Fragment>
            )
          })}
        </Layout>
      </Wrapper>
    </Box>
  )
}

export default CustomObjectFieldTemplate
