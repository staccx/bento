import React from "react"
import { theming } from "@staccx/base"

const DocumentationRejected = () => (
  <svg
    width="3"
    height="13"
    viewBox="0 0 3 13"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M1 1a.5.5 0 1 1 1 0v7a.5.5 0 1 1-1 0V1zm.52 11.5H1.5a1 1 0 0 1-.02-2h.02a1 1 0 0 1 .02 2z" />
  </svg>
)

export const DocumentationRejectedIcon = theming.createVariants(
  { [theming.VARIANT_DEFAULT]: DocumentationRejected },
  "DocumentationRejected"
)

export default DocumentationRejected
