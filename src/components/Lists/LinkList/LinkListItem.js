import React from "react"
import PropTypes from "prop-types"
import styled, { css } from "styled-components"
import CaretRight from "../../Icons/CarerRight/CaretRight"
import {
  spacing,
  fontWeight,
  fontFamily,
  font,
  color,
  applyVariants
} from "../../../theming"
import ThemeComponent from "../../Theme/ThemeComponent"
import themeProps from "./LinkListItem.themeProps"

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
  className: ""
}

LinkListItem.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func
}

LinkListItem.themeProps = themeProps

const Cursor = styled(IconComponent)`
  fill: ${color.wcag};
  position: absolute;
  right: ${spacing.small};
  ${applyVariants(themeProps.icon)};
`

const ListItem = styled.li`
  list-style: none;
  border-bottom: 1px solid ${color.line};
  position: relative;
  &:last-child {
    border-bottom: none;
  }
  ${applyVariants(themeProps.listItem)};
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
  ${applyVariants(themeProps.itemButton)};
`

const Button = styled.a`
  ${ButtonStyle};
  &:hover,
  &:focus {
    ${Cursor} {
      fill: ${color.primary};
      ${applyVariants(themeProps.hover)};
    }
  }
  ${applyVariants(themeProps.link)};
`
LinkListItem.themeProps = themeProps
export default LinkListItem
