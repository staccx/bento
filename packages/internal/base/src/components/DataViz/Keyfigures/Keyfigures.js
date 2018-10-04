import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import { formatCurrency } from "@staccx/formatting"
import { themePropTypes } from "../../../constants/themeContants"
import { applyVariants, spacing, color, font } from "../../../theming"

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

KeyFigures.themeProps = {
  list: {
    name: "KEYFIGURES",
    description: "list style",
    type: themePropTypes.style
  },
  item: {
    name: "KEYFIGURES_ITEM",
    description: "item style",
    type: themePropTypes.style
  },
  heading: {
    name: "KEYFIGURES_HEADING",
    description: "heading style",
    type: themePropTypes.style
  },
  value: {
    name: "KEYFIGURES_VALUE",
    description: "value style",
    type: themePropTypes.style
  }
}

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 0;
  color: currentColor;
  padding: 0;
  ${applyVariants(KeyFigures.themeProps.list.name)};
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
  ${applyVariants(KeyFigures.themeProps.item.name)};
`

const Heading = styled.h3`
  padding-bottom: ${spacing.tiny};
  ${applyVariants(KeyFigures.themeProps.heading.name)};
`

const Value = styled.span`
  font-size: ${font.h2};
  color: ${color.blue};
  ${applyVariants(KeyFigures.themeProps.value.name)};
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
