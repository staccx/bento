import React from "react"
import { registerStyle, VARIANT_DEFAULT } from "@staccx/theme"

const Profile = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      id="Profile"
      d="M8 0C5.78906 0 4 1.78906 4 4C4 6.21094 5.78906 8 8 8C10.2109 8 12 6.21094 12 4C12 1.78906 10.2109 0 8 0ZM8 10C1.89844 10 0 14 0 14V16H16V14C16 14 14.1016 10 8 10Z"
      fill="#FDC4A3"
    />
  </svg>
)

export const IconProfile = registerStyle(
  { [VARIANT_DEFAULT]: Profile },
  "IconProfile"
)

export default IconProfile
