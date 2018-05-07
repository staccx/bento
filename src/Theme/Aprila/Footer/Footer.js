import React from "react"
import styled from "styled-components"
import { color, spacing, ThemeComponent } from "@staccx/theme"
import { Layout, LayoutItem } from "@staccx/base"

const Footer = () => (
  <Outer>
    <Layout grid="stonehenge">
      <Left>
        <div>
          <ThemeComponent tagName={"logo"} />
        </div>
        <div>
          <FooterMenuItem>Aprila Bank ASA</FooterMenuItem>
          <FooterMenuItem>Kirkegata 5, 0153 Oslo</FooterMenuItem>
          <FooterMenuItem>hei@aprila.no</FooterMenuItem>
        </div>
      </Left>
      <Right>
        <div>
          <FooterMenuItem>Ofte stilte spørsmål</FooterMenuItem>
          <FooterMenuItem>Personvern og informasjonskapsler</FooterMenuItem>
        </div>
        <div>
          <FooterMenuItem>Har du spørsmål om faktura?</FooterMenuItem>
          <FooterMenuItem>Kundeklage</FooterMenuItem>
        </div>
      </Right>
    </Layout>
  </Outer>
)

const Outer = styled.div`
  background-color: ${color.bgGray};
  padding: ${spacing.large} 0;
  ${"" /* color: ${color.white}; */};
`

const Left = styled(LayoutItem)`
  grid-area: header / 2 / footer / 3;
  display: flex;
  justify-content: space-between;

  > * {
    flex-grow: 1;
  }
`

const Right = styled(LayoutItem)`
  grid-area: header / 3 / footer / 4;

  display: flex;
  justify-content: space-between;

  > * {
    flex-grow: 1;
  }
`

const FooterMenuItem = styled.p`
  margin-bottom: ${spacing.small};
`

export default Footer
