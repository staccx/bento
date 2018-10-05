import React from "react"
import styled from "styled-components"
import { Heading, Layout } from "@staccx/base"
import {
  color,
  font,
  fontFamily,
  spacing,
  ThemeComponent,
  wrapper
} from "@staccx/theme"

const HeroBlob = ({ logo, heading, headingSub }) => (
  <Content>
    <Inner>
      <Layout rowGap="medium">
        <Logo tagName="logo" inverted centered width="250px" />
        <StyledHeading level={1}>{heading}</StyledHeading>
        <HeadingSub>{headingSub}</HeadingSub>
      </Layout>
    </Inner>
  </Content>
)

const Content = styled.div`
  background-color: ${color("primary")};
  width: 100%;
  height: 0;
  padding-bottom: 100%;
  border-radius: 100%;
  border-bottom-right-radius: 0;
  position: relative;
`

const Inner = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: ${spacing("large")};
`

const Logo = styled(ThemeComponent)`
  @media only screen and (max-width: ${wrapper("largePlus")}) {
    width: 17.6vw;
  }
`

const StyledHeading = styled(Heading)`
  color: ${color("white")};
  font-size: ${font("hugePlus")};
  @media only screen and (max-width: ${wrapper("largePlus")}) {
    font-size: 3.66vw;
  }
`

const HeadingSub = styled.p`
  font-family: ${fontFamily("heading")};
  color: ${color("white")};
  font-size: ${font("h2")};
  @media only screen and (max-width: ${wrapper("largePlus")}) {
    font-size: 2.25vw;
  }
`

export default HeroBlob
