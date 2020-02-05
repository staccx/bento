import React from "react"
import PhoneInput from "./PhoneInput"
import Toggle from "../../Toggle/Toggle"
import Label from "../../Label/Label"

const preview = {
  title: "PhoneInput",
  category: "Components/Forms/Input",
  component: PhoneInput,
  render: props => (
    <PhoneInput label={"PhoneInput"} id="dsf4dfs456" {...props} />
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
