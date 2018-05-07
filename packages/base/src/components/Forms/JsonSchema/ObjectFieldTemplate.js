import React from "react"
import Wrapper from "../../Layout/Wrapper/Wrapper"

const ObjectFieldTemplate = ({
  TitleField,
  properties,
  title,
  description
}) => {
  return (
    <Wrapper size={"medium"}>
      <TitleField title={title} />
      <div>
        {properties.map(prop => (
          <div key={prop.content.key}>{prop.content}</div>
        ))}
      </div>
      {description}
    </Wrapper>
  )
}

export default ObjectFieldTemplate
