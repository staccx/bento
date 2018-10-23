import React from "react"
import { theming } from "@staccx/base"

const Mail = () => (
  <svg
    width="22"
    height="15"
    viewBox="0 0 22 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M20 0H2a2 2 0 0 0-2 2v11c0 1.1.9 2 2 2h18a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm0 1c.06 0 .1.02.16.03L11 8.36 1.84 1.03c.05 0 .1-.03.16-.03h18zm1 12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 .06-.3l9.63 7.7c.09.06.2.1.31.1a.5.5 0 0 0 .31-.1l9.63-7.7c.03.09.06.2.06.3v11z" />
  </svg>
)

export const MailIcon = theming.createVariants(
  { [theming.VARIANT_DEFAULT]: Mail },
  "Mail"
)

export default Mail
