import React from "react"
import { Wrapper, Layout, Box, theming } from "@staccx/base"

const CustomObjectFieldTemplate = ({
  TitleField,
  DescriptionField,
  properties,
  title,
  description,
  uiSchema,
  ...rest
}) => {
  const options = uiSchema["ui:options"] || {}
  const { highlightBox = false, label = true } = options
  const level = rest.idSchema.$id.split("_").length
  return (
    <Box variant={highlightBox ? "highlightBox" : theming.VARIANT_DEFAULT}>
      {label && (
        <TitleField title={title} level={level} variant={"schemaHeading"} />
      )}
      <Wrapper size={"medium"}>
        <Layout rowGap={"small"}>
          <DescriptionField description={description} />
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
