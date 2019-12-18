import React from "react"
import { storiesOf } from "@storybook/react"
import docs from "./ItemGroup.md"
import ItemGroup from "./ItemGroup"
import Button from "../../Button/Button"

storiesOf("components|base/Layout/ItemGroup", module)
  .add("No props", () => <ItemGroup />, { info: { text: docs } })
  .add(
    "With  1 button",
    () => {
      return (
        <ItemGroup>
          <Button>Lån</Button>
        </ItemGroup>
      )
    },
    { info: { text: docs } }
  )
  .add(
    "With  some buttons",
    () => {
      return (
        <ItemGroup>
          <Button>Lån</Button>
          <Button>Kreditt</Button>
          <Button>Sparing</Button>
          <Button>Om denne banken</Button>
          <Button>Kontakt</Button>
        </ItemGroup>
      )
    },
    { info: { text: docs } }
  )

  .add(
    "With  many buttons",
    () => {
      return (
        <ItemGroup>
          <Button>Lån</Button>
          <Button>Kreditt</Button>
          <Button>Sparing</Button>
          <Button>Om denne banken</Button>
          <Button>Kontakt</Button>
          <Button>Lån</Button>
          <Button>Kreditt</Button>
          <Button>Sparing</Button>
          <Button>Om denne banken</Button>
          <Button>Kontakt</Button> <Button>Lån</Button>
          <Button>Kreditt</Button>
          <Button>Sparing</Button>
          <Button>Om denne banken</Button>
          <Button>Kontakt</Button>
        </ItemGroup>
      )
    },
    { info: { text: docs } }
  )
