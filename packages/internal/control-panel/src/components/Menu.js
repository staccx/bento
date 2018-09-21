import React from "react"
import styled from "styled-components"
import { color, spacing } from "@staccx/theme"
import { Button } from "@staccx/base"
import { TranslatedText } from "@staccx/i18n"
import MenuItem, { MenuTitle } from "./MenuItem"
import Sidebar from "./Sidebar"

class Menu extends React.Component {
  render() {
    return (
      <MenuWrapper>
        <Sidebar />
        <MenuList>
          <CloseWrapper>
            <Button onClick={this.props.onClick} variant="hamburger">
              <TranslatedText i18nKey="CLOSE" />
            </Button>
          </CloseWrapper>
          <MenuItem path={"/"} icon={null}>
            <TranslatedText i18nKey={"CARS_MENUITEM"}>
              {value => <MenuTitle>{value}</MenuTitle>}
            </TranslatedText>
          </MenuItem>
          <MenuItem path={"/"} icon={null}>
            Here be menu
          </MenuItem>
          <MenuItem path={"/"} icon={null}>
            <TranslatedText i18nKey={"REPORTS_MENUITEM"}>
              {value => <MenuTitle>{value}</MenuTitle>}
            </TranslatedText>
          </MenuItem>
          <MenuItem path={"/"} icon={null}>
            <TranslatedText i18nKey={"INFORMATION_MENUITEM"}>
              {value => <MenuTitle>{value}</MenuTitle>}
            </TranslatedText>
          </MenuItem>
        </MenuList>
      </MenuWrapper>
    )
  }
}

export default Menu

const MenuWrapper = styled.div`
  display: grid;
  grid-template-columns: 60px 1fr;
  height: 100%;
  grid-gap: 0px;
  grid-template-areas: "sidebar menu";
  border-right: 1px solid ${color.line};
  min-height: 100vh;
  max-width: 200px;
`
const CloseWrapper = styled.li`
  min-height: 60px;
  text-align: right;
  display: flex;
  padding: ${spacing.small};
  justify-content: flex-end;
  border-bottom: 1px solid ${color.line};
  @media only screen and (min-width: 700px) {
    display: none;
  }
`

const MenuList = styled.ul`
  grid-area: menu;
`
