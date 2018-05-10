import React from "react"
import styled from "styled-components"
import data from "./Menu.data"
import { Box, LinkListItem, List } from "@staccx/base"
import { spacing, registerStyle, VARIANT_DEFAULT } from "@staccx/theme"

const Menu = ({ pages }) => {
  const menuOptions = data(pages)
  return (
    <Container variant="dashboardBox">
      <List>
        {menuOptions.map(option => (
          <LinkListItem key={option._id} to={"#"} onClick={() => option.page()}>
            <IconOuter>{option.icon}</IconOuter>
            <ButtonLabel>{option.label}</ButtonLabel>
          </LinkListItem>
        ))}
      </List>
    </Container>
  )
}

const Container = styled(Box)`
  padding: 0;
`

const IconOuter = styled.div`
  margin-right: ${spacing.small};
  margin-left: -${spacing.small};
`

const ButtonLabel = styled.span`
  flex-grow: 1;
`
export const MenuStyle = registerStyle({ [VARIANT_DEFAULT]: Menu }, "menu")
export default Menu
