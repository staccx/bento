import React from "react"
import { Layout, Box, theming } from "@staccx/base"

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
      <Layout
        rowGap={level === 1 ? "largePlus" : level === 2 ? "medium" : "small"}
      >
        <DescriptionField description={description} />
        {properties.map(prop => {
          return (
            <React.Fragment key={prop.content.key}>
              {prop.content}
            </React.Fragment>
          )
        })}
      </Layout>
    </Box>
  )
}

export default CustomObjectFieldTemplate
