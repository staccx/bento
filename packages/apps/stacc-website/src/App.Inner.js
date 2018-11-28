import React, { Component } from "react"
import styled, { css } from "styled-components"
import { Wrapper } from "@staccx/base"
import { Footer, Header } from "./components/_codeSplitting"
import ScrollToTop from "./components/ScrollToTop"
import Routes from "./Routes"

class AppInner extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      subMenuOpen: false
    }
    this.handleSubmenu = this.handleSubmenu.bind(this)
  }

  handleSubmenu(open) {
    if (open !== undefined) {
      this.setState({ subMenuOpen: open })
    } else {
      this.setState({ subMenuOpen: !this.state.subMenuOpen })
    }
  }

  render() {
    return (
      <PageWrapper isSubMenuOpen={this.state.subMenuOpen}>
        <Header
          openContactForm={this.props.openContactForm}
          hideMenu={this.props.hideMenu}
          inverted={this.props.inverted}
          handleSubmenu={this.handleSubmenu}
        />
        <ScrollToTop />
        <Wrapper>
          <Main>
            <Routes inverted={this.props.inverted} change={this.props.change} />
          </Main>
        </Wrapper>
        <Footer openContactForm={this.props.openContactForm} />
      </PageWrapper>
    )
  }
}

const Main = styled.main`
  min-height: 99vh;
`

const PageWrapper = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr auto;
  ${p =>
    p.isSubMenuOpen &&
    css`
      height: 100vh;
      max-height: 100vh;
      overflow: hidden;
    `};
`

export default AppInner
