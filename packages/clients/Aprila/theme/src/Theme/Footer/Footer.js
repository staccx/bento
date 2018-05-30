import React from "react"
import styled from "styled-components"
import { color, spacing, ThemeComponent, wrapper, registerStyle, VARIANT_DEFAULT } from "@staccx/theme"
import { Wrapper } from "@staccx/base"
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
        <div>
          <FooterMenuItem>Ofte stilte spørsmål</FooterMenuItem>
          <FooterMenuItem>Personvern og informasjonskapsler</FooterMenuItem>
        </div>
        <div>
          <FooterMenuItem>Har du spørsmål om faktura?</FooterMenuItem>
          <FooterMenuItem>Kundeklage</FooterMenuItem>
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
    padding: ${spacing.medium};
    @media only screen and (max-width: ${wrapper.breakout}) {
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

export const FooterStyle = registerStyle(
  {[VARIANT_DEFAULT]: Footer},
  "footer"
)

export default Footer
