import React from "react"
import styled from "styled-components"
import { color, spacing } from "@staccx/theme"

const IconProfile = () => (
  <Outer>
    <Icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
      <path d="M15 0a7.5 7.5 0 1 0 0 15 7.5 7.5 0 0 0 0-15zm0 18.75c-11.44 0-15 7.5-15 7.5V30h30v-3.75s-3.56-7.5-15-7.5z" />
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

export default IconProfile
