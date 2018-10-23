import React from "react"
import { registerStyle, VARIANT_DEFAULT } from "@staccx/theme"

const Filter = () => (
  <svg
    width="24"
    height="14"
    viewBox="0 0 24 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 0c6.52 0 11.68 6.42 11.9 6.69a.5.5 0 0 1 0 .62C23.67 7.58 18.51 14 12 14 5.48 14 .32 7.58.1 7.31a.5.5 0 0 1 0-.62C.33 6.42 5.49 0 12 0zM1.15 7c1.12 1.27 5.6 6 10.85 6s9.73-4.73 10.84-6c-1.1-1.27-5.6-6-10.84-6C6.75 1 2.27 5.73 1.15 7zM7.5 7a4.5 4.5 0 1 1 9.01.01A4.5 4.5 0 0 1 7.5 7zm1 0a3.5 3.5 0 1 0 7 0 3.5 3.5 0 0 0-7 0z"
      fill="#fff"
    />
  </svg>
)

export const FilterIcon = registerStyle({ [VARIANT_DEFAULT]: Filter }, "Filter")

export default Filter
