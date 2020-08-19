import React from "react"
import Loading from "./Loading"

export default {
  title: "new/Loaders/Loading",
  component: Loading
}

export const Standard = args => <Loading {...args} />
Standard.args = {
  name: "Loading"
}
