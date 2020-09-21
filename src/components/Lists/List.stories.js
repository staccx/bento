import React from "react"
import List from "./List"
export default {
  title: "New/Components/Lists/List",
  component: List
}

export const ListStandard = args => (
  <List>
    <li>Test</li>
    <li>Test2</li>
  </List>
)
