import React from "react"
import { theming } from "@staccx/base"

const Checkmark = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 9">
    <polygon points="3.651 5.933 8.472 0 10 1.348 3.773 9.012 0 5.08 1.416 3.605" />
  </svg>
)

export const CheckmarkIcon = theming.createVariants(
  { [theming.VARIANT_DEFAULT]: Checkmark },
  "Checkmark"
)

export default Checkmark
