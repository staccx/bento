import React from "react"
import PropTypes from "prop-types"
import { Link, withRouter } from "react-router-dom"
import styled from "styled-components"
import { spacing, wrapper } from "@staccx/theme"
import { SanityDocument } from "@staccx/sanity"
import { Wrapper, hideVisually } from "@staccx/base"
import Logo from "../Logo/Logo"
import HeaderMenu from "./Header.Menu"
import HeaderMenuButton from "./Header.MenuButton"

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      menuIsVisible: false
    }
  }

  handleMenu = () => {
    this.setState(prevState => ({
      menuIsVisible: !prevState.menuIsVisible
    }))
  }

  closeMenu = () => {
    this.setState(prevState => ({
      menuIsVisible: false
    }))
  }

  render() {
    const { location } = this.props
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
                    <Logo
                      inverted={inverted}
                      menuIsVisible={this.state.menuIsVisible}
                    />
                    <LogoTitle>Stacc Home</LogoTitle>
                  </LogoLink>
                  <HeaderMenuButton
                    inverted={inverted}
                    onClick={() => this.handleMenu()}
                    isOpen={this.state.menuIsVisible}
                  />
                  <HeaderMenu
                    inverted={inverted}
                    items={document.links}
                    isOpen={this.state.menuIsVisible}
                    closeMenu={this.closeMenu}
                  />
                </Inner>
              </Wrapper>
            </Head>
          )
        }}
      </SanityDocument>
    )
  }
}

const LogoLink = styled(Link)`
  text-decoration: none;
  padding-right: ${spacing.medium};

  @media only screen and (max-width: ${wrapper.large}) {
    order: 2;
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

  @media only screen and (max-width: ${wrapper.large}) {
    flex-wrap: wrap;
  }
`

const LogoTitle = styled.span`
  ${hideVisually};
`

Header.defaultProps = {
  inverted: false
}

Header.propTypes = {
  inverted: PropTypes.bool
}

export default withRouter(Header)
