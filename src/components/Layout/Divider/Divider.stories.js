import React from "react"
import Divider from "./Divider"

export default {
  title: "Components/Layout/Divider",
  component: Divider
}

export const DividerStandard = args => <Divider {...args} />
DividerStandard.args = { height: "1" }

export const DividerModifiedHeight = args => <Divider {...args} />
DividerModifiedHeight.args = { height: "5" }
