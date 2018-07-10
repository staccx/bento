import React from "react"
import { registerStyle, VARIANT_DEFAULT } from "@staccx/theme"

const DocumentationUpload = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12.58.88a3.9 3.9 0 0 0-5.46.52L.68 9.16a2.94 2.94 0 0 0 .41 4.17 3 3 0 0 0 4.2-.41l6.17-7.43c.63-.76.52-1.88-.25-2.5a1.8 1.8 0 0 0-2.52.24L4.14 8.72a.59.59 0 0 0 .08.83c.26.2.63.17.84-.08l4.55-5.49a.6.6 0 0 1 .85-.08c.25.21.29.58.08.84l-6.17 7.43a1.8 1.8 0 0 1-2.52.24 1.76 1.76 0 0 1-.25-2.5l6.44-7.75a2.7 2.7 0 0 1 3.78-.37 2.65 2.65 0 0 1 .37 3.75l-4.57 5.5a.59.59 0 0 0 .08.84c.26.2.63.17.84-.08l4.58-5.51a3.82 3.82 0 0 0-.54-5.41z" />
  </svg>
)

export const DocumentationUploadIcon = registerStyle(
  { [VARIANT_DEFAULT]: DocumentationUpload },
  "DocumentationUpload"
)

export default DocumentationUpload
