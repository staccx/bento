import React from "react"
import styled from "styled-components"
import data from "./Menu.data"
import { ItemGroup, Button, theming } from "@staccx/base"

const Menu = ({ pages }) => {
  const menuOptions = data(pages)

  return (
    <MenuWrapper>
      <ItemGroup>
        {menuOptions.map(option => (
          <ListItem key={option._id}>
            <Button variant="menuItem" onClick={() => option.page()}>
              <IconOuter>{option.icon}</IconOuter>
              <ButtonLabel>{option.label}</ButtonLabel>
            </Button>
          </ListItem>
        ))}
      </ItemGroup>
    </MenuWrapper>
  )
}

const MenuWrapper = styled.div`
  padding: ${theming.spacing.medium} 0;
`

const ButtonLabel = styled.span`
  flex-grow: 1;
  font-weight: 300;
`

const IconOuter = styled.div``

const ListItem = styled.div`
  flex-grow: 1;
`
export const MenuStyle = theming.createVariants(
  { [theming.VARIANT_DEFAULT]: Menu },
  "menu"
)

export default Menu
