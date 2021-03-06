import React from "react"
import Fraction from "./Fraction"

export default {
  title: "Components/DataViz/Fraction",
  component: Fraction
}

export const FractionView = args => <Fraction {...args} />
FractionView.args = { value: 2, max: 10 }
