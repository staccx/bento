import React from "react"
import { storiesOf } from "@storybook/react"
import RadioButton from "./RadioButton"
import docs from "./RadioButton.md"

storiesOf("Components|Base/Forms/RadioButton")
  .add("no props", () => <RadioButton>RadioButton</RadioButton>, {
    info: { text: docs }
  })
  .add("ID", () => <RadioButton id={"123123"}>Radiobutton</RadioButton>, {
    info: { text: docs }
  })
  .add(
    "log",
    () => (
      <RadioButton
        id={"3424"}
        onChange={e => console.log("Something", e.target.value, e.target.id)}
      >
        {" "}
        RadioButton{" "}
      </RadioButton>
    ),
    {
      info: { text: docs }
    }
  )
  .add(
    "Default checked",
    () => (
      <RadioButton id={"32423423"} defaultChecked>
        Radiobutton
      </RadioButton>
    ),
    {
      info: { text: docs }
    }
  )
