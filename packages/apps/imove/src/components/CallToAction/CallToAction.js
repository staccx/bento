import React from "react"
import PropTypes from "prop-types"
import LinkButton from "../LinkButton/LinkButton"
import styled from "styled-components"
import { color, spacing, font } from "@staccx/theme"
import { Wrapper, Heading } from "@staccx/base"

const CallToAction = ({
  heading,
  lede,
  img,
  button1Text,
  button1Url,
  button1Style,
  button2Text,
  button2Url,
  button2Style,
  button3Text,
  button3Url,
  button3Style,
  width
}) => (
  <Content bg={img}>
    <Wrapper size={width}>
      <Container>
        <StyledHeading level={2}>{heading}</StyledHeading>
        <Lede>{lede}</Lede>
      </Container>
      {button1Text && (
        <LinkButton variant={button1Style} uri={button1Url}>
          {button1Text}
        </LinkButton>
      )}
      {button2Text && (
        <LinkButton variant={button2Style} uri={button2Url}>
          {button2Text}
        </LinkButton>
      )}
      {button3Text && (
        <LinkButton variant={button3Style} uri={button3Url}>
          {button3Text}
        </LinkButton>
      )}
    </Wrapper>
  </Content>
)

const Content = styled.div`
  background-color: ${color("bgGray")};
  background-image: ${p => p.bg && `url(${p.bg})`};
  background-repeat: no-repeat;
  background-size: contain;
  background-position: right;
  color: ${color("secondary")};
  padding: ${spacing.huge} 0;
`

const Container = styled.div`
  width: 70%;
`

const StyledHeading = styled(Heading)`
  padding-bottom: calc(${spacing("large")} - 15px);
`

const Lede = styled.p`
  font-size: ${font("largePlus")};
  padding-bottom: ${spacing("large")};
`

CallToAction.defaultProps = {
  width: "large"
}

CallToAction.propTypes = {
  heading: PropTypes.string,
  lede: PropTypes.string,
  img: PropTypes.string,
  primaryButtonText: PropTypes.string,
  primaryButtonUrl: PropTypes.string,
  secondaryButtonText: PropTypes.string,
  secondaryButtonUrl: PropTypes.string,
  width: PropTypes.string
}

export default CallToAction
