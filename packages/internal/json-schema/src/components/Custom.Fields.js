import React from "react"
import { Label, Heading, Alert } from "@staccx/base"

const CustomTitleField = ({ title, required }) => {
  return title ? <Heading>{title}</Heading> : null
}
const CustomDescriptionField = ({ id, description }) => {
  return description ? <Label id={id}>{description}</Label> : null
}

const LatLngField = props => (
  <Alert>Her kan vi rendre en custom component for custom fields. </Alert>
)

export default {
  TitleField: CustomTitleField,
  DescriptionField: CustomDescriptionField,
  geo: LatLngField
}
