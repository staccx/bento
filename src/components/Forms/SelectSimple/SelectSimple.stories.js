import React from "react"
import SelectSimple from "./SelectSimple"

export default {
  title: "new/Forms/SelectSimple",
  component: SelectSimple
}

export const Standard = args => {
  return (
    <>
      <SelectSimple {...args}>
        <option value="1">Gift</option>
        <option value="2">Samboer</option>
        <option value="3">Skilt</option>
        <option value="4">Partnerskap</option>
        <option value="5">Enkemann</option>
        <option value="6">Separert</option>
      </SelectSimple>
    </>
  )
}
Standard.args = {
  id: "simpleSelect",
  placeholder: "Velg ...",
  label: "Sivilstatus"
}
