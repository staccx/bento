import React from "react"
import PropTypes from "prop-types"
import { Wrapper } from "@staccx/base"
import { color, spacing, font } from "@staccx/theme"
import SectionHeading from "../SectionHeading/SectionHeading"
import LinkButton from "../LinkButton/LinkButton"
import styled from "styled-components"

const CallToAction = ({ size, heading, copy, buttons, bgImage }) => (
  <Content bg={bgImage}>
    <Wrapper size={size}>
      <Container>
        <SectionHeading level={2}>{heading}</SectionHeading>
        <Copy>{copy}</Copy>
      </Container>
      {buttons.map(data => (
        <LinkButton key={data._key} variant={data.variant} url={data.url}>
          {data.text}
        </LinkButton>
      ))}
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

const Copy = styled.p`
  font-size: ${font("largePlus")};
  padding-bottom: ${spacing("large")};
`

CallToAction.defaultProps = {
  size: "large"
}

CallToAction.propTypes = {
  heading: PropTypes.string,
  copy: PropTypes.string,
  bgImage: PropTypes.string,
  buttons: PropTypes.array,
  width: PropTypes.string
}

export default CallToAction
