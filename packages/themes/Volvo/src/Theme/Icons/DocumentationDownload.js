import React from "react"
import { theming } from "@staccx/base"

const DocumentationDownload = () => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.94 11.45a.63.63 0 0 1-.88 0L2.68 7.07a.62.62 0 1 1 .88-.88l3.31 3.3V.63a.62.62 0 1 1 1.25 0V9.5l3.31-3.31a.62.62 0 1 1 .89.88l-4.38 4.38zm5.81-.38a.62.62 0 1 1 1.25 0v1.2c0 1.29-1.03 2.73-2.42 2.73H2.42C1.03 15 0 13.56 0 12.27v-1.2a.62.62 0 1 1 1.25 0v1.2c0 .65.55 1.48 1.17 1.48h10.16c.62 0 1.17-.83 1.17-1.48v-1.2z"
    />
  </svg>
)

export const DocumentationDownloadIcon = theming.createVariants(
  { [theming.VARIANT_DEFAULT]: DocumentationDownload },
  "DocumentationDownload"
)

export default DocumentationDownload
