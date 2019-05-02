import React from "react"
import { storiesOf } from "@storybook/react"
import RadioButton from "./RadioButton"

storiesOf("Components|Base/Forms/RadioButton")
  .add("no props", () => <RadioButton>RadioButton</RadioButton>)
  .add("ID", () => <RadioButton id={"123123"}>Radiobutton</RadioButton>)
  .add("log", () => (
    <RadioButton id={"3424"} onChange={() => console.log("Something")}>
      {" "}
      RadioButton{" "}
    </RadioButton>
  ))
  .add("Default checked", () => (
    <RadioButton id={"32423423"} defaultChecked={"true"}>
      Radiobutton
    </RadioButton>
  ))
