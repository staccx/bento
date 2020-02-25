import React from "react"
import styled from "styled-components"
import { Wrapper, ThemeComponent, theming } from "@staccx/base"
const Footer = () => (
  <Outer>
    <Wrapper>
      <Layout>
        <div>
          <ThemeComponent tagName={"logo"} />
        </div>
        <div>
          <FooterMenuItem>Aprila Bank ASA</FooterMenuItem>
          <FooterMenuItem>Kirkegata 5, 0153 Oslo</FooterMenuItem>
          <FooterMenuItem>hei@aprila.no</FooterMenuItem>
        </div>
      </Layout>
    </Wrapper>
  </Outer>
)

const Layout = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  > div {
    padding: ${theming.spacing.medium};
    @media only screen and (max-width: ${theming.wrapper.breakout}) {
      width: 100%;
    }
  }
`

const Outer = styled.div`
  z-index: 4;
  background-color: ${theming.color.bgGray};
  padding: ${theming.spacing.large} 0;
`

const FooterMenuItem = styled.p`
  margin-bottom: ${theming.spacing.small};
`

export const FooterStyle = theming.createVariants(
  { [theming.VARIANT_DEFAULT]: Footer },
  "footer"
)

export default Footer
