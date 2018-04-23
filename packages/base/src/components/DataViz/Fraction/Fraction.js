import React from "react"
import PropTypes from "prop-types"
import styled, { css } from "styled-components"
import hideVisually from "../../../Styles/hideVisually"
import { color, themify } from "@staccx/theme"

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

export const FRACTION_CIRCLE = "fraction_circle"

const circle = css`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  ${themify(FRACTION_CIRCLE)};
`

export const FRACTION_COLORED_DOT = "fraction_colored_dot"

const ColoredDot = styled.div`
  ${circle};
  background-color: color ${p => p.theme.globals.color.primary};
  ${themify(FRACTION_COLORED_DOT)};
`

export const FRACTION_DESATURATED_DOT = "fraction_desaturated_dot"

const DesaturatedDot = styled.div`
  ${circle};
  background-color: ${p => p.theme.globals.color.line};
  ${themify(FRACTION_DESATURATED_DOT)};
`

export const FRACTION = "fraction"

const FractionWrapper = styled.div`
  display: flex;
  flex-direction: row;
  > * {
    margin-right: ${p => p.theme.globals.spacing.tiny};
  }
  ${themify(FRACTION)};
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
