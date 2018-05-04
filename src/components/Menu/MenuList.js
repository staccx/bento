import React from "react"
import styled from "styled-components"
import data from "./Menu.data"
import { Box, Button } from "@staccx/base"
import IconArrowRight from "../Icons/Icon.ArrowRight"
import { spacing } from "@staccx/theme"

const Menu = ({ pages }) => {
  const menuOptions = data(pages)
  return (
    <Container variant="dashboardBox">
      <List>
        {menuOptions.map(option => (
          <ListItem key={option._id}>
            <Button variant="menuItem" onClick={() => option.page()}>
              <IconOuter>{option.icon}</IconOuter>
              <ButtonLabel>{option.label}</ButtonLabel>
              <IconArrowRight />
            </Button>
          </ListItem>
        ))}
      </List>
    </Container>
  )
}

const Container = styled(Box)`
  padding: 0;
`

const List = styled.ol`
  list-style-type: none;
  padding: 0;
`

const ButtonLabel = styled.span`
  flex-grow: 1;
`

const IconOuter = styled.div`
  margin-right: ${spacing.small};
`

const ListItem = styled.li``

export default Menu
