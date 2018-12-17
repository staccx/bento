import React from "react"
import { Wrapper, Layout } from "@staccx/base"

const CustomObjectFieldTemplate = ({
  TitleField,
  properties,
  title,
  description
}) => {
  return (
    <Wrapper>
      <TitleField title={title} />
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
