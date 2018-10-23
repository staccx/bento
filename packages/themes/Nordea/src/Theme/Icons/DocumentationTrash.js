import React from "react"
import { theming } from "@staccx/base"

const DocumentationTrash = () => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M14.38 1.88H10V.3A.31.31 0 0 0 9.69 0h-5a.31.31 0 0 0-.32.31v1.56H.63a.31.31 0 0 0 0 .63h1.25v12.19c0 .17.14.31.32.31h10c.17 0 .31-.14.31-.31V2.5h1.88a.31.31 0 0 0 0-.63zM5 11.55a.31.31 0 1 1-.63 0V4.7a.31.31 0 0 1 .63 0v6.87zM5 .62h4.38v1.25H5V.63zm2.5 10.94a.31.31 0 0 1-.63 0V4.7a.31.31 0 0 1 .63 0v6.87zm2.5 0a.31.31 0 0 1-.63 0V4.7a.31.31 0 0 1 .63 0v6.87z" />
  </svg>
)

export const DocumentationTrashIcon = theming.createVariants(
  { [theming.VARIANT_DEFAULT]: DocumentationTrash },
  "DocumentationTrash"
)

export default DocumentationTrash
