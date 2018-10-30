import React from "react"
import styled from "styled-components"
import { theming } from "@staccx/base"

const IconHalfCircle = ({ color, autoWidth }) => {
  return (
    <SVG
      viewBox="0 0 134 268"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      color={color}
      autoWidth={autoWidth}
    >
      <path d="M0.105469 39.7939C52.1251 39.7939 94.2954 81.9642 94.2954 133.984C94.2954 186.003 52.1251 228.174 0.105469 228.174L0.105469 267.007C73.572 267.007 133.128 207.45 133.128 133.984C133.128 60.5173 73.572 0.960938 0.105469 0.960938L0.105469 39.7939Z" />
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
export const IconHalfCircleComponent = theming.createVariants(
  { [theming.VARIANT_DEFAULT]: IconHalfCircle },
  "IconHalfCircle"
)

export default IconHalfCircle
