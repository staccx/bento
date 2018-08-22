import React from "react"
import styled from "styled-components"
import { NavLink } from "react-router-dom"
import { spacing } from "@staccx/theme"

const HeaderMenu = () => (
  <Navigation>
    <MenuItems>
      <li>
        <MenuItem to={"/"} exact activeClassName="is-current">
          Home
        </MenuItem>
      </li>
      <li>
        <MenuItem to={"/services"} activeClassName="is-current">
          Services
        </MenuItem>
      </li>
      <li>
        <MenuItem to={"/about"} activeClassName="is-current">
          About
        </MenuItem>
      </li>
      <li>
        <MenuItem to={"/clients"} activeClassName="is-current">
          Clients
        </MenuItem>
      </li>
      <li>
        <MenuItem to={"/contact"} activeClassName="is-current">
          Contact
        </MenuItem>
      </li>
    </MenuItems>
  </Navigation>
)

const Navigation = styled.nav`
  flex-grow: 1;
  display: flex;
  align-items: stretch;
  justify-content: stretch;
`

const MenuItems = styled.ul`
  flex-grow: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

const MenuItem = styled(NavLink)`
  padding: 0 ${spacing.small};
`

export default HeaderMenu
