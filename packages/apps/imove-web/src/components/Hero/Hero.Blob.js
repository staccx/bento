import React from "react"
import styled from "styled-components"
import { Heading, Layout } from "@staccx/base"
import { color, font, fontFamily, spacing, ThemeComponent } from "@staccx/theme"

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

const Logo = styled(ThemeComponent)`
  margin: auto;
`

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

const StyledHeading = styled(Heading)`
  color: ${color("white")};
  font-size: ${font("hugePlus")};
`

const HeadingSub = styled.p`
  font-family: ${fontFamily("heading")};
  color: ${color("white")};
  font-size: ${font("h2")};
`

export default HeroBlob
