import React from "react"
import { registerStyle, VARIANT_DEFAULT } from "@staccx/theme"

const Checkmark = () => (
  <svg
    width="20"
    height="21"
    viewBox="0 0 20 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0 10.82a10.01 10.01 0 0 1 20 0 10.01 10.01 0 0 1-20 0zm.83 0a9.18 9.18 0 0 0 18.34 0 9.18 9.18 0 0 0-18.34 0zm7.1 2.34l5.95-5.56a.42.42 0 0 1 .57.61L8.2 14.04a.42.42 0 0 1-.58 0l-2.08-2.09a.42.42 0 1 1 .59-.59l1.8 1.8z"
      fill="#40BFA0"
    />
  </svg>
)

export const CheckmarkIcon = registerStyle(
  { [VARIANT_DEFAULT]: Checkmark },
  "Checkmark"
)

export default Checkmark
