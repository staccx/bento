import React from "react"
import styled from "styled-components"
import { color } from "@staccx/theme"

const IconCheck = () => (
  <Icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
    <g fill="none" fillRule="evenodd">
      <g>
        <circle cx="16" cy="16" r="16" fill="#E0F3E0" fillRule="nonzero" />
        <polyline
          stroke="#00A806"
          strokeWidth="3"
          points="9 15.936 14.284 21 24 10"
        />
      </g>
    </g>
  </Icon>
)

const Icon = styled.svg`
  width: 18px;
  height: 18px;
  fill: ${color.primary};
  vertical-align: middle;
`

export default IconCheck
