import React from "react"
import styled from "styled-components"
import { Button } from "@staccx/base"
import { Box } from "../Box"
import IconArrowRight from "../Icons/Icon.ArrowRight"
import IconArrowUp from "../Icons/Icon.ArrowUp"
import IconArrowDown from "../Icons/Icon.ArrowDown"
import IconProfile from "../Icons/Icon.Profile"
import IconLogout from "../Icons/Icon.Logout"
import { spacing } from "@staccx/theme"

const menuOptions = [
  {
    _id: "eiwfohug",
    label: "Sett inn penger",
    icon: <IconArrowDown />
  },
  {
    _id: "wiofdh",
    label: "Ta ut penger",
    icon: <IconArrowUp />
  },
  {
    _id: "sioahugcf",
    label: "Min profil",
    icon: <IconProfile />
  },
  {
    _id: "fugya",
    label: "Logg ut",
    icon: <IconLogout />
  }
]

const Menu = () => (
  <Container>
    <List>
      {menuOptions.map(option => (
        <ListItem key={option._id}>
          <Button variant="menuItem">
            <IconOuter>{option.icon}</IconOuter>
            <ButtonLabel>{option.label}</ButtonLabel>
            <IconArrowRight />
          </Button>
        </ListItem>
      ))}
    </List>
  </Container>
)

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
