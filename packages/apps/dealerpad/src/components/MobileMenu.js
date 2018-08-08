import React from "react"
import styled from "styled-components"
import { NavLink } from "react-router-dom"
import { ThemeComponent, color, spacing } from "@staccx/theme"
import { List, fontSmoothing, Button } from "@staccx/base"
import routes from "../data/routes"

const MobileMenu = ({ menuOpen, onClick, location }) => (
  <MenuWrapper menuOpen={menuOpen}>
    <Button variant="closeMobileMenu" onClick={() => onClick()}>
      <ThemeComponent tagName="Close" /> Lukk
    </Button>
    <Menu>
      {routes.map(
        page =>
          page.inMenu && (
            <li key={page.path}>
              <MenuElement
                to={page.path}
                activeClassName="dpCurrent"
                onClick={() => location.pathname !== page.path && onClick()}
              >
                <ThemeComponent tagName={page.icon} />
                <MenuText>{page.name}</MenuText>
              </MenuElement>
            </li>
          )
      )}
    </Menu>
  </MenuWrapper>
)

const Menu = styled(List)`
  display: flex;
  flex-direction: column;
`

const MenuWrapper = styled.div`
  display: ${p => (p.menuOpen ? "flex" : "none")};
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background-color: ${color("header")};
  ${fontSmoothing};
  z-index: 100;
  justify-content: center;
  align-items: center;
  @media only screen and (min-width: 540px) {
    display: none;
  }
`

const MenuElement = styled(NavLink)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: ${color("headerText")};
  margin-left: ${spacing.medium};
  padding: ${spacing.small} 0;
  height: 52px; /* TODO: This is a hack */
  svg {
    margin-right: ${spacing.small};
    fill: ${color("headerActive")};
  }

  &.dpCurrent,
  &:hover,
  &:active,
  &:focus {
    svg {
      fill: ${color("headerIconActive")};
    }
  }
`

const MenuText = styled.span`
  white-space: nowrap;
`

export default MobileMenu
