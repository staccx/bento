import React from "react"

const ObjectFieldTemplate = ({
  TitleField,
  properties,
  title,
  description
}) => {
  return (
    <React.Fragment>
      <TitleField title={title} />
      <div>
        {properties.map(prop => (
          <React.Fragment key={prop.content.key}>{prop.content}</React.Fragment>
        ))}
      </div>
      {description}
    </React.Fragment>
  )
}

export default ObjectFieldTemplate
