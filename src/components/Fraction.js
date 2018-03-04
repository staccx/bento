import React from "react"
import PropTypes from "prop-types"
import styled, { css } from "styled-components"

// #TODO: key-problematikk.

const Fraction = ({ value, max, maxComponent, valueComponent }) => {
  const fractionArray = [...Array(max)].map((e, index) => index < value)
  const unfilled = maxComponent || <DesaturatedDot />
  const filled = valueComponent || <ColoredDot />
  return (
    <FractionWrapper>
      {fractionArray.map(dot => (dot === true ? filled : unfilled))}
    </FractionWrapper>
  )
}

const circle = css`
  width: 12px;
  height: 12px;
  border-radius: 50%;
`

const ColoredDot = styled.div`
  ${circle};
  background-color: ${p => p.theme.color.primary};
`
const DesaturatedDot = styled.div`
  ${circle};
  background-color: ${p => p.theme.color.line};
`

const FractionWrapper = styled.div`
  display: flex;
  flex-direction: row;
  > * {
    margin-right: ${p => p.theme.spacing.tiny};
  }
`

Fraction.defaultProps = {
  maxComponent: null,
  valueComponent: null
}

Fraction.propTypes = {
  value: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  maxComponent: PropTypes.element,
  valueComponent: PropTypes.element
}

export default Fraction
