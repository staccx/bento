import React from "react"
import styled from "styled-components"
import data from "./Menu.data"
import { ItemGroup, Button } from "@staccx/base"
import { spacing } from "@staccx/theme"

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
  padding: ${spacing.medium} 0;
`

const ButtonLabel = styled.span`
  flex-grow: 1;
`

const IconOuter = styled.div``

const ListItem = styled.div`
  flex-grow: 1;
`

export default Menu
