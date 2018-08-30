import React from "react"
import styled from "styled-components"
import { color, spacing } from "@staccx/theme"

const IconArrowRight = () => (
  <Icon viewBox="0 0 23 21" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M11.7432 19.2571L19.9432 10.6286L11.7432 2"
      stroke="#E6503F"
      strokeWidth="3"
      strokeMiterlimit="10"
    />
    <path
      d="M20 10.5996L0 10.5996"
      stroke="#E6503F"
      strokeWidth="3"
      strokeMiterlimit="10"
    />
  </Icon>
)

const Icon = styled.svg`
  width: 16px;
  height: 16px;
  fill: none;
  vertical-align: middle;
`

export default IconArrowRight
