import React from "react"
import styled from "styled-components"
import { Wrapper, ThemeComponent, theming } from "@staccx/base"

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
    padding: ${theming.spacing.medium};
    @media only screen and (max-width: ${theming.wrapper.large}) {
      width: 100%;
    }
  }
`

const Outer = styled.div`
  background-color: ${theming.color.bgGray};
  padding: ${theming.spacing.large} 0;
  display: none;
`

const FooterMenuItem = styled.p`
  margin-bottom: ${theming.spacing.small};
`

export const FooterStyle = theming.createVariants(
  { [theming.VARIANT_DEFAULT]: Footer },
  "footer"
)

export default Footer
