import React from "react"
import PropTypes from "prop-types"
import { Link, withRouter } from "react-router-dom"
import styled from "styled-components"
import { spacing } from "@staccx/theme"
import Logo from "../Logo/Logo"
import HeaderMenu from "./Header.Menu"
import { SanityDocument } from "@staccx/sanity"
import { Wrapper } from "@staccx/base"

const Header = ({ match, location }) => {
  return (
    <SanityDocument
      id={"ffe2cd1d-2fed-4436-9942-ad9674dd80ea"}
      pick={"links[]{link->,submenu[]->,...}, ..."}
    >
      {({ document }) => {
        if (!document) {
          return null
        }
        const inverted =
          (document.inverted || []).indexOf(location.pathname) !== -1
        return (
          <Head inverted={inverted}>
            <Wrapper>
              <Inner>
                <LogoLink to="/">
                  <Logo inverted={inverted} />
                </LogoLink>
                <HeaderMenu inverted={inverted} items={document.links} />
              </Inner>
            </Wrapper>
          </Head>
        )
      }}
    </SanityDocument>
  )
}

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

export default withRouter(Header)
