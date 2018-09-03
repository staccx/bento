import React from "react"
import styled, { css } from "styled-components"
import { NavLink } from "react-router-dom"
import { spacing, color, borderRadius } from "@staccx/theme"
import { opacity } from "@staccx/color"

const HeaderMenu = ({ inverted }) => (
  <Navigation>
    <MenuItems inverted={inverted}>
      <li>
        <MenuItem
          to={"/"}
          exact
          activeClassName="is-current"
          inverted={inverted}
        >
          Home
        </MenuItem>
      </li>
      <li>
        <MenuItem
          to={"/services"}
          activeClassName="is-current"
          inverted={inverted}
        >
          Services
        </MenuItem>
      </li>
      <li>
        <MenuItem
          to={"/clients"}
          activeClassName="is-current"
          inverted={inverted}
        >
          Clients
        </MenuItem>
      </li>
      <li>
        <MenuItem to={"/team"} activeClassName="is-current" inverted={inverted}>
          Team
        </MenuItem>
      </li>
      <li>
        <MenuItem
          to={"/contact"}
          activeClassName="is-current"
          emphasized
          inverted={inverted}
        >
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
  ${props =>
    props.inverted
      ? `color: ${color("white")(props)}`
      : `color: ${color("text")(props)}`};

  @media only screen and (max-width: 649px) {
    flex-wrap: wrap;
    > li {
      flex-basis: 50%;
      &:first-child {
        display: none;
      }
    }
  }
`

const MenuItem = styled(NavLink)`
  display: block;
  margin: 0 ${spacing.small};
  padding: 3px 0;
  color: currentColor;
  text-decoration: none;
  border-bottom: 2px solid transparent;
  transition: border 0.2s ease;

  &:hover,
  &:active,
  &:focus {
    border-bottom: 2px solid
      ${p =>
        p.inverted
          ? opacity(color("white")(p), 0.5)
          : opacity(color("secondary")(p), 0.5)};
  }

  &.is-current {
    border-bottom: 2px solid
      ${p => (p.inverted ? color("white")(p) : color("secondary")(p))};
  }
  @media only screen and (max-width: 649px) {
    display: inline-block;
  }

  ${p =>
    p.emphasized &&
    css`
      @media only screen and (min-width: 650px) {
        color: ${color.white};
        background-color: ${props =>
          props.inverted ? color("text")(props) : color("secondary")(props)};
        padding: ${spacing.tiny};
        border-radius: ${borderRadius};
        transition: box-shadow 0.2s ease;
        border-bottom: 0;

        &:hover,
        &:active,
        &:focus {
          box-shadow: 0 2px 6px
            ${p =>
              p.inverted
                ? opacity(color("black")(p), 0.25)
                : opacity(color("secondary")(p), 0.25)};
          border-bottom: 0;
        }
      }
    `};
`

export default HeaderMenu
