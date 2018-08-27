import React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import { Wrapper } from "@staccx/base"
import { spacing } from "@staccx/theme"
import Logo from "../Logo/Logo"
import HeaderMenu from "./Header.Menu"

const Header = () => (
  <Head>
    <Wrapper>
      <Inner>
        <LogoLink to="/">
          <Logo />
        </LogoLink>
        <HeaderMenu />
      </Inner>
    </Wrapper>
  </Head>
)

const LogoLink = styled(Link)`
  text-decoration: none;
`

const Head = styled.header`
  padding-top: ${spacing.mediumPlus};
`

const Inner = styled.div`
  display: flex;
  justify-content: space-between;
`

export default Header
