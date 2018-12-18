import React from "react"
import { Box } from "@staccx/base"

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
  //    help,
  //   children
  // } = props
  const { errors, children } = props

  return (
    <Box variant="schemaContainer">
      {children}
      {errors}
    </Box>
  )
}

export default CustomFieldTemplate
