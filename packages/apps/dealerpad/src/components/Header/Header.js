import React from "react"
import { NavLink } from "react-router-dom"
import { ThemeComponent } from "@staccx/theme"
import { List } from "@staccx/base"
import routes from "../../data/routes"

const Header = ({ children, classname }) => (
  <div>
    <ThemeComponent tagName={"logo"} />
    <List>
      {routes.map(
        page =>
          page.inMenu && (
            <li>
              <NavLink to={page.path} activeClassName="dpCurrent">
                {page.name}
              </NavLink>
            </li>
          )
      )}
    </List>
  </div>
)

export default Header
