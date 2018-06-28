import React from "react"
import { NavLink } from "react-router-dom"
import { List } from "@staccx/base"
import { color } from "@staccx/theme"
import styled from "styled-components"
import OpenApiConsumer from "../OpenApiConsumer"

const Menu = ({ data }) => (
  <OpenApiConsumer>
    {({ sorted }) => {
      console.log(sorted)
      return (
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
                        <SubmenuLink
                          to={subMenuItem.url}
                          activeClassName="active"
                        >
                          {subMenuItem.title}
                        </SubmenuLink>
                      </li>
                    ))}
                  </List>
                )}
              </li>
            ))}
            {Object.keys(sorted).map(key => {
              console.log(key)
              return (
                <li key={`path-${key}`}>
                  <MenuLink to={`/api/${key}`} activeClassName="active">
                    {key}
                  </MenuLink>
                  <List variant="documentationSubMenu">
                    {Object.keys(sorted[key]).map(operation => (
                      <li key={`path-${key}-operation-${operation}`}>
                        <SubmenuLink
                          to={`/api/${key}#${operation}`}
                          activeClassName="active"
                        >
                          {operation}
                        </SubmenuLink>
                      </li>
                    ))}
                  </List>
                </li>
              )
            })}
          </List>
        </MenuWrapper>
      )
    }}
  </OpenApiConsumer>
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
