import React from "react"
import styled, { css } from "styled-components"
import { NavLink } from "react-router-dom"
import { spacing, color, borderRadius } from "@staccx/theme"
import { opacity } from "@staccx/color"

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
        <MenuItem to={"/clients"} activeClassName="is-current">
          Clients
        </MenuItem>
      </li>
      <li>
        <MenuItem to={"/team"} activeClassName="is-current">
          Team
        </MenuItem>
      </li>
      <li>
        <MenuItem to={"/contact"} activeClassName="is-current" emphasized>
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
  display: block;
  margin: 0 ${spacing.small};
  padding: 3px 0;
  color: ${color.text};
  text-decoration: none;
  border-bottom: 2px solid transparent;
  transition: border 0.2s ease;

  &:hover,
  &:active,
  &:focus {
    border-bottom: 2px solid ${p => opacity(color("secondary")(p), 0.5)};
  }

  &.is-current {
    border-bottom: 2px solid ${color.primary};
  }

  ${p =>
    p.emphasized &&
    css`
      color: ${color.white};
      background-color: ${color.secondary};
      padding: ${spacing.tiny};
      border-radius: ${borderRadius};
      transition: box-shadow 0.2s ease;
      border-bottom: 0;

      &:hover,
      &:active,
      &:focus {
        box-shadow: 0 2px 6px ${p => opacity(color("secondary")(p), 0.25)};
        border-bottom: 0;
      }
    `};
`

export default HeaderMenu
