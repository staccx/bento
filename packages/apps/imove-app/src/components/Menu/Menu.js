import React from "react"
import styled from "styled-components"
import MenuItem from "./MenuItem"
import { Box } from "@staccx/base"

const menuElements = [
  {
    to: "/cars",
    icon: "Car",
    title: "Bestill bil"
  },
  {
    to: "/my-car",
    icon: "Garage",
    title: "Min bil"
  },
  {
    to: "/profile",
    icon: "Profile",
    title: "Profil"
  }
]

const Menu = () => (
  <Box variant="menu">
    <MenuList>
      {menuElements.map(item => (
        <MenuItem
          key={item.to}
          to={item.to}
          icon={item.icon}
          title={item.title}
        />
      ))}
    </MenuList>
  </Box>
)

const MenuList = styled.div`
  display: flex;
  justify-content: space-between;
`

export default Menu
