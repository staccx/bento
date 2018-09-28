import React from "react"
import styled from "styled-components"
import { ThemeComponent, spacing } from "@staccx/theme"
import { Wrapper } from "@staccx/base"

const Header = () => (
  <HeaderWrapper>
    <Wrapper>
      <ThemeComponent tagName={"logo"} fallback={null} />
    </Wrapper>
  </HeaderWrapper>
)

const HeaderWrapper = styled.a`
  padding-top: ${spacing.medium};
  padding-bottom: ${spacing.medium};
  display: inline-block;
`

export default Header
