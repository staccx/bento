import React from "react"
import styled from "styled-components"
import { ThemeComponent, spacing, color } from "@staccx/theme"

const Portal = ({ label, className, tagName, ...rest }) => (
  <PortalWrapper className={className} {...rest}>
    <IconWrapper>
      <ThemeComponent tagName={tagName} />
    </IconWrapper>
    <PortalText>{label}</PortalText>
  </PortalWrapper>
)

const PortalText = styled.div``

const IconWrapper = styled.div`
  border-radius: 50%;
  width: ${spacing("largePlus")};
  height: ${spacing("largePlus")};
  background-color: ${color.subtleHover};
  margin-bottom: ${spacing.tiny};
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    fill: ${color.primary};
  }
`

const PortalWrapper = styled.div`
  display: inline-block;
  text-align: center;
  color: currentColor;
`

export default Portal
