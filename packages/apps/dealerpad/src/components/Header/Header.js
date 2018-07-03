import React from "react"
import styled from "styled-components"
import { NavLink } from "react-router-dom"
import { ThemeComponent, color, spacing } from "@staccx/theme"
import { List, fontSmoothing } from "@staccx/base"
import routes from "../../data/routes"

const Header = ({ children, classname }) => (
  <Head>
    <ThemeComponent tagName={"logo"} inverted />
    <Menu>
      {routes.map(
        page =>
          page.inMenu && (
            <li key={page.path + "menu"}>
              <MenuElement to={page.path} activeClassName="dpCurrent">
                <ThemeComponent tagName={page.icon} />
                <MenuText>{page.name}</MenuText>
              </MenuElement>
            </li>
          )
      )}
    </Menu>
  </Head>
)

const Head = styled.header`
  background-color: ${color("header")};
  padding-left: ${spacing.small};
  padding-right: ${spacing.small};
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Menu = styled(List)`
  display: flex;
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
  border-bottom: 4px solid transparent;
  &.dpCurrent,
  &:hover,
  &:active,
  &:focus {
    border-color: ${color("headerActive")};
    svg {
      fill: ${color("headerIconActive")};
    }
  }
`

const MenuText = styled.span`
  white-space: nowrap;
  ${fontSmoothing};
`

export default Header
