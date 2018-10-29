import React from "react"
import { theming } from "@staccx/base"

const Alert = () => (
  <svg
    width="24"
    height="23"
    viewBox="0 0 24 23"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M23.5 19a2.5 2.5 0 0 1-2.5-2.5V11a9.04 9.04 0 0 0-5.6-8.32A3.47 3.47 0 0 0 12 0a3.52 3.52 0 0 0-3.4 2.67A9.03 9.03 0 0 0 3 11v5.5A2.5 2.5 0 0 1 .5 19a.5.5 0 0 0 0 1h8.05A3.5 3.5 0 0 0 12 23a3.5 3.5 0 0 0 3.45-3h8.05a.5.5 0 0 0 0-1zM12 22a2.5 2.5 0 0 1-2.45-2h4.9A2.5 2.5 0 0 1 12 22zm-9.05-3A3.48 3.48 0 0 0 4 16.5V11c0-3.32 2.1-6.33 5.21-7.49a.5.5 0 0 0 .32-.4A2.52 2.52 0 0 1 12 1c1.24 0 2.28.9 2.46 2.12a.5.5 0 0 0 .32.39A8.03 8.03 0 0 1 20 11v5.5c0 .98.4 1.86 1.05 2.5H2.95z" />
  </svg>
)

export const AlertIcon = theming.createVariants(
  { [theming.VARIANT_DEFAULT]: Alert },
  "Alert"
)

export default Alert
