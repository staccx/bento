import React from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import styled from "styled-components"
import { Wrapper } from "@staccx/base"
import { spacing } from "@staccx/theme"
import Logo from "../Logo/Logo"
import HeaderMenu from "./Header.Menu"

const Header = ({ inverted }) => (
  <Head inverted={inverted}>
    <Wrapper>
      <Inner>
        <LogoLink to="/">
          <Logo inverted={inverted} />
        </LogoLink>
        <HeaderMenu inverted={inverted} />
      </Inner>
    </Wrapper>
  </Head>
)

const LogoLink = styled(Link)`
  text-decoration: none;
  padding-right: ${spacing.medium};
  @media only screen and (max-width: 420px) {
    max-width: 50px;
    overflow: hidden;
  }
`

const Head = styled.header`
  position: relative;
  padding-top: ${spacing.mediumPlus};
  z-index: 10;
`

const Inner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

Header.defaultProps = {
  inverted: false
}

Header.propTypes = {
  inverted: PropTypes.bool
}

export default Header
