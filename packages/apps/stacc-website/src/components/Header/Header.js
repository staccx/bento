import React from "react"
import PropTypes from "prop-types"
import { Link, withRouter } from "react-router-dom"
import styled from "styled-components"
import { SanityDocument } from "@staccx/sanity"
import { Wrapper, theming } from "@staccx/base"
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
    const { location, hideMenu, inverted } = this.props
    return (
      <SanityDocument
        id={"ffe2cd1d-2fed-4436-9942-ad9674dd80ea"}
        pick={"links[]{link->,submenu[]->,...}, ..."}
      >
        {({ document }) => {
          if (!document) {
            return null
          }
          const isInverted =
            (document.inverted || []).indexOf(location.pathname) !== -1 ||
            inverted

          return (
            <Head
              inverted={isInverted}
              menuIsVisible={this.state.menuIsVisible}
            >
              <Wrapper>
                <Inner>
                  <LogoLink to="/">
                    <Logo
                      inverted={isInverted}
                      menuIsVisible={this.state.menuIsVisible}
                    />
                    <LogoTitle>Stacc Home</LogoTitle>
                  </LogoLink>
                  {!hideMenu && (
                    <React.Fragment>
                      <HeaderMenuButton
                        inverted={isInverted}
                        onClick={() => this.handleMenu()}
                        isOpen={this.state.menuIsVisible}
                      />

                      <HeaderMenu
                        inverted={isInverted}
                        items={document.links}
                        isOpen={this.state.menuIsVisible}
                        closeMenu={this.closeMenu}
                        openContactForm={this.props.openContactForm}
                      />
                    </React.Fragment>
                  )}
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
  padding-right: ${theming.spacing.medium};
`

const Head = styled.header`
  padding-top: ${theming.spacing.mediumPlus};
  z-index: 10;
  font-family: ${theming.fontFamily.heading};

  @media only screen and (max-width: ${theming.wrapper.large}) {
    position: ${p => (!p.menuIsVisible ? "relative" : "fixed")};
    background-color: ${p =>
      !p.menuIsVisible ? "transparent" : theming.color("primaryDark")(p)};
    height: ${p => (!p.menuIsVisible ? "auto" : "100vh")};
    width: 100%;
    overflow-y: ${p => (p.menuIsVisible ? "scroll" : "hidden")};

    ::-webkit-scrollbar {
      display: none;
    }
  }
`

const Inner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media only screen and (max-width: ${theming.wrapper.large}) {
    flex-wrap: wrap;
  }
`

const LogoTitle = styled.span`
  ${theming.hideVisually};
`

Header.defaultProps = {
  inverted: false
}

Header.propTypes = {
  inverted: PropTypes.bool
}

export default withRouter(Header)
