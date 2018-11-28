import React from "react"
import styled, { keyframes } from "styled-components"
import { NavLink } from "react-router-dom"
import { List, theming } from "@staccx/base"
import IconArrowRight from "../Icons/IconArrowRight"

const HeaderMenuSubMenu = ({ expanded, inverted, subMenuItems, closeMenu }) => {
  return (
    <SubMenu expanded={expanded} inverted={inverted || undefined}>
      {subMenuItems.map(submenuItem => (
        <li key={submenuItem._key + submenuItem.path.current}>
          <SubMenuLink
            to={submenuItem.path.current}
            data-link
            onClick={closeMenu}
          >
            {submenuItem.title}
            {"\u00a0"}
            <Icon />
          </SubMenuLink>
        </li>
      ))}
    </SubMenu>
  )
}

const headerHeight = "114px"

const SubMenuBounceIn = keyframes`
  from {
    opacity: 0;
    //transform: translateY(calc(100% - 12px));
  }

  to {
    opacity: 1;
    //transform: translateY(100%);
  }
`

const SubMenu = styled(List)`
  display: ${p => (p.expanded ? "block" : "none")};

  @media only screen and (max-width: ${theming.wrapper.large}) {
    background-color: rgba(0, 0, 0, 0.2);

    > li {
      border-bottom: 1px solid rgba(255, 255, 255, 0.05);
    }
  }

  @media only screen and (min-width: ${theming.wrapper.large}) {
    position: fixed;
    top: ${headerHeight};
    left: 0;
    background-color: ${theming.color.white};
    width: 100%;
    height: calc(100vh - ${headerHeight});
    z-index: 50;
    animation: ${SubMenuBounceIn} 0.2s ease forwards 1;

    > li {
      border-bottom: 1px solid rgba(0, 0, 0, 0.08);
    }
  }
`

const SubMenuLink = styled(NavLink)`
  display: block;
  color: currentColor;
  text-decoration: none;
  font-size: ${theming.font.base};
  padding: 16px ${theming.spacing.medium};

  @media only screen and (min-width: ${theming.wrapper.large}) {
    color: ${theming.color("textDark")};
    transition: background 0.2s ease, color 0.2s ease;
    padding: 16px;

    &:hover,
    &:active,
    &:focus {
      background-color: ${theming.color("g4")};
      color: ${theming.color("primaryWcag")};

      > svg {
        color: ${theming.color.primary};
        transform: translateX(3px);
      }
    }
  }
`

const Icon = styled(IconArrowRight)`
  pointer-events: none;
  display: inline-block;
  vertical-align: middle;
  width: 14px;
  height: 14px;
  margin-left: ${theming.spacing.tiny};
  color: ${theming.color("g2")};
  transition: transform 0.2s ease;

  @media only screen and (max-width: ${theming.wrapper.large}) {
    display: none;
  }
`

export default HeaderMenuSubMenu
