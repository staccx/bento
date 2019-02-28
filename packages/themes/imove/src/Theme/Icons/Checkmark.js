import React from "react"
import { theming } from "@staccx/base"

const Checkmark = ({ className }) => (
  <svg
    width="10"
    height="9"
    viewBox="0 0 10 9"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path d="M9.75563 0.689889L8.83525 0.0918509C8.58059 -0.0729932 8.23169 -0.0097388 8.06125 0.231776L3.80986 6.12673L1.7365 4.14477C1.51993 3.93775 1.16702 3.93775 0.95046 4.14477L0.16242 4.89807C-0.0541402 5.10508 -0.0541402 5.44244 0.16242 5.65137L3.35067 8.69906C3.52914 8.86965 3.80986 9 4.06252 9C4.31517 9 4.56983 8.84857 4.73426 8.62047L9.90402 1.42785C10.0765 1.18634 10.0103 0.854733 9.75563 0.689889Z" />
  </svg>
)

export const CheckmarkIcon = theming.createVariants(
  { [theming.VARIANT_DEFAULT]: Checkmark },
  "COMPONENT_CHECKBOX_ICON"
)

export default Checkmark
