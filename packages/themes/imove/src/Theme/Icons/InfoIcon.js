import React from "react"
import { theming } from "@staccx/base"

const Info = ({ className }) => (
  <svg
    width="17"
    height="17"
    viewBox="0 0 17 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7.78711 12H9.20801V6.61426H7.78711V12ZM8.5 5.8623C9.00781 5.8623 9.33984 5.56445 9.33984 5.14453C9.33984 4.71973 9.00781 4.42676 8.5 4.42676C7.9873 4.42676 7.66016 4.71973 7.66016 5.14453C7.66016 5.56445 7.9873 5.8623 8.5 5.8623Z"
      fill="#1C966B"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.5 15.8C12.5317 15.8 15.8 12.5317 15.8 8.5C15.8 4.46832 12.5317 1.2 8.5 1.2C4.46832 1.2 1.2 4.46832 1.2 8.5C1.2 12.5317 4.46832 15.8 8.5 15.8ZM8.5 17C13.1944 17 17 13.1944 17 8.5C17 3.80558 13.1944 0 8.5 0C3.80558 0 0 3.80558 0 8.5C0 13.1944 3.80558 17 8.5 17Z"
      fill="#1C966B"
    />
  </svg>
)

export const InfoIcon = theming.createVariants({
  [theming.VARIANT_DEFAULT]: Info
})

export default Checkmark
