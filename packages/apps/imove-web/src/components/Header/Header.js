import React from "react"
import styled from "styled-components"
import { Wrapper } from "@staccx/base"
import { font, color, spacing, ThemeComponent } from "@staccx/theme"

const Header = () => (
  <Menu>
    <StyledWrapper size="largePlus">
      <ThemeComponent tagName="logo" height="48px" />
      <Navigation>
        <Items>
          <Item>
            <a href="">Hva er inkludert?</a>
          </Item>
          <Item>
            <a href="">Pris</a>
          </Item>
          <Item>
            <a href="">Fordeler</a>
          </Item>
          <Item>
            <a href="">Spørsmål og svar</a>
          </Item>
          <LoginButton>
            <a href="/app">Logg inn</a>
          </LoginButton>
        </Items>
      </Navigation>
    </StyledWrapper>
  </Menu>
)

const Menu = styled.div`
  padding: ${spacing("large")};
`

const StyledWrapper = styled(Wrapper)`
  display: flex;
  justify-content: space-between;
  padding: ${spacing("medium")} $;
  font-size: ${font("large")};
`

const Navigation = styled.nav`
  display: block;
`

const Items = styled.ul`
  display: flex;
  justify-content: right;
`

const Item = styled.li`
  a {
    display: block;
    color: ${color("primary")};
    text-decoration: none;
    padding: 0.4em 1em;
    &:hover {
      text-decoration: underline;
    }
  }
`

const LoginButton = styled.li`
  a {
    display: block;
    color: ${color("primary")};
    text-decoration: none;
    padding: 0.4em 2em;
    border: 3px solid ${color("primary")};
  }
  margin-left: 1em;
`

export default Header
