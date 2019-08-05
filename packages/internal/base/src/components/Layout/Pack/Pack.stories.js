import React from "react"
import { storiesOf } from "@storybook/react"
import Pack from "./Pack"
import PackItem from "./PackItem"
import docs from "./Pack.md"

storiesOf("components|base/Layout/Pack", module).add(
  "With PackItems",
  () => (
    <Pack>
      {" "}
      <PackItem>Lån</PackItem>
      <PackItem>Kreditt</PackItem>
      <PackItem>Sparing</PackItem>
      <PackItem>Om denne banken</PackItem>
      <PackItem>Kontakt</PackItem>
    </Pack>
  ),
  { info: { text: docs } }
)
