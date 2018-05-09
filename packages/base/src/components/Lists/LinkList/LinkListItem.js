import React from "react"
import PropTypes from "prop-types"
import styled, { css } from "styled-components"
import CaretRight from "../../Icons/CaretRight"
import {
  spacing,
  fontWeight,
  fontFamily,
  font,
  color,
  themify,
  ThemeComponent
} from "@staccx/theme"

export const COMPONENT_LINK_LIST_ITEM_ICON = "COMPONENT_LINK_LIST_ITEM_ICON"
const IconComponent = ({ ...props }) => (
  <ThemeComponent
    tagName={COMPONENT_LINK_LIST_ITEM_ICON}
    fallback={CaretRight}
    {...props}
  />
)

const LinkListItem = ({ className, children, onClick, to }) => (
  <ListItem className={className}>
    <Button onClick={onClick && onClick} href={to}>
      {children} <Cursor />
    </Button>
  </ListItem>
)

LinkListItem.defaultProps = {
  className: "",
  defaultProps: null
}

LinkListItem.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func
}

export const LINK_LIST_ITEM_CARET = "LINK_LIST_ITEM_CARET"
const Cursor = styled(IconComponent)`
  fill: ${color.line};
  position: absolute;
  right: ${spacing.small};
  ${themify(LINK_LIST_ITEM_CARET)};
`

export const LINK_LIST_ITEM = "LINK_LIST_ITEM"
const ListItem = styled.li`
  list-style: none;
  border-bottom: 1px solid ${color.line};
  position: relative;
  &:last-child {
    border-bottom: none;
  }
  ${themify(LINK_LIST_ITEM)};
`

export const LINK_LIST_ITEM_BUTTON_STYLE = "LINK_LIST_ITEM_BUTTON_STYLE"
const ButtonStyle = css`
  text-decoration: none;
  color: black;
  font-size: ${font.base};
  font-family: ${fontFamily.body()};
  padding: ${spacing.small} ${spacing.large} ${spacing.small} ${spacing.medium};
  display: block;
  font-weight: ${fontWeight.normal};
  display: flex;
  justify-content: space-between;
  align-items: center;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  cursor: pointer;
  ${themify(LINK_LIST_ITEM_BUTTON_STYLE)};
`

export const LINK_LIST_ITEM_BUTTON = "LINK_LIST_ITEM_BUTTON"
export const LINK_LIST_ITEM_BUTTON_HOVER_ICON =
  "LINK_LIST_ITEM_BUTTON_HOVER_ICON"
const Button = styled.a`
  ${ButtonStyle};
  &:hover,
  &:focus {
    ${Cursor} {
      fill: ${color.primary};
      ${themify(LINK_LIST_ITEM_BUTTON_HOVER_ICON)};
    }
  }
  ${themify(LINK_LIST_ITEM_BUTTON)};
`

export default LinkListItem
