import React from "react"
import { storiesOf } from "@storybook/react"
import CheckBox from "./CheckBox"

storiesOf("Components|Base/Forms/Checkbox", module)
  .add("No props", () => <CheckBox>CheckBox</CheckBox>)
  .add("ID", () => <CheckBox id={"ID"}>Checkbox</CheckBox>)
  .add("Disabled true", () => (
    <CheckBox id={"ID"} disabled>
      CheckBox
    </CheckBox>
  ))
  .add("DefaultChecked", () => (
    <CheckBox id={"ID"} defaultChecked>
      CheckBox
    </CheckBox>
  ))
  .add("DefaultChecked false", () => (
    <CheckBox id={"3242343"} defaultChecked={false}>
      CheckBox
    </CheckBox>
  ))
  .add("log", () => (
    <CheckBox
      id={"ID"}
      onChange={e => console.log("test", e.target.value, e.target.id)}
    >
      CheckBox
    </CheckBox>
  ))
