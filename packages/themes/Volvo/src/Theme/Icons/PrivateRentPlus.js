import React from "react"
import { theming } from "@staccx/base"

const PrivateRentPlus = () => (
  <svg
    width="24"
    height="30"
    viewBox="0 0 24 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.46 3.48v.01l.01.02L9.6 8.46c.11.18.31.29.53.29h3.74c.22 0 .42-.11.53-.3l3.13-4.94V3.5v-.01c.06-.1.1-.2.1-.3v-.01l-.01-.03a.6.6 0 0 0-.1-.3v-.01l-.02-.02L15.63.25a.62.62 0 0 0-.5-.25H8.87c-.2 0-.38.1-.5.25L6.5 2.81l-.01.02v.02a.61.61 0 0 0-.1.28v.01l-.01.02v.02c0 .1.03.2.08.3zm7.07 4.02h-3.06L8.13 3.8h7.74l-2.34 3.7zM9.2 1.25h5.62l.96 1.3H8.23l.96-1.3zm7.32 7.2a.63.63 0 0 0-.82.32c-.14.32 0 .68.32.82a10 10 0 1 1-8.02 0 .62.62 0 0 0-.5-1.14 11.25 11.25 0 1 0 9.02 0zM12 27.5A8.76 8.76 0 0 1 12 10a8.76 8.76 0 0 1 0 17.5zm0-1.25a7.5 7.5 0 1 0-.02-15.02A7.5 7.5 0 0 0 12 26.25z"
    />
  </svg>
)

export const PrivateRentPlusIcon = theming.createVariants(
  { [theming.VARIANT_DEFAULT]: PrivateRentPlus },
  "PrivateRentPlus"
)

export default PrivateRentPlus
