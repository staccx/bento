import React from "react"
import SelectSimple from "./SelectSimple"

const preview = {
  title: "SelectSimple",
  category: "component",
  component: SelectSimple,
  render: props => (
    <SelectSimple label="Sivilstatus" placeholder="Velg..." id="simpleselect">
      <option value={1}>Gift</option>
      <option value={2}>Samboer</option>
      <option value={3}>Skilt</option>
      <option value={4}>Partnerskap</option>
      <option value={5}>Enke/Enkemann</option>
      <option value={6}>Separert</option>
    </SelectSimple>
  )
}

export default preview
