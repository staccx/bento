import React from "react"
import { theming } from "@staccx/base"

const PrivateRent = () => (
  <svg
    width="37"
    height="38"
    viewBox="0 0 37 38"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M31.2 8.66A17.73 17.73 0 0 0 19.02 3.2V.8a.8.8 0 0 0-1.58 0v2.4c-4.68.2-9 2.1-12.2 5.46A19.53 19.53 0 0 0 .02 22.99c.02.43.33.81.81.76a.8.8 0 0 0 .77-.8 2 2 0 0 1 .59-1.47 3.67 3.67 0 0 1 2.57-.91c1.52 0 3.16.75 3.18 2.4 0 .4.3.73.7.77.39.07.76-.2.85-.59.45-1.77 2.32-2.57 3.98-2.57 1.64 0 3.48.78 3.96 2.5v11.75c0 1.7 1.39 2.58 2.77 2.58 1.37 0 2.77-.89 2.77-2.58a.8.8 0 0 0-1.59 0c0 .96-1.06 1-1.18 1-.13 0-1.19-.04-1.19-1V23.1c.47-1.73 2.32-2.51 3.96-2.51 1.66 0 3.53.8 3.98 2.57a.8.8 0 0 0 1.56-.19c.01-1.64 1.65-2.4 3.18-2.4 1.04 0 2 .35 2.57.92.39.4.58.89.58 1.47 0 .43.34.79.77.8.49.04.8-.33.81-.76a19.51 19.51 0 0 0-5.21-14.33zm-3.66 12.26A6.06 6.06 0 0 0 22.97 19c-1.73 0-3.65.67-4.75 2.14-1.1-1.47-3.01-2.14-4.75-2.14-1.64 0-3.44.6-4.56 1.92-1.47-2.18-5.2-2.41-7.2-1.08A17.36 17.36 0 0 1 6.38 9.75c3.08-3.22 7.29-5 11.84-5 4.56 0 8.76 1.78 11.85 5a17.36 17.36 0 0 1 4.67 10.09c-2.01-1.33-5.74-1.1-7.2 1.08z" />
  </svg>
)

export const PrivateRentIcon = theming.createVariants(
  { [theming.VARIANT_DEFAULT]: PrivateRent },
  "PrivateRent"
)

export default PrivateRent