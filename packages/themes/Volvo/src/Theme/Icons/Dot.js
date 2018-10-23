import React from "react"
import { registerStyle, VARIANT_DEFAULT } from "@staccx/theme"

const Dot = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9 9">
    <circle cx="4.5" cy="4.5" r="1.5" />
  </svg>
)

export const DotIcon = registerStyle({ [VARIANT_DEFAULT]: Dot }, "Dot")

export default Dot
