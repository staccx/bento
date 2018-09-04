import React from "react"
import PropTypes from "prop-types"
import LinkButton from "../LinkButton/LinkButton"
import styled from "styled-components"
import { color, spacing, font } from "@staccx/theme"
import { Wrapper } from "@staccx/base"
import { Heading } from "@staccx/base"

const CallToAction = ({
  heading,
  lede,
  img,
  primaryButtonText,
  primaryButtonUrl,
  secondaryButtonText,
  secondaryButtonUrl,
  width
}) => (
  <Content bg={img}>
    <Wrapper size={width}>
      <Container>
        <StyledHeading level={2}>{heading}</StyledHeading>
        <Lede>{lede}</Lede>
      </Container>
      {primaryButtonText && (
        <LinkButton variant="primary" uri={primaryButtonUrl}>
          {primaryButtonText}
        </LinkButton>
      )}
      {secondaryButtonText && (
        <LinkButton variant="secondary" uri={secondaryButtonUrl}>
          {secondaryButtonText}
        </LinkButton>
      )}
    </Wrapper>
  </Content>
)

const Content = styled.div`
  background-color: ${color("secondary")};
  background-image: ${p => p.bg && `url(${p.bg})`};
  background-repeat: no-repeat;
  background-size: contain;
  background-position: right;
  color: ${color("white")};
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
