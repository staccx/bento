import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const Story = ({ heading, lede, decoration, isReversed }) => (
  <Container>
    <Inner isReversed={isReversed}>
      <h2>{heading}</h2>
      <p>{lede}</p>
    </Inner>
  </Container>
)

const Container = styled.div``
const Inner = styled.div``

Story.PropTypes = {
  heading: PropTypes.string,
  lede: PropTypes.string,
  decoration: PropTypes.string,
  isReversed: PropTypes.bool
}

export default Story
