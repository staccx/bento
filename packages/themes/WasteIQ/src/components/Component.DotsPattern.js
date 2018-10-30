import React from "react"
import { theming } from "@staccx/base"

const DotsPattern = () => {
  return (
    <svg width="100%" height="100%">
      <pattern
        id="pattern-circles"
        x="0"
        y="0"
        width="10"
        height="10"
        patternUnits="userSpaceOnUse"
        patternContentUnits="userSpaceOnUse"
      >
        <circle id="pattern-circle" cx="10" cy="10" r="2" fill="#c4c4c4" />
      </pattern>

      <rect
        id="rect"
        x="0"
        y="0"
        width="100%"
        height="100%"
        fill="url(#pattern-circles)"
      />
    </svg>
  )
}

export const DotsPatternComponent = theming.createVariants(
  { [theming.VARIANT_DEFAULT]: DotsPattern },
  "DotsPattern"
)

export default DotsPattern
