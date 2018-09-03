import React from "react"
import PropTypes from "prop-types"
import styled, { css } from "styled-components"
import { color, font, spacing, wrapper } from "@staccx/theme"
import {
  Heading,
  Button,
  Layout,
  Wrapper,
  Divider,
  ItemGroup
} from "@staccx/base"
import FullWidth from "../FullWidth/FullWidth"

const Hero = ({ heading, lede, trinity }) => (
  <FullWidth>
    <Container>
      <HeroBG>
        <StyledWrapper>
          <Layout paddingBottom="grid">
            {heading && (
              <Heading level={1} variant="hero">
                {heading}
              </Heading>
            )}
            {lede && <Lede>{lede}</Lede>}
          </Layout>
          {trinity && (
            <SecondaryContentContainer singleton>
              <SecondaryContent>
                <Heading level={3}>Cloud native, scales seamlessly</Heading>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                  imperdiet molestie sapien ut mattis. Nunc justo magna,
                  eleifend sed lectus vitae, tempus euismod enim.
                </p>
              </SecondaryContent>
            </SecondaryContentContainer>
          )}
        </StyledWrapper>
      </HeroBG>
    </Container>
    {trinity && (
      <div>
        <SecondaryContentContainer>
          <SecondaryContent>
            <Heading level={3}>Looks good, feels right</Heading>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
              imperdiet molestie sapien ut mattis. Nunc justo magna, eleifend
              sed lectus vitae, tempus euismod enim.
            </p>
          </SecondaryContent>
          <SecondaryContent>
            <Heading level={3}>Works, inside & outside</Heading>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
              imperdiet molestie sapien ut mattis. Nunc justo magna, eleifend
              sed lectus vitae, tempus euismod enim.
            </p>
          </SecondaryContent>
        </SecondaryContentContainer>
      </div>
    )}
  </FullWidth>
)

const triangleHeight = "14vh"
const HeaderHeight = "88px"

const Container = styled.div`
  position: relative;
  margin-top: -${HeaderHeight};
  z-index: -1;
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
`

const SecondaryContentContainer = styled(ItemGroup)`
  position: relative;
  padding: ${props =>
    !props.singleton &&
    css`
      ${spacing("grid")} 0;
    `};

  > div {
    justify-content: space-around;
  }

  ${props =>
    !props.singleton &&
    css`
      &::after {
        content: "";
        position: absolute;
        left: 50%;
        top: 0;
        width: 1px;
        height: 100%;
        background-image: linear-gradient(${color.primary}, transparent);
      }
    `};
  }
`

const SecondaryContent = styled.div`
  flex-basis: calc(${wrapper.medium} / 1.5);
  text-align: center;

  > h3 {
    margin-bottom: ${spacing.small};
  }
`

const StyledWrapper = styled(Wrapper)`
  padding-left: ${spacing.medium} !important;
  padding-right: ${spacing.medium} !important;
`

const Lede = styled.p`
  font-size: ${font.h3};
  font-weight: 300;
  line-height: 1.8;
  text-align: center;
`

Hero.defaultProps = {
  trinity: true
}

Hero.propTypes = {
  heading: PropTypes.string,
  lede: PropTypes.string,
  trinity: PropTypes.bool
}

export default Hero
