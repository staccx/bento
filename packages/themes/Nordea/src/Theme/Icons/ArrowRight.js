import React from "react"
import { theming } from "@staccx/base"

const ArrowRight = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 10 18"
    preserveAspectRatio="none"
  >
    <path d="M9.88 8.72L.59.09a.34.34 0 0 0-.5.04c-.13.15-.12.39.03.53L9.1 9 .12 17.34a.39.39 0 0 0-.03.53.34.34 0 0 0 .5.03l9.29-8.62A.38.38 0 0 0 10 9c0-.1-.04-.2-.12-.28z" />
  </svg>
)

export const ArrowRightIcon = theming.createVariants(
  { [theming.VARIANT_DEFAULT]: ArrowRight },
  "ArrowRight"
)

export default ArrowRight
