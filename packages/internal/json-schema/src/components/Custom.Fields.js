import React from "react"
import { Label, Heading, Button } from "@staccx/base"

const CustomTitleField = ({ title, required }) => {
  return title ? <Heading>{title}</Heading> : null
}
const CustomDescriptionField = ({ id, description }) => {
  return description ? <Label id={id}>{description}</Label> : null
}
const ArrayField = (...props) => {
  console.log(props)
  return <Button>test</Button>
}

export default {
  TitleField: CustomTitleField,
  DescriptionField: CustomDescriptionField,
}
