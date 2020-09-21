import React from "react"
import Donut from "./Donut"

export default {
  title: "New/Components/DataViz/Donut",
  component: Donut
}

export const DonutView = args => <Donut {...args} />
DonutView.args = { progress: 0.2, warningThreshold: 0.8 }
