import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"
import { ThemeComponent, color } from "@staccx/theme"

const Menu = ({ to, icon, title }) => (
  <Link to={to}>
    <ThemeComponent tagName={icon} />
    <Title>{title}</Title>
  </Link>
)

const Title = styled.span`
  color: ${color("secondary")};
`

export default Menu
