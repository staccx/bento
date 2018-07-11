import React from "react"
import PropTypes from "prop-types"
import styled, { css } from "styled-components"
import hideVisually from "../../../Styles/hideVisually"
import { spacing, color, themify } from "@staccx/theme"
import themePropTypes from "../../constants/themePropTypes"

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

Fraction.themeProps = {
  wrapper: {
    name: "fraction",
    description: "Wrapper style",
    type: themePropTypes.style
  },
  circle: {
    name: "fraction_circle",
    description: "Circle style",
    type: themePropTypes.style
  },
  coloredDot: {
    name: "fraction_colored_dot",
    description: "Colored dot style",
    type: themePropTypes.style
  },
  desaturatedDot: {
    name: "fraction_desaturated_dot",
    description: "Desaturated dot style",
    type: themePropTypes.style
  }
}

const circle = css`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  ${themify(Fraction.themeProps.circle.name)};
`

const ColoredDot = styled.div`
  ${circle};
  background-color: ${color.primary};
  ${themify(Fraction.themeProps.coloredDot.name)};
`

const DesaturatedDot = styled.div`
  ${circle};
  background-color: ${color.line};
  ${themify(Fraction.themeProps.desaturatedDot.name)};
`

const FractionWrapper = styled.div`
  display: flex;
  flex-direction: row;
  > * {
    margin-right: ${spacing.tiny};
  }
  ${themify(Fraction.themeProps.wrapper.name)};
`

Fraction.defaultProps = {
  max: 5,
  value: 5,
  maxComponent: null,
  valueComponent: null,
  className: "",
  onClick: null
}

Fraction.propTypes = {
  /**
   * Value
   * @export
   */
  value: PropTypes.number.isRequired,
  /**
   * Max
   * @export
   */
  max: PropTypes.number.isRequired,
  maxComponent: PropTypes.element,
  valueComponent: PropTypes.element,
  className: PropTypes.string,
  onClick: PropTypes.func
}

export default Fraction
