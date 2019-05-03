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
    "with Checkbox",
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
    "with Radiobuttons",
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
