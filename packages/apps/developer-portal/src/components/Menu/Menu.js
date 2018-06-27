import React from "react"
import { NavLink } from "react-router-dom"
import { List } from "@staccx/base"
import { color } from "@staccx/theme"
import styled from "styled-components"

const Menu = ({ data }) => (
  <MenuWrapper>
    <List variant="documentationMenu">
      {data.map(menuItem => (
        <li key={menuItem.title}>
          <MenuLink to={menuItem.url} activeClassName="active">
            {menuItem.title}
          </MenuLink>

          {menuItem.subMenu && (
            <List variant="documentationSubMenu">
              {menuItem.subMenu.map(subMenuItem => (
                <li key={subMenuItem.title}>
                  <SubmenuLink to={subMenuItem.url} activeClassName="active">
                    {subMenuItem.title}
                  </SubmenuLink>
                </li>
              ))}
            </List>
          )}
        </li>
      ))}
    </List>
  </MenuWrapper>
)

const MenuWrapper = styled.div`
  position: sticky;
  top: 1px;
`

const MenuLink = styled(NavLink)`
  &.active {
    color: ${color.primary};
  }
`

const SubmenuLink = styled(NavLink)`
  &.active {
    color: ${color.primary};
  }
`

export default Menu
