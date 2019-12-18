import React from "react"
import AccountInput from "./AccountInput"
import Toggle from "../../Toggle/Toggle"
import Label from "../../Label/Label"

const preview = {
  title: "AccountInput",
  category: "Components/Forms/Input",
  component: AccountInput,
  render: props => (
    <AccountInput label={"AccountInput"} id="9852145" {...props} />
  ),
  renderExampleController: ({ setComponentState }) => (
    <React.Fragment>
      <Label for="guideAccountInput">Toggle guides</Label>
      <Toggle
        id="guideAccountInput"
        onChange={e => setComponentState({ guide: e.target.checked })}
      >
        Guide
      </Toggle>
    </React.Fragment>
  )
}

export default preview
