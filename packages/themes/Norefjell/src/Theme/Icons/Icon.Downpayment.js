import React from "react"
import { theming } from "@staccx/base"

const Downpayment = () => (
  <svg
    width="19"
    height="18"
    viewBox="0 0 19 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4 1C4.552 1 5 1.448 5 2V16C5 16.552 4.552 17 4 17H1C0.448 17 0 16.552 0 16V2C0 1.448 0.448 1 1 1H4ZM11 5C11.552 5 12 5.448 12 6V16C12 16.552 11.552 17 11 17H8C7.448 17 7 16.552 7 16V6C7 5.448 7.448 5 8 5H11ZM18 9C18.552 9 19 9.448 19 10V16C19 16.552 18.552 17 18 17H15C14.448 17 14 16.552 14 16V10C14 9.448 14.448 9 15 9H18Z"
      fill="#8C79DA"
    />
  </svg>
)

export const IconDownpayment = theming.createVariants(
  { [theming.VARIANT_DEFAULT]: Downpayment },
  "IconDownpayment"
)

export default IconDownpayment
