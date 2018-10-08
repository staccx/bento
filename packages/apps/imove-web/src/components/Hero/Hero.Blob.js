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
      <LogoWrapper>
        <Logo tagName="logo" inverted centered width="100%" />
      </LogoWrapper>
      <StyledHeading level={1}>{heading}</StyledHeading>
      <HeadingSub>{headingSub}</HeadingSub>
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
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  text-align: center;
  padding: ${spacing("large")};
  @media only screen and (max-width: ${wrapper("largePlus")}) {
    padding: 5vw;
  }

  & > * {
    margin: ${spacing("small")} 0;
    @media only screen and (max-width: ${wrapper("largePlus")}) {
      margin: 1vw;
    }
  }
`

const LogoWrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 250px;
  @media only screen and (max-width: ${wrapper("largePlus")}) {
    width: 20vw;
  }
`

const Logo = styled(ThemeComponent)``

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
