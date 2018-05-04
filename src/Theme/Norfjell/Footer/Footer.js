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
          <p>
            <FooterMenuItem>Norfjell Bank</FooterMenuItem>
            <FooterMenuItem> staccx@stacc.com</FooterMenuItem>
          </p>
        </div>
      </Left>
      <Right>
        <div>
          <FooterMenuItem>Stacc – The fintech platform company</FooterMenuItem>
        </div>
        <div />
      </Right>
    </Layout>
  </Outer>
)

const Outer = styled.div`
  background-color: ${color.bgGray};
  margin-top: ${spacing.large};
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
