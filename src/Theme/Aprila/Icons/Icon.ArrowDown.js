import React from "react"
import styled from "styled-components"
import { color, spacing } from "@staccx/theme"

const IconArrowDown = () => (
  <Outer>
    <Icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
      <path d="M14.77 29.67l-4.09-3.9a1.08 1.08 0 0 1 0-1.58 1.2 1.2 0 0 1 1.65 0l2.1 2V13.26c0-.61.52-1.11 1.17-1.11.64 0 1.17.5 1.17 1.11V26.2l2.1-2a1.2 1.2 0 0 1 1.65 0c.45.44.45 1.14 0 1.58l-4.1 3.9a1.2 1.2 0 0 1-.82.33c-.3 0-.6-.1-.83-.33zM10.34 1.12c0 .61-.53 1.11-1.17 1.11-.65 0-1.17-.5-1.17-1.11C8 .5 8.52 0 9.17 0c.64 0 1.17.5 1.17 1.12zm4.09 5.45c0-.62.52-1.12 1.17-1.12.64 0 1.17.5 1.17 1.12 0 .62-.53 1.12-1.17 1.12-.65 0-1.17-.5-1.17-1.12zm0 3.35c0-.62.52-1.12 1.17-1.12.64 0 1.17.5 1.17 1.12 0 .61-.53 1.11-1.17 1.11-.65 0-1.17-.5-1.17-1.11zM13.26 0c.64 0 1.17.5 1.17 1.12 0 .61-.53 1.11-1.17 1.11-.65 0-1.17-.5-1.17-1.11C12.1.5 12.61 0 13.26 0zm5.26 1.12c0 .61-.52 1.11-1.17 1.11-.65 0-1.17-.5-1.17-1.11C16.18.5 16.7 0 17.35 0c.65 0 1.17.5 1.17 1.12zm4.09 0c0 .61-.52 1.11-1.17 1.11-.65 0-1.17-.5-1.17-1.11C20.27.5 20.8 0 21.44 0c.65 0 1.17.5 1.17 1.12z" />
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

export default IconArrowDown
