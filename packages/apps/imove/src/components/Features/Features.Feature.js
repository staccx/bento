import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import { spacing, font } from "@staccx/theme"

const Feature = ({ heading, text }) => (
  <Content>
    <Heading>{heading}</Heading>
    <p>{text}</p>
  </Content>
)

const Content = styled.li`
  font-size: ${font("large")};
  width: 50%;
  padding: 0 ${spacing("largePlusPlus")} ${spacing("largePlus")};
`

const Heading = styled.h3`
  font-size: ${font("largePlus")};
`

Feature.propTypes = {
  heading: PropTypes.string,
  content: PropTypes.string
}

export default Feature
