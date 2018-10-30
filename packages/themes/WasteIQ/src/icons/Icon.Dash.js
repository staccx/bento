import React from "react"
import styled from "styled-components"
import { theming } from "@staccx/base"

const IconDash = ({ color, autoWidth }) => {
  return (
    <SVG
      viewBox="0 0 186 297"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      color={color}
      autoWidth={autoWidth}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M124.699 296.568L0.667969 86.2351L0.668911 0.305664L185.406 296.568H124.699Z"
      />
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
export const IconDashComponent = theming.createVariants(
  { [theming.VARIANT_DEFAULT]: IconDash },
  "IconDash"
)

export default IconDash
