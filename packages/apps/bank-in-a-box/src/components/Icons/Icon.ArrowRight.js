import React from "react"
import styled from "styled-components"
import { theming } from "@staccx/base"

const IconArrowRight = () => (
  <Icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
    <path d="M18.65 16L7.37 4.31c-.5-.52-.5-1.35.01-1.87L9.4.39a1.3 1.3 0 0 1 1.86 0l14.36 14.67c.25.26.38.6.38.94 0 .34-.13.68-.38.94L11.26 31.6a1.3 1.3 0 0 1-1.86.01l-2.02-2.05a1.35 1.35 0 0 1 0-1.87L18.64 16z" />
  </Icon>
)

const Icon = styled.svg`
  width: ${theming.spacing.small};
  height: ${theming.spacing.small};
  fill: ${theming.color.primary};
  vertical-align: middle;
`

export default IconArrowRight
