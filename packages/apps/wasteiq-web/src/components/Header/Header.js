import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"
import { ThemeComponent } from "@staccx/base"

const Header = () => {
  return (
    <Outer>
      <LogoLink to={"/"}>
        <ThemeComponent tagName={"Logo"} />
      </LogoLink>
      <div>MenuItems go here</div>
    </Outer>
  )
}

const Outer = styled.div`
  display: flex;
  justify-content: space-between;
`

const LogoLink = styled(Link)`
  display: block;
  max-width: 168px;
`

export default Header
