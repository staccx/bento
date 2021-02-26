import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import { formatMoney } from "../../../formatting"
import { applyVariants, spacing, color, font } from "../../../theming"
import themeProps from "./Keyfigures.themeProps"
import { componentCreateFactory } from "../../../theming/utils/createVariantsFunctionFactory"

/**
 * Keyfigures takes an array of objects, containing label, amount and key. It lets you display key figures with a label
 in a way that makes sense
 */
const KeyFigures = ({ figures, variant }) => (
  <List variant={variant}>
    {figures.map(figure => (
      <ListItem key={figure.key} variant={variant}>
        <Heading variant={variant}>{figure.label}</Heading>
        <Value variant={variant}> {formatMoney(figure.amount)}</Value>
      </ListItem>
    ))}
  </List>
)

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 0;
  color: currentColor;
  padding: 0;
  ${applyVariants(themeProps.list.name)};
`

const ListItem = styled.li`
  position: relative;
  display: flex;
  padding: ${spacing.tiny} ${spacing.medium};
  flex-direction: column;
  text-align: center;

  &:not(:first-child)::after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 1px;
    background-color: ${color.line};
  }
  ${applyVariants(themeProps.item.name)};
`

const Heading = styled.h3`
  padding-bottom: ${spacing.tiny};
  ${applyVariants(themeProps.heading.name)};
`

const Value = styled.span`
  font-size: ${font.h2};
  color: ${color.blue};
  ${applyVariants(themeProps.value.name)};
`

const defaultProps = {
  figures: [{}]
}

KeyFigures.propTypes = {
  /**
   * Takes an array of objects
   * objects containg value and heading
   */
  figures: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string,
      heading: PropTypes.string
    })
  ).isRequired
}
KeyFigures.defaultProps = defaultProps
KeyFigures.themeProps = themeProps
KeyFigures.createVariants = componentCreateFactory(KeyFigures)

export default KeyFigures
