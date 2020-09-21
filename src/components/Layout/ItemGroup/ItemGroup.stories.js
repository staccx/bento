import React from "react"
import ItemGroup from "./ItemGroup"
import Button from "../../Button/Button"

export default {
  title: "New/Components/Layout/ItemGroup",
  component: ItemGroup
}

export const ItemGroupStandard = args => (
  <ItemGroup {...args}>
    <Button>Loan</Button>
    <Button>Credit</Button>
    <Button>Saving</Button>
    <Button>About this bank</Button>
    <Button>Contact</Button>
  </ItemGroup>
)
ItemGroupStandard.args = { spacing: "medium" }
