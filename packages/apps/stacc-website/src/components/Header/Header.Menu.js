import React from "react"
import PropTypes from "prop-types"
import styled, { css } from "styled-components"
import { NavLink } from "react-router-dom"
import { opacity } from "@staccx/color"
import { Button, theming } from "@staccx/base"
import { BounceIn } from "@staccx/animations"
import HeaderMenuSubMenu from "./Header.Menu.SubMenu"

class HeaderMenu extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      expanded: false
    }
    this.handleExpand = this.handleExpand.bind(this)

    this.container = React.createRef()
  }

  handleExpand = id => {
    this.setState(
      prevState => ({
        expanded: prevState.expanded !== id ? id : null,
        prevExpanded: prevState.expanded
      }),
      () =>
        id === this.state.prevExpanded
          ? this.props.handleSubmenu(false)
          : id
          ? this.props.handleSubmenu(true)
          : this.props.handleSubmenu(false)
    )
  }

  render() {
    const { inverted, items, isOpen, closeMenu } = this.props
    return (
      <Navigation isOpen={isOpen}>
        <MenuItems inverted={inverted ? inverted.toString() : undefined}>
          {items.map(menuItem =>
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
                  data-key={menuItem._key}
                  inverted={inverted || undefined}
                  expanded={this.state.expanded === menuItem._key}
                  onClick={() => this.handleExpand(menuItem._key)}
                >
                  {menuItem.title}
                </SubMenuExpandBtn>
                <HeaderMenuSubMenu
                  expanded={this.state.expanded === menuItem._key}
                  inverted={inverted || undefined}
                  item={menuItem}
                  subMenuItems={menuItem.submenu}
                  closeMenu={closeMenu}
                  handleExpand={this.handleExpand}
                />
              </li>
            ) : null
          )}
          <li key={"_1231asdafsasd"}>
            <MenuItem
              to={window.location}
              onClick={this.props.openContactForm}
              activeClassName="is-current"
              inverted={inverted ? inverted.toString() : undefined}
              emphasized={"true"}
            >
              {"Get in touch"}
            </MenuItem>
          </li>
        </MenuItems>
      </Navigation>
    )
  }
}

const Navigation = styled.nav`
  display: ${p => (p.isOpen ? "flex" : "none")};
  align-items: stretch;
  flex-basis: 60%;
  transition: opacity 0.2s ease;

  @media only screen and (max-width: ${theming.wrapper.large}) {
    flex-basis: 100%;
    flex-direction: column;
    //margin: ${theming.spacing.small} -${theming.spacing.medium} 0;
    padding: ${theming.spacing.small} 0 0;
    animation: ${BounceIn} 0.5s ease-out forwards 1;
  }

  @media only screen and (min-width: ${theming.wrapper.large}) {
    display: flex;
    justify-content: flex-end;
  }
`

const MenuItems = styled.ul`
  ${props =>
    props.inverted
      ? `color: ${theming.color("white")(props)}`
      : `color: ${theming.color("textDark")(props)}`};

  > li:last-child {
    > * {
      margin-right: 0;
    }
  }

  @media only screen and (max-width: ${theming.wrapper.large}) {
    color: ${theming.color.white};
    font-size: ${theming.font.h3};

    > li:not(:last-child) {
      border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    }
  }

  @media only screen and (min-width: ${theming.wrapper.large}) {
    display: flex;
    flex-grow: 1;
    justify-content: space-between;
    align-items: center;
  }
`

const Emphasized = css`
  @media only screen and (min-width: ${theming.wrapper.large}) {
    color: ${theming.color.white};
    background-color: ${props =>
      props.inverted
        ? theming.color("textDark")(props)
        : theming.color("secondary")(props)};
    padding: ${theming.spacing.tiny};
    border-radius: ${theming.borderRadius};
    transition: box-shadow 0.2s ease;
    border-bottom: 0;

    &.is-current {
      border-bottom: 0;
    }

    &:hover,
    &:active,
    &:focus {
      color: ${theming.color.white};
      background-color: ${props =>
        props.inverted
          ? theming.color("textDark")(props)
          : theming.color("secondary")(props)};
      box-shadow: 0 2px 6px
        ${p =>
          p.inverted
            ? opacity(theming.color("black")(p), 0.25)
            : opacity(theming.color("secondary")(p), 0.25)};
      border-bottom: 0;
    }
  }
`

const MenuItemCss = css`
  display: block;
  margin: 0 ${theming.spacing.small};
  padding: 3px 0;
  text-decoration: none;
  border-bottom: 2px solid transparent;
  transition: border 0.2s ease, color 0.2s ease;
  font-weight: normal;
  color: currentColor;

  @media only screen and (max-width: ${theming.wrapper.large}) {
    padding: ${theming.spacing.tiny} ${theming.spacing.small};
  }

  @media only screen and (min-width: ${theming.wrapper.large}) {
    &.is-current {
      border-bottom: 2px solid
        ${p =>
          p.inverted
            ? theming.color("white")(p)
            : theming.color("secondary")(p)};
    }

    &:hover,
    &:active,
    &:focus {
      border-bottom: 2px solid
        ${p =>
          p.inverted
            ? opacity(theming.color("white")(p), 0.5)
            : opacity(theming.color("secondary")(p), 0.5)};
    }
    ${p => p.emphasized && Emphasized};
  }
`

const MenuItem = styled(NavLink)`
  ${MenuItemCss};
`

const SubMenuExpandBtn = styled(Button)`
  position: relative;
  display: block;
  margin: 0 ${theming.spacing.small};
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
  font-family: ${theming.fontFamily.heading};

  &:hover,
  &:active,
  &:focus {
    color: currentColor;
    background-color: transparent;
  }

  @media only screen and (max-width: ${theming.wrapper.large}) {
    padding: ${theming.spacing.tiny} ${theming.spacing.small};
    font-size: ${theming.font.h3};
  }

  @media only screen and (min-width: ${theming.wrapper.large}) {
    &:hover {
      border-bottom: 2px solid
        ${p =>
          p.inverted
            ? opacity(theming.color("white")(p), 0.5)
            : opacity(theming.color("secondary")(p), 0.5)};
    }

    ${p =>
      p.expanded &&
      css`
        &::after {
          content: "";
          position: absolute;
          bottom: -44px;
          left: 0;
          width: 100%;
          height: 2px;
          background-color: ${theming.color.primary};
          z-index: 100;
        }
      `};
  }
`

export default HeaderMenu

HeaderMenu.propTypes = {
  closeMenu: PropTypes.any,
  closeTimeoutMs: PropTypes.number,
  inverted: PropTypes.bool,
  isOpen: PropTypes.any,
  items: PropTypes.any,
  openContactForm: PropTypes.any
}

HeaderMenu.defaultProps = {
  inverted: false
}
