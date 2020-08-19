import React from "react"
import Flag from "./Flag"

export default {
  title: "New/Components/Layout/Flag",
  component: Flag
}

export const FlagStandard = args => (
  <Flag
    {...args}
    img={
      <img src="http://via.placeholder.com/150x150" widt="100" height="100" />
    }
  >
    Text for flag-object, the standard way.
  </Flag>
)
FlagStandard.args = { responsive: 800 }

export const FlagReversed = args => (
  <Flag
    {...args}
    img={
      <img src="http://via.placeholder.com/150x150" widt="100" height="100" />
    }
  >
    Text for flag-object when the image is reversed
  </Flag>
)
FlagReversed.args = { responsive: 800, reverse: true }

export const FlagTop = args => (
  <Flag
    {...args}
    img={
      <img src="http://via.placeholder.com/150x150" widt="100" height="100" />
    }
  >
    Text for flag-object positioned to the top
  </Flag>
)
FlagTop.args = { responsive: 800, top: true }
