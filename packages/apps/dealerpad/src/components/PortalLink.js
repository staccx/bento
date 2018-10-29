import React from "react"
import styled from "styled-components"
import { Portal, theming } from "@staccx/base"

const PortalLink = ({ href, tagName }) => (
  <PortalLinkElement href={href}>
    <Portal variant="secondary" tagName={tagName} />
  </PortalLinkElement>
)

const PortalLinkElement = styled.a`
  color: ${theming.color("contactIcon")};
  &:hover,
  &:focus,
  &:active {
    color: ${theming.color("contactIconHover")};
  }
`

export default PortalLink
