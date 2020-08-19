import React from "react"
import Logo from "./Logo"

export default {
  title: "new/Logo",
  component: Logo
}

export const LogoStandard = args => <Logo {...args} />
LogoStandard.args = {
  brand: "dnb",
  height: 10
}
