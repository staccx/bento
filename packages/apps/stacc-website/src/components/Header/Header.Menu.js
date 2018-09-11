import React from "react"
import PropTypes from "prop-types"
import styled, { css } from "styled-components"
import { NavLink } from "react-router-dom"
import { spacing, color, borderRadius } from "@staccx/theme"
import { opacity } from "@staccx/color"
import { Button, List } from "@staccx/base"

class HeaderMenu extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      expanded: null
    }
  }

  handleExpand = id => {
    this.setState(prevState => ({
      expanded: prevState.expanded !== id ? id : null
    }))
  }

  render() {
    const { inverted, items } = this.props
    return (
      <Navigation>
        <MenuItems inverted={inverted ? inverted.toString() : undefined}>
          {items.map(
            menuItem =>
              menuItem.link ? (
                <li key={menuItem._key}>
                  <MenuItem
                    to={menuItem.link.path.current}
                    exact
                    activeClassName="is-current"
                    inverted={inverted ? inverted.toString() : undefined}
                    emphasized={
                      menuItem.emphasized
                        ? menuItem.emphasized.toString()
                        : undefined
                    }
                    onClick={() => this.setState({ expanded: null })}
                  >
                    {menuItem.title}
                  </MenuItem>
                </li>
              ) : menuItem.submenu ? (
                <li key={menuItem._key}>
                  <ExpandBtn
                    onClick={() => this.handleExpand(menuItem._key)}
                    inverted={inverted || undefined}
                    expanded={this.state.expanded === menuItem._key}
                  >
                    {menuItem.title}
                  </ExpandBtn>
                  <SubMenu
                    expanded={this.state.expanded === menuItem._key}
                    inverted={inverted || undefined}
                    onClick={() => this.setState({ expanded: null })}
                  >
                    {menuItem.submenu.map(submenuItem => (
                      <li key={submenuItem._id}>
                        <SubMenuLink to={submenuItem.path.current}>
                          {submenuItem.name}
                        </SubMenuLink>
                      </li>
                    ))}
                  </SubMenu>
                </li>
              ) : null
          )}
        </MenuItems>
      </Navigation>
    )
  }
}

const ExpandBtn = styled(Button)`
  position: relative;
  display: block;
  margin: 0 ${spacing.small};
  padding: 3px 0;
  color: currentColor;
  background-color: transparent;
  font-weight: normal;
  -webkit-font-smoothing: auto;
  border-radius: 0;
  border-bottom: 2px solid transparent;
  min-height: 0;
  line-height: inherit;
  transition: color 0.2s ease;

  &:hover,
  &:active,
  &:focus {
    color: currentColor;
    background-color: transparent;
    border-bottom: 2px solid
      ${p =>
        p.inverted
          ? opacity(color("white")(p), 0.5)
          : opacity(color("secondary")(p), 0.5)};
  }

  ${p =>
    p.expanded &&
    css`
      &::after {
        content: "";
        position: absolute;
        bottom: 4px;
        left: 50%;
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 0 12px 14px 12px;
        border-color: transparent transparent ${color.white} transparent;
        transform: translate(-50%, 100%);
        z-index: 100;
      }
    `};
`

const SubMenu = styled(List)`
  display: ${p => (p.expanded ? "block" : "none")};
  position: absolute;
  bottom: -${spacing.tiny};
  left: ${spacing.small};
  transform: translateY(100%);
  background-color: ${color.white};
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  padding: ${spacing.medium};
  width: calc(100% - ${spacing.small});
  z-index: 50;
`

const SubMenuLink = styled(NavLink)`
  color: ${color.text};
  text-decoration: none;

  &:hover,
  &:active,
  &:focus {
    color: ${color.primary};
  }
`

const Navigation = styled.nav`
  flex-grow: 1;
  display: flex;
  align-items: stretch;
  justify-content: flex-end;
`

const MenuItems = styled.ul`
  position: relative;
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

  > li:last-child {
    > * {
      margin-right: 0;
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
  transition: border 0.2s ease, color 0.2s ease;
  font-weight: normal;

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
