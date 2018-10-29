import React from "react"
import styled from "styled-components"
import { NavLink } from "react-router-dom"
import {
  Wrapper,
  List,
  fontSmoothing,
  Button,
  ThemeComponent,
  theming
} from "@staccx/base"
import routes from "../../data/routes"

const Header = ({ onClick }) => (
  <Head>
    <Wrapper size="huge">
      <Inner>
        <NavLink to="/">
          <ThemeComponent tagName={"logo"} inverted />
        </NavLink>
        <Menu>
          {routes.map(
            page =>
              page.inMenu && (
                <DesktopMenuElement key={page.path + "menu"}>
                  <MenuElement to={page.path} activeClassName="dpCurrent">
                    <ThemeComponent tagName={page.icon} />
                    <MenuText>{page.name}</MenuText>
                  </MenuElement>
                </DesktopMenuElement>
              )
          )}
          <li>
            <Button variant="hamburger" onClick={() => onClick()}>
              <ThemeComponent tagName="Menu" />
              <MenuText>Menu</MenuText>
            </Button>
          </li>
        </Menu>
      </Inner>
    </Wrapper>
  </Head>
)

const DesktopMenuElement = styled.li`
  @media only screen and (max-width: 540px) {
    display: none;
  }
`

const Head = styled.header`
  background-color: ${theming.color("header")};
  ${fontSmoothing};
`

const Inner = styled.header`
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
  color: ${theming.color("headerText")};
  margin-left: ${theming.spacing.medium};
  padding: ${theming.spacing.small} 0;
  height: 52px; /* TODO: This is a hack */
  svg {
    margin-right: ${theming.spacing.small};
    fill: ${theming.color("headerActive")};
  }
  border-bottom: 4px solid transparent;
  &.dpCurrent,
  &:hover,
  &:active,
  &:focus {
    border-color: ${theming.color("headerActive")};
    svg {
      fill: ${theming.color("headerIconActive")};
    }
  }
`

const MenuText = styled.span`
  white-space: nowrap;
`

export default Header
