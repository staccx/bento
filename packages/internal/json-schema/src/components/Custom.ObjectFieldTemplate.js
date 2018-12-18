import React from "react"
import { Wrapper, Layout } from "@staccx/base"

const CustomObjectFieldTemplate = ({
  TitleField,
  properties,
  title,
  description,
  ...rest
}) => {

  console.log(rest)
  const level = rest.idSchema.$id.split("_").length
  return (
    <Wrapper>
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
    </Wrapper>
  )
}

export default CustomObjectFieldTemplate
