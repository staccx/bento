import React from "react"
import { NavLink } from "react-router-dom"
import { NavHashLink } from "react-router-hash-link"
import { List } from "@staccx/base"
import { color } from "@staccx/theme"
import styled from "styled-components"
import OpenApiConsumer from "../OpenApiConsumer"

const Menu = ({ data }) => (
  <OpenApiConsumer>
    {({ tags }) => (
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
          <li key={"openapi"}>
            <MenuLink to={"/api-reference"} activeClassName="active">
              API
            </MenuLink>
            <List variant="documentationSubMenu">
              {tags.map(tag => {
                return (
                  <li key={`path-${tag.name}`}>
                    <SubmenuLink
                      to={`/api-reference#${tag.name}`}
                      activeClassName="active"
                    >
                      {tag.name}
                    </SubmenuLink>
                  </li>
                )
              })}
            </List>
          </li>
        </List>
      </MenuWrapper>
    )}
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

const SubmenuLink = styled(NavHashLink)`
  &.active {
    color: ${color.primary};
  }
`

export default Menu
