import React from "react"
import PropTypes from "prop-types"
import styled, { css } from "styled-components"
import {
  targetSize,
  spacing,
  borderRadius,
  fontFamily,
  font,
  color,
  themify
} from "@staccx/theme"

const Caret = ({ className }) => (
  <svg className={className} width="13" height="19" viewBox="0 0 13 19">
    <path d="M2.8 0L0 2.8l6.6 6.6L0 16l2.8 2.8 9.4-9.4L2.8 0z" />
  </svg>
)
Caret.propTypes = { className: PropTypes.string }
Caret.defaultProps = { className: "" }

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
const Cursor = styled(Caret)`
  fill: ${color.line};
  margin-left: ${spacing.small()};
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
  padding: ${spacing.small()} ${spacing.medium()};
  display: block;
  font-weight: normal;
  display: flex;
  justify-content: space-between;
  align-items: center;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  cursor: pointer;
  ${themify(LINK_LIST_ITEM_BUTTON_STYLE)};
`

export const LINK_LIST_ITEM_BUTTON = "LINK_LIST_ITEM_BUTTON"
const Button = styled.a`
  ${ButtonStyle};
  &:hover,
  &:focus {
    ${Cursor} {
      fill: ${color.primary};
    }
  }
  ${themify(LINK_LIST_ITEM_BUTTON)};
`

export default LinkListItem
