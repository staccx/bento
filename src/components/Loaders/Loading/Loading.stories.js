import React from "react"
import Loading from "./Loading"

export default {
  title: "New/Components/Loaders/Loading",
  component: Loading
}

export const Standard = args => <Loading {...args} />
Standard.args = {
  name: "Loading"
}
