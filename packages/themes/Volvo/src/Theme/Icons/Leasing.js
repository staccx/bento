import React from "react"
import { registerStyle, VARIANT_DEFAULT } from "@staccx/theme"

const Leasing = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1.33 28H14a.67.67 0 0 1 0 1.33H.67a.67.67 0 0 1-.67-.66v-28C0 .3.3 0 .67 0h14.66a.66.66 0 0 1 .47.2l6.67 6.66a.66.66 0 0 1 .2.47v5.34a.67.67 0 1 1-1.34 0V8h-6a.67.67 0 0 1-.66-.67v-6H1.33V28zM20.4 6.67L16 2.27v4.4h4.4zm-9.72 2.66h-6a.67.67 0 0 1 0-1.33h6a.67.67 0 0 1 0 1.33zm12.66 5.34a8.68 8.68 0 0 0 0 17.33 8.68 8.68 0 0 0 0-17.33zm0 16a7.34 7.34 0 1 1 .02-14.69 7.34 7.34 0 0 1-.02 14.69zm3.53-10.48L22 25.06l-2.2-2.2a.67.67 0 0 0-.94.95l2.67 2.66a.66.66 0 0 0 .94 0l5.34-5.33a.67.67 0 0 0-.95-.95zM16 12.67c0-.37-.3-.67-.67-.67H4.67a.67.67 0 0 0 0 1.33h10.66c.37 0 .67-.3.67-.66zM12.67 16a.67.67 0 0 1 0 1.33h-8a.67.67 0 0 1 0-1.33h8zm-8 4a.67.67 0 0 0 0 1.33h6.66a.67.67 0 0 0 0-1.33H4.67z"
    />
  </svg>
)

export const LeasingIcon = registerStyle(
  { [VARIANT_DEFAULT]: Leasing },
  "Leasing"
)

export default Leasing
