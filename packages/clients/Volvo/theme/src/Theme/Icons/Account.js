import React from "react"
import { registerStyle, VARIANT_DEFAULT } from "@staccx/theme"

const Account = () => (
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
      d="M32 28.67c0 .36-.3.66-.67.66H.67a.67.67 0 0 1 0-1.33h2v-2c0-.37.3-.67.66-.67H4V12H2a.67.67 0 0 1-.67-.67V8.67c0-.37.3-.67.67-.67h1.37C3.59 5.48 5.3 0 16 0c10.69 0 12.4 5.48 12.63 8H30c.37 0 .67.3.67.67v2.66c0 .37-.3.67-.67.67h-2v13.33h.67c.36 0 .66.3.66.67v2h2c.37 0 .67.3.67.67zm-6.67-3.34h1.34V12h-1.34v13.33zm-4-13.33v13.33H24V12h-2.67zm-2.66 0v13.33H20V12h-1.33zm-4 0v13.33h2.66V12h-2.66zM12 12v13.33h1.33V12H12zm-4 0v13.33h2.67V12H8zm19.3-4c-.24-2.43-2-6.67-11.3-6.67S4.94 5.57 4.7 8h22.6zm2.03 1.33H2.67v1.34h26.66V9.33zM6.67 12H5.33v13.33h1.34V12zm-2 14.67H4V28h24v-1.33H4.67zm9.33-24c-1.37 0-5.33.65-5.33 2.66a.67.67 0 0 0 1.33 0C10 4.8 12.36 4 14 4a.67.67 0 0 0 0-1.33zm18 28.66c0-.36-.3-.66-.67-.66H.67a.67.67 0 0 0 0 1.33h30.66c.37 0 .67-.3.67-.67z"
    />
  </svg>
)

export const AccountIcon = registerStyle(
  { [VARIANT_DEFAULT]: Account },
  "Account"
)

export default Account
