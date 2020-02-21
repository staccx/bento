import React from "react"
import { theming } from "@staccx/base"

const Phone = () => (
  <svg
    width="23"
    height="22"
    viewBox="0 0 23 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M18.06 22c-1.02 0-5.9-.34-11.72-6.35C-.3 9.22-.01 3.93 0 3.71c0-.92.42-1.81 1.15-2.42.25-.21.92-.65 1.4-.96a1.8 1.8 0 0 1 2.5.4l2.78 3.99a1.84 1.84 0 0 1-.07 2.18l-.82 1.04c-.17.25-.27.56-.27.88 0 .41.16.8.45 1.09l4.96 4.96c.52.52 1.39.6 1.98.17l1.03-.81a1.88 1.88 0 0 1 2.19-.07c.34.23 3.8 2.66 3.98 2.8a1.8 1.8 0 0 1 .44 2.42l-.05.08c-.33.51-.74 1.13-.94 1.38A3.19 3.19 0 0 1 18.26 22h-.2zM3.6 1c-.2-.02-.3.04-.43.13-.77.5-1.2.8-1.36.93-.5.42-.8 1.03-.8 1.68 0 .09-.24 5.12 6.04 11.2 6.1 6.3 11.14 6.06 11.19 6.06.68 0 1.3-.3 1.72-.8.12-.15.42-.59.87-1.29l.05-.07a.77.77 0 0 0 .13-.43c0-.26-.12-.5-.33-.66l-3.95-2.77a.88.88 0 0 0-1 .04l-1.04.81c-1.02.74-2.44.6-3.3-.25L6.43 10.6a2.52 2.52 0 0 1-.26-3.27l.83-1.06a.84.84 0 0 0 .17-.52.84.84 0 0 0-.14-.48L4.25 1.33A.81.81 0 0 0 3.59 1z" />
  </svg>
)

export const PhoneIcon = theming.createVariants(
  { [theming.VARIANT_DEFAULT]: Phone },
  "Phone"
)

export default Phone