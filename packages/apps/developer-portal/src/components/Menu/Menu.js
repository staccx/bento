import React from "react"
import { Link } from "react-router-dom"
import { List } from "@staccx/base"

const Menu = ({ data }) => (
  <div>
    <List variant="documentationMenu">
      {data.map(menuItem => (
        <li key={menuItem.title}>
          <Link to={menuItem.url}>{menuItem.title}</Link>

          {menuItem.subMenu && (
            <List variant="documentationSubMenu">
              {menuItem.subMenu.map(subMenuItem => (
                <li key={subMenuItem.title}>
                  <Link to={subMenuItem.url}>{subMenuItem.title}</Link>
                </li>
              ))}
            </List>
          )}
        </li>
      ))}
    </List>
  </div>
)

export default Menu
