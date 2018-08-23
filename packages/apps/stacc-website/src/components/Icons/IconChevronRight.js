import React from "react"
import styled from "styled-components"
import { color, spacing } from "@staccx/theme"

const IconChevronRight = ({ className }) => (
  <Icon
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 65 65"
  >
    <polygon points="19.6,65 52.1,32.5 19.6,0 12.9,6.9 38.4,32.5 12.9,58.1 " />
  </Icon>
)

const Icon = styled.svg`
  width: ${spacing.medium};
  height: ${spacing.medium};
  fill: ${color.primary};
  vertical-align: middle;
`

export default IconChevronRight
