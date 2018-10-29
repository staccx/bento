import React from "react"
import styled from "styled-components"
import { NavLink } from "react-router-dom"
import { theming } from "@staccx/base"

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
  padding: ${theming.spacing.small};
  padding: 12px;
  justify-content: space-between;
  align-items: center;
  text-decoration: none;
  border-left: 2px solid transparent;
  svg {
    color: ${theming.color.primary};
  }
  &:hover,
  &:active {
    background-color: ${theming.color.subtleHover};
    border-color: ${theming.color.primary};
  }
`

export const MenuTitle = styled.span`
  flex-grow: 1;
  padding-left: ${theming.spacing.small};
  color: ${theming.color.text};
  font-weight: ${theming.fontWeight.bold};
`

const MenuListItem = styled.li`
  .${activeName} {
    background-color: ${theming.color.subtleHover};
    border-color: ${theming.color.primary};
  }
`
