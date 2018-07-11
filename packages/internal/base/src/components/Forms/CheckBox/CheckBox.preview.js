import React from "react"
import CheckBox from "./CheckBox"

const preview = {
  title: "CheckBox",
  category: "component",
  tags: ["visual"],
  component: CheckBox,
  render: props => (
    <div>
      <CheckBox
        group="signer"
        id="idjadsj"
        onChange={() => null}
        defaultChecked
        {...props}
      >
        Check off here
      </CheckBox>
      <CheckBox group="signer" id="423342" onChange={() => null} {...props}>
        You could also check off here
      </CheckBox>
    </div>
  )
}

export default preview
