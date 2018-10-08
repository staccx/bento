import React from "react"
import styled from "styled-components"
import { media } from "../../styleUtils"
import PropTypes from "prop-types"
import { Wrapper } from "@staccx/base"
import { color, spacing, font } from "@staccx/theme"
import SectionHeading from "../SectionHeading/SectionHeading"
import LinkButton from "../LinkButton/LinkButton"

const CallToAction = ({ data }) => (
  <Content variant={data.variant}>
    <Wrapper size={data.size}>
      <Container>
        <SectionHeading align="left">{data.heading}</SectionHeading>
        <Copy>{data.copy}</Copy>
      </Container>
      {data.buttons.map(data => (
        <LinkButton key={data._key} variant={data.variant} url={data.url}>
          {data.text}
        </LinkButton>
      ))}
    </Wrapper>
  </Content>
)

const Content = styled.div`
  background-color: ${color("bgGray")};
  background-image: url(${p => p.variant === "1" && "/img/road01@2x.png"});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: right;
  color: ${color("secondary")};
  padding: ${spacing.huge} 0;
  ${media.chromeTablet`
    padding: ${spacing.large} 0;
  `};
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
