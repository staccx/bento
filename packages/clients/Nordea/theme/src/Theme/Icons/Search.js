import React from "react"
import { theming } from "@staccx/base"

const Search = () => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M23.8539 23.1459L14.8449 14.1369C16.1809 12.6349 16.9999 10.6639 16.9999 8.49996C16.9999 3.81298 13.1869 0 8.49996 0C3.81298 0 0 3.81298 0 8.49996C0 13.1869 3.81298 16.9999 8.49996 16.9999C10.6639 16.9999 12.6349 16.1809 14.1369 14.8439L23.1459 23.8529C23.3409 24.0479 23.6579 24.0479 23.8529 23.8529C24.0489 23.6579 24.0489 23.3419 23.8539 23.1459ZM0.999995 8.49996C0.999995 4.36398 4.36398 0.999995 8.49996 0.999995C12.6359 0.999995 15.9999 4.36398 15.9999 8.49996C15.9999 12.6359 12.6359 15.9999 8.49996 15.9999C4.36398 15.9999 0.999995 12.6359 0.999995 8.49996Z"
      fill="#0000A0"
    />
  </svg>
)

export const SearchIcon = theming.createVariants(
  { [theming.VARIANT_DEFAULT]: Search },
  "SearchIcon"
)

export default Search
