import React from "react"
import AccountInput from "./AccountInput"

export default {
  title: "new/Forms/Input/AccountInput",
  component: AccountInput
}

export const Standard = args => <AccountInput {...args} />
Standard.args = { id: 239103, label: "AccountInput" }
