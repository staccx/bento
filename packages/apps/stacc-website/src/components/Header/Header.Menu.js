import React from "react"
import PropTypes from "prop-types"
import styled, { css } from "styled-components"
import { NavLink } from "react-router-dom"
import { spacing, color, borderRadius, wrapper, font } from "@staccx/theme"
import { opacity } from "@staccx/color"
import { Button, List } from "@staccx/base"
import { BounceIn } from "@staccx/animations"

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
    const { inverted, items, isOpen, closeMenu } = this.props
    return (
      <Navigation isOpen={isOpen}>
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
                    onClick={() =>
                      this.setState({ expanded: null }, () => closeMenu())
                    }
                  >
                    {menuItem.title}
                  </MenuItem>
                </li>
              ) : menuItem.submenu ? (
                <li key={menuItem._key}>
                  <SubMenuExpandBtn
                    onClick={() => this.handleExpand(menuItem._key)}
                    inverted={inverted || undefined}
                    expanded={this.state.expanded === menuItem._key}
                  >
                    {menuItem.title}
                  </SubMenuExpandBtn>
                  <SubMenu
                    expanded={this.state.expanded === menuItem._key}
                    inverted={inverted || undefined}
                    onClick={() =>
                      this.setState({ expanded: null }, () => closeMenu())
                    }
                  >
                    {menuItem.submenu.map(submenuItem => (
                      <li key={submenuItem._key + submenuItem.path.current}>
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

const Navigation = styled.nav`
  display: ${p => (p.isOpen ? "flex" : "none")};
  align-items: stretch;
  flex-grow: 1;
  transition: opacity 0.2s ease;

  @media only screen and (max-width: ${wrapper.large}) {
    order: 1;
    flex-basis: 100%;
    flex-direction: column;
    background-color: ${color("primaryDark")};
    margin: -${spacing.mediumPlus} -${spacing.medium} ${spacing.medium};
    padding: ${spacing.small} 0 0;
    animation: ${BounceIn} 0.5s ease-out forwards 1;
  }

  @media only screen and (min-width: ${wrapper.large}) {
    display: flex;
    justify-content: flex-end;
  }
`

const MenuItems = styled.ul`
  position: relative;

  ${props =>
    props.inverted
      ? `color: ${color("white")(props)}`
      : `color: ${color("text")(props)}`};

  > li:last-child {
    > * {
      margin-right: 0;
    }
  }

  @media only screen and (max-width: ${wrapper.large}) {
    color: ${color.white};
    font-size: ${font.h3};

    > li:not(:last-child) {
      border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    }
  }

  @media only screen and (min-width: ${wrapper.large}) {
    display: flex;
    justify-content: flex-end;
    align-items: center;
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

  @media only screen and (max-width: ${wrapper.large}) {
    padding: ${spacing.tiny} ${spacing.small};
  }

  @media only screen and (min-width: ${wrapper.large}) {
    &.is-current {
      border-bottom: 2px solid
        ${p => (p.inverted ? color("white")(p) : color("secondary")(p))};
    }

    &:hover,
    &:active,
    &:focus {
      border-bottom: 2px solid
        ${p =>
          p.inverted
            ? opacity(color("white")(p), 0.5)
            : opacity(color("secondary")(p), 0.5)};
    }

    ${p =>
      p.emphasized &&
      css`
        @media only screen and (min-width: ${wrapper.large}) {
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
  }
`

const SubMenuExpandBtn = styled(Button)`
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
  }

  @media only screen and (max-width: ${wrapper.large}) {
    padding: ${spacing.tiny} ${spacing.small};
    font-size: ${font.h3};
  }

  @media only screen and (min-width: ${wrapper.large}) {
    &:hover,
    &:active,
    &:focus {
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
  }
`

const SubMenu = styled(List)`
  display: ${p => (p.expanded ? "block" : "none")};

  @media only screen and (max-width: ${wrapper.large}) {
    background-color: rgba(0, 0, 0, 0.2);

    > li {
      padding: ${spacing.tiny} ${spacing.medium};
      border-bottom: 1px solid rgba(255, 255, 255, 0.05);
    }
  }

  @media only screen and (min-width: ${wrapper.large}) {
    position: absolute;
    bottom: -${spacing.tiny};
    left: ${spacing.small};
    transform: translateY(100%);
    background-color: ${color.white};
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    padding: ${spacing.medium};
    width: calc(100% - ${spacing.small});
    z-index: 50;
  }
`

const SubMenuLink = styled(NavLink)`
  color: currentColor;
  text-decoration: none;
  font-size: ${font.base};

  @media only screen and (min-width: ${wrapper.large}) {
    color: ${color.text};

    &:hover,
    &:active,
    &:focus {
      color: ${color.primary};
    }
  }
`

export default HeaderMenu

HeaderMenu.propTypes = {
  inverted: PropTypes.bool
}

HeaderMenu.defaultProps = {
  inverted: false
}
