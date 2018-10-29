import React from "react"
import { Outer, Icon } from "./Icon.Styles"
import { theming } from "@staccx/base"

const IconProfile = () => (
  <Outer>
    <Icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
      <path d="M15 0a7.5 7.5 0 1 0 0 15 7.5 7.5 0 0 0 0-15zm0 18.75c-11.44 0-15 7.5-15 7.5V30h30v-3.75s-3.56-7.5-15-7.5z" />
    </Icon>
  </Outer>
)

export const IconProfileStyle = theming.createVariants(
  { [theming.VARIANT_DEFAULT]: IconProfile },
  "iconProfile"
)
export default IconProfile
