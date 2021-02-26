import React from "react"
import SelectSimple from "./SelectSimple"

export default {
  title: "Components/Forms/SelectSimple",
  component: SelectSimple
}

export const Standard = args => {
  return (
    <SelectSimple {...args}>
      <option value="1">Gift</option>
      <option value="2">Samboer</option>
      <option value="3">Skilt</option>
      <option value="4">Partnerskap</option>
      <option value="5">Enkemann</option>
      <option value="6">Separert</option>
    </SelectSimple>
  )
}
Standard.args = {
  id: "simpleSelect",
  label: "Sivilstatus"
}

export const Uncontrolled = args => {
  return (
    <SelectSimple {...args}>
      <option value="1">Gift</option>
      <option value="2">Samboer</option>
      <option value="3">Skilt</option>
      <option value="4">Partnerskap</option>
      <option value="5">Enkemann</option>
      <option value="6">Separert</option>
    </SelectSimple>
  )
}

Uncontrolled.args = {
  id: "simpleSelectUncontrollled",
  defaultValue: "2",
  label: "Sivilstatus"
}

export const Controlled = args => {
  return (
    <SelectSimple {...args}>
      <option value="1">Gift</option>
      <option value="2">Samboer</option>
      <option value="3">Skilt</option>
      <option value="4">Partnerskap</option>
      <option value="5">Enkemann</option>
      <option value="6">Separert</option>
    </SelectSimple>
  )
}

Controlled.args = {
  id: "simpleSelectUncontrollled",
  value: "2",
  label: "Sivilstatus"
}
