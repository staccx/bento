import React from "react"
import { registerStyle, VARIANT_DEFAULT } from "@staccx/theme"

const News = () => (
  <svg
    width="18"
    height="24"
    viewBox="0 0 18 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0 23.5c0 .28.22.5.5.5h17a.5.5 0 0 0 .5-.5V.5a.5.5 0 0 0-.5-.5H.5a.5.5 0 0 0-.5.5v23zm17-.5H1V1h16v22zm-1.5-13h-13a.5.5 0 0 1-.5-.5v-6c0-.28.22-.5.5-.5h13c.28 0 .5.22.5.5v6a.5.5 0 0 1-.5.5zM3 9h12V4H3v5zm5.5 7h-6a.5.5 0 0 1-.5-.5v-4c0-.28.22-.5.5-.5h6c.28 0 .5.22.5.5v4a.5.5 0 0 1-.5.5zM3 15h5v-3H3v3zm7.5-3h5a.5.5 0 1 0 0-1h-5a.5.5 0 1 0 0 1zm5 2h-5a.5.5 0 1 1 0-1h5a.5.5 0 1 1 0 1zm-5 2h5a.5.5 0 1 0 0-1h-5a.5.5 0 1 0 0 1zm-8 2a.5.5 0 0 1 0-1h13a.5.5 0 1 1 0 1h-13zM2 19.5c0 .28.22.5.5.5h13a.5.5 0 1 0 0-1h-13a.5.5 0 0 0-.5.5zm.5 2.5a.5.5 0 0 1 0-1h13a.5.5 0 1 1 0 1h-13z"
    />
  </svg>
)

export const NewsIcon = registerStyle({ [VARIANT_DEFAULT]: News }, "News")

export default News
