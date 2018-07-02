import React from "react"
import { NavLink } from "react-router-dom"
import { ThemeComponent } from "@staccx/theme"
import { List } from "@staccx/base"

const Header = ({ children, classname }) => (
  <div>
    <ThemeComponent tagName={"logo"} />
    <List>
      <li>
        <NavLink to="/new-case" activeClassName="dpCurrent">
          Registrer sak
        </NavLink>
      </li>
      <li>
        <NavLink to="/" activeClassName="dpCurrent">
          Nyheter
        </NavLink>
      </li>
      <li>
        <NavLink to="/my-sales" activeClassName="dpCurrent">
          Mine saker
        </NavLink>
      </li>
      <li>
        <NavLink to="/archive" activeClassName="dpCurrent">
          Arkiverte saker
        </NavLink>
      </li>
    </List>
  </div>
)

export default Header
