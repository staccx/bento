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
          <div key={prop.content.key}>{prop.content}</div>
        ))}
      </div>
      {description}
    </React.Fragment>
  )
}

export default ObjectFieldTemplate
