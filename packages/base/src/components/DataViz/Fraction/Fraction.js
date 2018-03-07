import React from "react"
import PropTypes from "prop-types"
import styled, { css } from "styled-components"
import hideVisually from "../../../Styles/hideVisually"

const Fraction = ({
  value,
  max,
  maxComponent,
  valueComponent,
  className,
  onClick,
  ...rest
}) => {
  const fractionArray = [...Array(max)].map((e, index) => index < value)
  const unfilled = maxComponent || <DesaturatedDot />
  const filled = valueComponent || <ColoredDot />

  const addKey = (compo, index, handleClick) =>
    React.cloneElement(compo, {
      key: `dot-${index}`,
      onClick: handleClick || null
    })

  return (
    <FractionWrapper className={className} {...rest}>
      {fractionArray.map(
        (dot, index) =>
          dot
            ? addKey(filled, index, () => (onClick ? onClick(index) : null))
            : addKey(unfilled, index, () => (onClick ? onClick(index) : null))
      )}
      <Hide>
        {value} / {max}
      </Hide>
    </FractionWrapper>
  )
}

const Hide = styled.span`
  ${hideVisually};
`

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
  valueComponent: null,
  className: "",
  onClick: null
}

Fraction.propTypes = {
  value: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  maxComponent: PropTypes.element,
  valueComponent: PropTypes.element,
  className: PropTypes.string,
  onClick: PropTypes.func
}

export default Fraction
