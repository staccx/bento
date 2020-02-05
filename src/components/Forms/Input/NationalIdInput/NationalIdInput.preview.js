import React from "react"
import NationalIdInput from "./NationalIdInput"
import Toggle from "../../Toggle/Toggle"
import Label from "../../Label/Label"

const preview = {
  title: "NationalIdInput",
  category: "Components/Forms/Input",
  component: NationalIdInput,
  render: props => (
    <NationalIdInput label={"NationalId Input"} id="gfdjrtte35" {...props} />
  ),
  renderExampleController: ({ setComponentState }) => (
    <React.Fragment>
      <Label for="guidePhoneInput">Toggle guides</Label>
      <Toggle
        id="guidePhoneInput"
        onChange={e => setComponentState({ guide: e.target.checked })}
      >
        Guide
      </Toggle>
    </React.Fragment>
  )
}

export default preview
