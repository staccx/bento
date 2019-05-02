import React from "react"
import { storiesOf } from "@storybook/react"
import CheckBox from "./CheckBox"

storiesOf("Components|Base/Forms/Checkbox", module)
  .add("No props", () => <CheckBox>CheckBox</CheckBox>)
  .add("ID", () => <CheckBox id={"ID"}>Checkbox</CheckBox>)
  .add("Disabled true", () => (
    <CheckBox id={"ID"} disabled={"true"}>
      CheckBox
    </CheckBox>
  ))
  .add("With className", () => (
    <CheckBox id={"ID"} className={"Name"}>
      CheckBox
    </CheckBox>
  ))
  .add("Default Checked", () => (
    <CheckBox id={"ID"} defaultChecked={"true"}>
      CheckBox
    </CheckBox>
  ))
  .add("Default Checked false", () => (
    <CheckBox id={"3242343"} defaultChecked={"false"}>
      CheckBox
    </CheckBox>
  ))
  .add("Checked with id and children", () => (
    <CheckBox id={"Something"} checkIcon={"true"}>
      CheckBox
    </CheckBox>
  ))
  .add("input", () => (
    <CheckBox id={"ID"} input={"Some input"}>
      CheckBox
    </CheckBox>
  ))
  .add("log", () => (
    <CheckBox id={"ID"} onChange={() => console.log("test")}>
      CheckBox
    </CheckBox>
  ))
  .add("test", () => (
    <CheckBox group="Signer" id={"1244123"} onChange={() => null}>
      {" "}
      Check off here{" "}
    </CheckBox>
  ))
