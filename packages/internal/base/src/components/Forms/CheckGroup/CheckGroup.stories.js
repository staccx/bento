import React from "react"
import { storiesOf } from "@storybook/react"
import CheckGroup from "./CheckGroup"
import docs from "./CheckGroup.md"
import CheckBox from "../CheckBox/CheckBox"
import RadioButton from "../RadioButton/RadioButton"
import { withKnobs } from "@storybook/addon-knobs"

storiesOf("components|base/Forms/CheckGroup", module)
  .addDecorator(withKnobs)
  // Failer uten props
  .add(
    "With Checkbox",
    () => {
      const handleCheckboxChange = value => {
        console.log("You checked " + value)
      }

      return (
        <CheckGroup onChange={handleCheckboxChange} group={"checkboxgroup"}>
          <CheckBox id="asdt43" key="key_vdvsew" value="Alpha">
            Checkbox Alpha
          </CheckBox>
          <CheckBox id="nrff2" key="key_rthjn" value="Bravo">
            Checkbox Bravo
          </CheckBox>
        </CheckGroup>
      )
    },
    {
      info: {
        text: docs
      }
    }
  )
  .add(
    "With many Checkboxes",
    () => {
      const handleCheckboxChange = value => {
        console.log("You checked " + value)
      }

      return (
        <CheckGroup onChange={handleCheckboxChange} group={"checkboxgroup"}>
          <CheckBox id="asdt1" key="key_vdvsew" value="Alpha">
            Checkbox Alpha
          </CheckBox>
          <CheckBox id="nrff2" key="key_rthjn1" value="Bravo">
            Checkbox Bravo
          </CheckBox>
          <CheckBox id="nrff3" key="key_rthjn2" value="Bravo">
            Checkbox Bravo
          </CheckBox>
          <CheckBox id="nrff4" key="key_rthjn3" value="Bravo">
            Checkbox Bravo
          </CheckBox>
          <CheckBox id="nrff5" key="key_rthjn4" value="Bravo">
            Checkbox Bravo
          </CheckBox>
          <CheckBox id="nrff6" key="key_rthjn5" value="Bravo">
            Checkbox Bravo
          </CheckBox>
          <CheckBox id="nrff7" key="key_rthjn6" value="Bravo">
            Checkbox Bravo
          </CheckBox>
          <CheckBox id="nrff8" key="key_rthjn7" value="Bravo">
            Checkbox Bravo
          </CheckBox>
          <CheckBox id="nrff9" key="key_rthjn8" value="Bravo">
            Checkbox Bravo
          </CheckBox>
          <CheckBox id="nrff10" key="key_rthjn9" value="Bravo">
            Checkbox Bravo
          </CheckBox>
        </CheckGroup>
      )
    },
    {
      info: {
        text: docs
      }
    }
  )

  .add(
    "With Radiobuttons",
    () => {
      const handleRadioButtonChange = value => {
        console.log("You Radioed " + value)
      }

      return (
        <CheckGroup group={"RadioGroup"} onChange={handleRadioButtonChange}>
          <RadioButton id={"test"} value={"button"}>
            Test{" "}
          </RadioButton>
          <RadioButton id={"2"} value={"Someone"}>
            Test2
          </RadioButton>
        </CheckGroup>
      )
    },
    {
      info: {
        text: docs
      }
    }
  )
  .add(
    "With many Radiobuttons",
    () => {
      const handleRadioButtonChange = value => {
        console.log("You Radioed " + value)
      }

      return (
        <CheckGroup group={"RadioGroup"} onChange={handleRadioButtonChange}>
          <RadioButton id={"test"} value={"button"}>
            Test{" "}
          </RadioButton>
          <RadioButton id={"2"} value={"Someone"}>
            Test2
          </RadioButton>
          <RadioButton id={"3"} value={"Someone"}>
            Test2
          </RadioButton>
          <RadioButton id={"4"} value={"Someone"}>
            Test2
          </RadioButton>
          <RadioButton id={"5"} value={"Someone"}>
            Test2
          </RadioButton>
          <RadioButton id={"6"} value={"Someone"}>
            Test2
          </RadioButton>
          <RadioButton id={"7"} value={"Someone"}>
            Test2
          </RadioButton>
          <RadioButton id={"8"} value={"Someone"}>
            Test2
          </RadioButton>
          <RadioButton id={"9"} value={"Someone"}>
            Test2
          </RadioButton>
        </CheckGroup>
      )
    },
    {
      info: {
        text: docs
      }
    }
  )
