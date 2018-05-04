import React from "react"
import styled from "styled-components"
import { color, spacing } from "@staccx/theme"

const IconLogout = () => (
  <Outer>
    <Icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
      <path d="M15 0A14.99 14.99 0 0 0 1.68 8.18a1.25 1.25 0 1 0 2.22 1.14A12.47 12.47 0 0 1 27.5 15 12.48 12.48 0 0 1 3.9 20.68a1.25 1.25 0 1 0-2.22 1.14A14.99 14.99 0 1 0 15 0zm-1.25 8.74a1.25 1.25 0 0 0-.87 2.14l2.86 2.87H1.27a1.25 1.25 0 1 0 0 2.5h14.47l-2.86 2.87a1.25 1.25 0 1 0 1.76 1.76L19.53 16a1.25 1.25 0 0 0 0-1.99l-4.89-4.88a1.25 1.25 0 0 0-.9-.38z" />
    </Icon>
  </Outer>
)

const Outer = styled.div`
  display: flex;
  align-items: center;
  width: ${spacing.huge};
  height: ${spacing.huge};
  margin: 0 auto ${spacing.small};
  padding: ${spacing.medium};
  border-radius: 50%;
  background-color: ${color.primary};
`

const Icon = styled.svg`
  width: 36px;
  height: 36px;
  fill: ${color.white};
  vertical-align: middle;
`

export default IconLogout
