import React from "react"
import { theming } from "@staccx/base"

const DocumentationApproved = () => (
  <svg
    width="12"
    height="9"
    viewBox="0 0 12 9"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M11.34.87l-7.5 7a.5.5 0 0 1-.7-.02l-2.5-2.5a.5.5 0 0 1 .71-.7L3.51 6.8 10.66.14a.5.5 0 1 1 .68.73z" />
  </svg>
)

export const DocumentationApprovedIcon = theming.createVariants(
  { [theming.VARIANT_DEFAULT]: DocumentationApproved },
  "DocumentationApproved"
)

export default DocumentationApproved
