import React from "react"
import RadioButton from "./RadioButton"

const preview = {
  title: "RadioButton",
  category: "Components/Forms",
  component: RadioButton,
  render: props => (
    <RadioButton
      id="213ewqs"
      onChange={() => console.log("Do you copy? Over.")}
    >
      Radio me
    </RadioButton>
  )
}

export default preview
