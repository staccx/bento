import React from "react"
import { Layout, Box, theming } from "@staccx/base"

const CustomObjectFieldTemplate = ({
  TitleField,
  DescriptionField,
  properties,
  title,
  description,
  uiSchema,
  help,
  ...rest
}) => {
  const options = uiSchema["ui:options"] || {}
  const { highlightBox = false, label = true, variant = [] } = options
  const level = rest.idSchema.$id.split("_").length
  return (
    <Box
      variant={[
        highlightBox ? "highlightBox" : theming.VARIANT_DEFAULT,
        ...variant
      ]}
    >
      {label && (
        <TitleField
          title={title}
          level={level}
          variant={"schemaHeading"}
          help={help}
        />
      )}
      <Layout
        variant={["schemaLayout", ...variant]}
        rowGap={"tiny"}
        level={level}
      >
        <DescriptionField description={description} help={help} />
        {properties.map(prop => {
          return (
            <React.Fragment key={prop.content.key}>
              {React.cloneElement(prop.content, { level })}
            </React.Fragment>
          )
        })}
      </Layout>
    </Box>
  )
}

export default CustomObjectFieldTemplate
