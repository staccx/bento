import React from "react"
import AccountInput from "./AccountInput"

export default {
  title: "New/Components/Forms/Input/AccountInput",
  component: AccountInput
}

export const Standard = args => <AccountInput {...args} />
Standard.args = { id: 239103, label: "AccountInput" }
