import React from "react"
import MenuItem from "./MenuItem"
import { Box } from "@staccx/base"

const menuElements = [
  {
    to: "/cars",
    icon: "car",
    title: "Bestill bil"
  },
  {
    to: "/",
    icon: "garage",
    title: "Min bil"
  },
  {
    to: "/profile",
    icon: "profile",
    title: "Profil"
  }
]

const Menu = () => (
  <Box variant="menu">
    {menuElements.map(item => (
      <MenuItem to={item.to} icon={item.icon} title={item.title} />
    ))}
  </Box>
)

export default Menu
