import React, { useState } from "react"
import { storiesOf } from "@storybook/react"
import Select from "./Select"

storiesOf("components|base/Forms/Select", module)
  .add("console.log value", () => {
    return (
      <Select
        items={["red", "blue", "orange"]}
        onChange={value => console.log(value)}
        label={"Colors"}
        PlaceHolderLabel="Select some colors..."
        SelectedItem="Blue"
      />
    )
  })

  .add("assign value to state", () => {
    const [select, setSelect] = useState()
    return (
      <div>
        <Select
          items={["Red", "Blue", "Orange"]}
          onChange={value => setSelect(value)}
          label={"Colors"}
          selectedItem="Blue"
          PlaceHolderLabel="Select some colors..."
        />
        <p>You have selected:{select}</p>
      </div>
    )
  })
