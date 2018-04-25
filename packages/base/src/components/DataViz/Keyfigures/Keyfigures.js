import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import { formatCurrency } from "@staccx/formatting"
import { spacing, color, font, themify } from "@staccx/theme"

const KeyFigures = ({ figures }) => (
  <List>
    {figures.map(figure => (
      <ListItem key={figure.key}>
        <Heading>{figure.label}</Heading>
        <Value>{formatCurrency(figure.amount)}</Value>
      </ListItem>
    ))}
  </List>
)

export const KEYFIGURES = "KEYFIGURES"
const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 0;
  color: currentColor;
  padding: 0;
  ${themify(KEYFIGURES)};
`

export const KEYFIGURES_ITEM = "KEYFIGURES_ITEM"
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
  ${themify(KEYFIGURES_ITEM)};
`

export const KEYFIGURES_HEADING = "KEYFIGURES_HEADING"
const Heading = styled.h3`
  padding-bottom: ${spacing.tiny};
  ${themify(KEYFIGURES_HEADING)};
`

export const KEYFIGURES_VALUE = "KEYFIGURES_VALUE"
const Value = styled.span`
  font-size: ${font.h2};
  color: ${color.blue};
  ${themify(KEYFIGURES_VALUE)};
`

KeyFigures.propTypes = {
  figures: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string,
      heading: PropTypes.string
    })
  ).isRequired
}

export default KeyFigures
