import React from "react"
import BirthdateInput from "./BirthdateInput"

export default {
  title: "Components/Forms/Input/BirthdateInput",
  component: BirthdateInput
}

export const Standard = args => <BirthdateInput {...args} />
Standard.args = {
  label: "BirthdateInput",
  ids: ["Day1", "Month1", "Year1"],
  labels: ["Day", "Month", "Year"],
  onChange: console.log
}
