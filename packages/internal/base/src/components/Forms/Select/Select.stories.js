import React from "react"
import { storiesOf } from "@storybook/react"
import Select from "./Select"

storiesOf("components|base/Forms/Select", module).add("default", () => {
  return (
    <Select
      items={["Red", "Blue", "Orange"]}
      onChange={() => null}
      label={"Colors"}
      selectedItem="Blue"
    />
  )
})
