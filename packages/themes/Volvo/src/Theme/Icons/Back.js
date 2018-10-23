import React from "react"
import { registerStyle, VARIANT_DEFAULT } from "@staccx/theme"

const Back = () => (
  <svg
    width="7"
    height="13"
    viewBox="0 0 7 13"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6.23 0L.37 6.1 0 6.5l.37.4L6.23 13l.77-.8-5.48-5.7L7 .8 6.23 0z"
      fill="currentColor"
    />
  </svg>
)

export const BackIcon = registerStyle({ [VARIANT_DEFAULT]: Back }, "Back")

export default Back
