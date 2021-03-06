import React from "react"
import FullScreenLoader from "./FullScreenLoader"

export default {
  title: "Components/Loaders/FullScreenLoader",
  component: FullScreenLoader
}

export const Standard = args => <FullScreenLoader {...args} />
Standard.args = {
  messages: ["Loading"]
}
