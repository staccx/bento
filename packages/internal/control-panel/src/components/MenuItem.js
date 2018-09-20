import React from "react"
import styled from "styled-components"
import { NavLink, Route } from "react-router-dom"
import { spacing, color, fontWeight } from "@staccx/theme"

export const activeName = "menuItemActive"

const MenuItem = ({ path, title, submenu, icon, ...props }) => {
  return (
    <MenuListItem>
      <MenuElement to={path} activeClassName={activeName}>
        {icon}
        {props.children}
      </MenuElement>
    </MenuListItem>
  )
}

export default MenuItem

const MenuElement = styled(NavLink)`
  height: 60px;
  display: flex;
  padding: ${spacing.small};
  padding: 12px;
  justify-content: space-between;
  align-items: center;
  text-decoration: none;
  border-left: 2px solid transparent;
  svg {
    color: ${color.primary};
  }
  &:hover,
  &:active {
    background-color: ${color.subtleHover};
    border-color: ${color.primary};
  }
`

export const MenuTitle = styled.span`
  flex-grow: 1;
  padding-left: ${spacing.small};
  color: ${color.text};
  font-weight: ${fontWeight.bold};
`

const MenuListItem = styled.li`
  .${activeName} {
    background-color: ${color.subtleHover};
    border-color: ${color.primary};
  }
`
