import React from "react"
import styled from "styled-components"
import { color, spacing, ThemeComponent, wrapper } from "@staccx/theme"
import { Wrapper } from "@staccx/base"

const Footer = () => (
  <Outer>
    <Wrapper>
      <Layout>
        <div>
          <Logo tagName={"logo"} />
        </div>
        <div>
          <FooterMenuItem>Norfjell Bank</FooterMenuItem>
          <FooterMenuItem> staccx@stacc.com</FooterMenuItem>
        </div>
        <div>
          <FooterMenuItem>Stacc – The fintech platform company</FooterMenuItem>
        </div>
        <div />
      </Layout>
    </Wrapper>
  </Outer>
)

const Logo = styled(ThemeComponent)`
  margin: 0;
`

const Layout = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  > div {
    padding: ${spacing.medium};
    @media only screen and (max-width: ${wrapper.large}) {
      width: 100%;
    }
  }
`

const Outer = styled.div`
  background-color: ${color.bgGray};
  padding: ${spacing.large} 0;
`

const FooterMenuItem = styled.p`
  margin-bottom: ${spacing.small};
`

export default Footer
