import React from "react"
import { storiesOf } from "@storybook/react"
import SelectSimple from "./SelectSimple"

storiesOf("components|base/Forms/SelectSimple", module).add("Default", () => {
  return (
    <SelectSimple label={"Sivilstatus"} placeholder="Velg..." id="simpleSelect">
      <option value={1}>Gift </option>
      <option value={2}>Samober</option>
      <option value={3}>Skilt</option>
      <option value={4}>Partnerskap</option>
      <option value={5}>Enke/Enkemann</option>
      <option value={6}>Separert</option>
    </SelectSimple>
  )
})
