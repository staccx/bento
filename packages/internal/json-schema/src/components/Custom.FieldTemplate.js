import React from "react"

// TODO: Handle errors, help, description manually?
const CustomFieldTemplate = props => {
  // const {
  //   id,
  //   classNames,
  //   label,
  //   help,
  //   required,
  //   description,
  //   errors,
  //   children
  // } = props
  const { help, errors, children } = props

  return (
    <React.Fragment>
      {children}
      {errors}
    </React.Fragment>
  )
}

export default CustomFieldTemplate
