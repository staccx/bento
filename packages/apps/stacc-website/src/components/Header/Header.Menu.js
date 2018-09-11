import React from "react"
import PropTypes from "prop-types"
import styled, { css } from "styled-components"
import { NavLink } from "react-router-dom"
import { spacing, color, borderRadius } from "@staccx/theme"
import { opacity } from "@staccx/color"

const HeaderMenu = ({ inverted, items }) => {
  return (
    <Navigation>
      <MenuItems inverted={inverted}>
        {items.map(
          menuItem =>
            menuItem.link ? (
              <li key={menuItem._key}>
                <MenuItem
                  to={menuItem.link.path.current}
                  exact
                  activeClassName="is-current"
                  inverted={inverted}
                  emphasized={menuItem.emphasized}
                >
                  {menuItem.title}
                </MenuItem>
              </li>
            ) : menuItem.submenu ? (
              <li key={menuItem._key}>
                {menuItem.title}
                <ul>
                  {menuItem.submenu.map(submenuItem => (
                    <li key={submenuItem._id}>{submenuItem.path.current}</li>
                  ))}
                </ul>
              </li>
            ) : null
        )}
      </MenuItems>
    </Navigation>
  )
}

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

HeaderMenu.propTypes = {
  inverted: PropTypes.bool
}

HeaderMenu.defaultProps = {
  inverted: false
}
