import React from "react"
import styled from "styled-components"
import { Portal } from "@staccx/base"
import { color } from "@staccx/theme"

const PortalLink = ({ href, tagName }) => (
  <PortalLinkElement href={href}>
    <Portal variant="secondary" tagName={tagName} />
  </PortalLinkElement>
)

const PortalLinkElement = styled.a`
  color: ${color("contactIcon")};
  &:hover,
  &:focus,
  &:active {
    color: ${color("contactIconHover")};
  }
`

export default PortalLink
