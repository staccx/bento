import React from "react"
import { Wrapper } from "@staccx/base"

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
        {properties.map(prop => (
          <React.Fragment key={prop.content.key}>{prop.content}</React.Fragment>
        ))}
        {description}
      </Wrapper>
    </Wrapper>
  )
}

export default CustomObjectFieldTemplate
