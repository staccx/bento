import React from "react"
import CheckGroup from "./CheckGroup"
import RadioButton from "../RadioButton/RadioButton"
import CheckBox from "../CheckBox/CheckBox"

const handleRadioChange = value => {
  console.log("You radioed " + value)
}

const handleCheckboxChange = value => {
  console.log("You checked " + value)
}

const preview = {
  title: "CheckGroup",
  category: "component/Forms",
  tags: ["visual"],
  component: CheckGroup,
  render: props => (
    <div>
      <h3>Group of Radiobuttons</h3>
      <CheckGroup onChange={handleRadioChange} group={"radiogroup"} {...props}>
        <RadioButton id="sadfre4w" key="key_sbhw" value="Alpha">
          Radio Alpha
        </RadioButton>
        <RadioButton id="asdaxxa1" key="key_asjndb3" value="Bravo">
          Radio Bravo
        </RadioButton>
      </CheckGroup>

      <h3>Group of Checkboxes</h3>
      <CheckGroup
        onChange={handleCheckboxChange}
        group={"checkboxgroup"}
        {...props}
      >
        <CheckBox id="asdt43" key="key_vdvsew" value="Alpha">
          Checkbox Alpha
        </CheckBox>
        <CheckBox id="nrff2" key="key_rthjn" value="Bravo">
          Checkbox Bravo
        </CheckBox>
      </CheckGroup>
    </div>
  )
}

export default preview
