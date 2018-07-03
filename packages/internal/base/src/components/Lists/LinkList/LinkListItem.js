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
import themePropTypes from "../../constants/themePropTypes"

const themeProps = {
  iconComponent: {
    name: "COMPONENT_LINK_LIST_ITEM_ICON",
    description: "",
    type: themePropTypes.component
  },
  icon: {
    name: "LINK_LIST_ITEM_CARET",
    description: "",
    type: themePropTypes.style
  },
  listItem: {
    name: "LINK_LIST_ITEM",
    description: "",
    type: themePropTypes.style
  },
  itemButton: {
    name: "LINK_LIST_ITEM_BUTTON_STYLE",
    description: "",
    type: themePropTypes.style
  },
  link: {
    name: "LINK_LIST_ITEM_BUTTON",
    description: "",
    type: themePropTypes.style
  },
  hover: {
    name: "LINK_LIST_ITEM_BUTTON_HOVER_ICON",
    description: "",
    type: themePropTypes.style
  }
}

const IconComponent = ({ ...props }) => (
  <ThemeComponent
    tagName={themeProps.iconComponent}
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

const Cursor = styled(IconComponent)`
  fill: ${color.wcag};
  position: absolute;
  right: ${spacing.small};
  ${themify(themeProps.icon)};
`

const ListItem = styled.li`
  list-style: none;
  border-bottom: 1px solid ${color.line};
  position: relative;
  &:last-child {
    border-bottom: none;
  }
  ${themify(themeProps.listItem)};
`

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
  ${themify(themeProps.itemButton)};
`

const Button = styled.a`
  ${ButtonStyle};
  &:hover,
  &:focus {
    ${Cursor} {
      fill: ${color.primary};
      ${themify(themeProps.hover)};
    }
  }
  ${themify(themeProps.link)};
`

export default LinkListItem
