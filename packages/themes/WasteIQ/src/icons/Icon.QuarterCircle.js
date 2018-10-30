import React from "react"
import styled from "styled-components"
import { theming } from "@staccx/base"

const IconQuarterCircle = ({ color, autoWidth }) => {
  return (
    <SVG
      viewBox="0 0 250 250"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      color={color}
      autoWidth={autoWidth}
    >
      <path d="M-0.000961304 46.8634C112.167 46.8634 203.098 137.794 203.098 249.962H249.344C249.344 112.253 137.708 0.617188 -0.000961304 0.617188V46.8634Z" />
    </SVG>
  )
}

const SVG = styled.svg`
  width: ${p => (p.autoWidth ? "auto" : "100%")};
  height: ${p => (p.autoWidth ? "100%" : "auto")};
  ${p =>
    p.autoWidth &&
    `
    max-height: 100%;
  `};

  path {
    fill: ${p => (p.color ? theming.color(p.color) : theming.color("apricot"))};
  }
`
export const IconQuarterCircleComponent = theming.createVariants(
  { [theming.VARIANT_DEFAULT]: IconQuarterCircle },
  "IconQuarterCircle"
)

export default IconQuarterCircle
