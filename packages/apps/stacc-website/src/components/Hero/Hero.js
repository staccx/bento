import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { color, font, spacing, fontFamily, wrapper } from "@staccx/theme"
import { Heading, Layout, Wrapper } from "@staccx/base"
import FullWidth from "../FullWidth/FullWidth"

const Hero = ({ heading, lede }) => (
  <FullWidthWrapper>
    <Container>
      <HeroBG>
        <Centered>
          <StyledWrapper>
            <Layout>
              {heading && (
                <HeroHeading level={1} variant="hero">
                  {heading}
                </HeroHeading>
              )}
              {lede && <Lede>{lede}</Lede>}
            </Layout>
          </StyledWrapper>
        </Centered>
      </HeroBG>
    </Container>
  </FullWidthWrapper>
)

const triangleHeight = "18vh"
const triangleHeightLarge = "36vh"
const triangleHeightHuge = "45vh"
const HeaderHeight = "82px"

const Container = styled.div`
  position: relative;
  margin-top: -${HeaderHeight};
  z-index: -1;
`

const FullWidthWrapper = styled(FullWidth)`
  pointer-events: none;
`

const Centered = styled.div``

const HeroBG = styled.div`
  pointer-events: none;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-image: linear-gradient(
    to bottom,
    ${color("primaryDark")},
    ${color("primaryMediumDark")}
  );
  color: ${color.white};
  padding-top: calc(${HeaderHeight} + ${spacing("grid")});
  padding-bottom: ${triangleHeight};
  min-height: 65vh;

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
    padding-top: calc(
      ${HeaderHeight} + ${spacing("grid")} + ${spacing("grid")}
    );
    padding-bottom: calc(${triangleHeight} + ${spacing("grid")});

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

const HeroHeading = styled(Heading)`
  font-size: 72px;

  @media only screen and (max-width: ${wrapper.large}) {
    font-size: 54px;
  }

  @media only screen and (max-width: ${wrapper.medium}) {
    font-size: ${font.h2};
  }

  display: block;
`

const Lede = styled.p`
  font-size: ${font.h4};
  font-family: ${fontFamily.heading};
  font-weight: 300;
  line-height: 1.6;
  text-align: center;
  max-width: 680px;
  margin: 0 auto;

  @media only screen and (min-width: ${wrapper.large}) {
    font-size: ${font.h3};
  }
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
