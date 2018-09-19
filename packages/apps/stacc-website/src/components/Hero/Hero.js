import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { color, font, spacing, fontFamily, wrapper } from "@staccx/theme"
import { Heading, Layout, Wrapper } from "@staccx/base"
import FullWidth from "../FullWidth/FullWidth"

const Hero = ({ heading, lede }) => (
  <FullWidth>
    <Container>
      <HeroBG>
        <StyledWrapper>
          <Layout>
            {heading && (
              <Heading level={1} variant="hero">
                {heading}
              </Heading>
            )}
            {lede && <Lede>{lede}</Lede>}
          </Layout>
        </StyledWrapper>
      </HeroBG>
    </Container>
  </FullWidth>
)

const triangleHeight = "14vh"
const triangleHeightLarge = "21vh"
const triangleHeightHuge = "28vh"
const HeaderHeight = "88px"

const Container = styled.div`
  position: relative;
  margin-top: -${HeaderHeight};
  z-index: -1;
  margin-bottom: ${spacing("grid")};
`

const HeroBG = styled.div`
  background-image: linear-gradient(
    to bottom,
    ${color("primaryDark")},
    ${color("primaryMediumDark")}
  );
  color: ${color.white};
  padding-top: calc(${HeaderHeight} + ${spacing("grid")});
  padding-bottom: ${triangleHeight};

  &::before,
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    width: 50%;
    height: ${triangleHeight};
  }

  &::before {
    left: 0;
    border-style: solid;
    border-width: ${triangleHeight} 0 0 50vw;
    border-color: transparent transparent transparent ${color.white};
  }

  &::after {
    right: 0;
    border-style: solid;
    border-width: 0 0 ${triangleHeight} 50vw;
    border-color: transparent transparent ${color.white} transparent;
  }

  @media only screen and (min-width: ${wrapper.large}) {
    &::before,
    &::after {
      height: ${triangleHeightLarge};
    }

    &::before {
      border-width: ${triangleHeightLarge} 0 0 50vw;
    }

    &::after {
      border-width: 0 0 ${triangleHeightLarge} 50vw;
    }
  }

  @media only screen and (min-width: 1900px) {
    &::before,
    &::after {
      height: ${triangleHeightHuge};
    }

    &::before {
      border-width: ${triangleHeightHuge} 0 0 50vw;
    }

    &::after {
      border-width: 0 0 ${triangleHeightHuge} 50vw;
    }
  }
`

const StyledWrapper = styled(Wrapper)`
  padding-left: ${spacing.medium} !important;
  padding-right: ${spacing.medium} !important;
`

const Lede = styled.p`
  font-size: ${font.h3};
  font-family: ${fontFamily.heading};
  font-weight: 300;
  line-height: 1.6;
  text-align: center;
  max-width: 680px;
  margin: 0 auto;
`

Hero.defaultProps = {
  trinity: null
}

Hero.propTypes = {
  heading: PropTypes.string,
  lede: PropTypes.string,
  trinity: PropTypes.object
}

export default Hero
