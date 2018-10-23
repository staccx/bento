import React from "react"
import { theming } from "@staccx/base"

const DocumentationUploaded = () => (
  <svg
    width="18"
    height="12"
    viewBox="0 0 18 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.63 6a3.38 3.38 0 1 1 6.75 0 3.38 3.38 0 0 1-6.75 0zm.75 0a2.63 2.63 0 1 0 5.25 0 2.63 2.63 0 0 0-5.25 0z"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9 .75c4.89 0 8.76 4.81 8.92 5.02.1.13.1.33 0 .46-.16.2-4.03 5.02-8.92 5.02S.24 6.44.08 6.23a.37.37 0 0 1 0-.46C.24 5.57 4.11.75 9 .75zM.87 6c.83.95 4.2 4.5 8.13 4.5 3.94 0 7.3-3.55 8.13-4.5-.83-.95-4.2-4.5-8.13-4.5C5.06 1.5 1.7 5.05.87 6z"
    />
  </svg>
)

export const DocumentationUploadedIcon = theming.createVariants(
  { [theming.VARIANT_DEFAULT]: DocumentationUploaded },
  "DocumentationUploaded"
)

export default DocumentationUploaded
