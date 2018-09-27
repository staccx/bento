import React from "react"
import styled from "styled-components"
import { font } from "@staccx/theme"
import PropTypes from "prop-types"

const Advantage = ({ heading, content, className, icon }) => (
  <Content className={className}>
    <Heading>{heading}</Heading>
    <p>{content}</p>
  </Content>
)

const Content = styled.li`
  font-size: ${font("large")};
  text-align: center;
`

const Heading = styled.h2`
  text-transform: uppercase;
  font-size: ${font("largePlus")};
`

Advantage.propTypes = {
  heading: PropTypes.string,
  content: PropTypes.string,
  icon: PropTypes.string
}

export default Advantage
