import React from "react"
import { theming } from "@staccx/base"

const Add = () => (
  <svg
    width="23"
    height="23"
    viewBox="0 0 23 23"
    fill="none"
    xmlns="http://www.w3.org/2000/sg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0 11.5C0 5.16 5.16 0 11.5 0S23 5.16 23 11.5 17.84 23 11.5 23 0 17.84 0 11.5zm1 0a10.51 10.51 0 0 0 21 0 10.51 10.51 0 0 0-21 0zm11-.5h5.5a.5.5 0 1 1 0 1H12v5.5a.5.5 0 1 1-1 0V12H5.5a.5.5 0 0 1 0-1H11V5.5a.5.5 0 0 1 1 0V11z"
    />
  </svg>
)

export const AddIcon = theming.createVariants(
  { [theming.VARIANT_DEFAULT]: Add },
  "Add"
)

export default Add
