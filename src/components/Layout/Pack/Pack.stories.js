import React from "react"
import Pack from "./Pack"
import PackItem from "./PackItem"

export default {
  title: "New/Layout/PackAndPackItem",
  component: Pack
}

export const PackStandard = args => (
  <Pack {...args}>
    <PackItem>Loan</PackItem>
    <PackItem>Credit</PackItem>
    <PackItem>Saving</PackItem>
    <PackItem>About this bank</PackItem>
  </Pack>
)
PackStandard.args = { justify: "flex-start" }

export const PackNoWrap = args => (
  <Pack {...args}>
    <PackItem>Loan</PackItem>
    <PackItem>Credit</PackItem>
    <PackItem>Saving</PackItem>
    <PackItem>About this bank</PackItem>
  </Pack>
)
PackNoWrap.args = { middle: true, noWrap: true }
