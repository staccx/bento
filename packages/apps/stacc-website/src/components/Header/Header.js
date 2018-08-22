import React from "react"
import styled from "styled-components"
import { Wrapper } from "@staccx/base"
import { spacing } from "@staccx/theme"
import Logo from "../Logo/Logo"
import HeaderMenu from "./Header.Menu"

const Header = () => (
  <Head>
    <Wrapper>
      <Inner>
        <Logo />
        <HeaderMenu />
      </Inner>
    </Wrapper>
  </Head>
)

const Head = styled.header`
  padding-top: ${spacing.mediumPlus};
`

const Inner = styled.div`
  display: flex;
  justify-content: space-between;
`

export default Header
