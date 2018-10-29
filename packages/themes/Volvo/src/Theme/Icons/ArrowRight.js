import React from "react"
import { registerStyle, VARIANT_DEFAULT } from "@staccx/theme"

const ArrowRight = () => (
  <svg
    width="7"
    height="10"
    viewBox="0 0 7 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M0 1.41L1.41 0l4.71 4.7-4.7 4.71L0 8l3.3-3.3L0 1.41z" />
  </svg>
)

export const ArrowRightIcon = registerStyle(
  { [VARIANT_DEFAULT]: ArrowRight },
  "ArrowRight"
)

export default ArrowRight
