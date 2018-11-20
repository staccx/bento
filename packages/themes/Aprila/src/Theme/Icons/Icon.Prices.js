import React from "react"
import { theming } from "@staccx/base"

const Prices = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15 0H10.4999C10.1159 0 9.73191 0.146251 9.43941 0.439505L0.439317 9.4396C-0.146439 10.0254 -0.146439 10.9749 0.439317 11.5606L6.43938 17.5607C7.02514 18.1464 7.97465 18.1464 8.5604 17.5607C8.85365 17.2674 17.2672 8.85384 17.5605 8.56059C17.8537 8.26809 18 7.88408 18 7.50008V3.00003C18 1.34326 16.6567 0 15 0ZM15 4.50005C14.1712 4.50005 13.5 3.82879 13.5 3.00003C13.5 2.17127 14.1712 1.50002 15 1.50002C15.8287 1.50002 16.5 2.17127 16.5 3.00003C16.5 3.82879 15.8287 4.50005 15 4.50005Z"
      fill="#fff"
    />
  </svg>
)

export const IconPrices = theming.createVariants(
  { [theming.VARIANT_DEFAULT]: Prices },
  "IconPrices"
)

export default IconPrices
