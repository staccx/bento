import React from "react"
import CheckGroup from "./CheckGroup"
import CheckBox from "../CheckBox/CheckBox"

export default {
  title: "New/Components/Forms/CheckGroup",
  component: CheckGroup
}

export const Standard = () => {
  return (
    <>
      <CheckGroup
        onChange={() => console.log("You checked")}
        group="checkboxgroup1"
      >
        <CheckBox id="qw123" key="key_wegw" value="Alpha">
          Checkbox Alpha
        </CheckBox>
        <CheckBox id="q231d" key="key_fwefe" value="Bravo">
          Checkbox Bravo
        </CheckBox>
      </CheckGroup>
    </>
  )
}

export const Large = () => {
  return (
    <>
      <CheckGroup
        onChange={() => console.log("You checked")}
        group="checkboxgroup2"
      >
        <CheckBox id="qw123" key="key_wegw" value="Alpha">
          Checkbox Alpha
        </CheckBox>
        <CheckBox id="q231d" key="key_fwefe" value="Bravo">
          Checkbox Bravo
        </CheckBox>
        <CheckBox id="kf92j" key="key_fwj2" value="Charlie">
          Checkbox Charlie
        </CheckBox>
        <CheckBox id="r1kj2" key="key_fj33" value="Delta">
          Checkbox Delta
        </CheckBox>
      </CheckGroup>
    </>
  )
}
