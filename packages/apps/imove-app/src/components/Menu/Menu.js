import React from "react"
import styled from "styled-components"
import MenuItem from "./MenuItem"
import { Box } from "@staccx/base"
import { ThemeComponent, wrapper } from "@staccx/theme"

const menuElements = [
  {
    to: "/app/cars",
    icon: "Car",
    title: "Bestill bil"
  },
  {
    to: "/app/my-car",
    icon: "Garage",
    title: "Min bil"
  },
  {
    to: "/app/profile",
    icon: "Profile",
    title: "Profil"
  }
]

const Menu = () => (
  <Box variant="menu">
    <MenuWrapper>
      <LogoWrapper>
        <ThemeComponent tagName="logo" />
      </LogoWrapper>
      <FlexList>
        {menuElements.map(item => (
          <MenuItem
            key={item.to}
            to={item.to}
            icon={item.icon}
            title={item.title}
          />
        ))}
      </FlexList>
    </MenuWrapper>
  </Box>
)

const MenuWrapper = styled.div`
  margin: auto;
  max-width: ${wrapper.large};
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
  }
`

const FlexList = styled.div`
  display: flex;
  justify-content: space-between;
  min-width: 200px;
`

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-width: 768px) {
    display: none;
  }
`

export default Menu
