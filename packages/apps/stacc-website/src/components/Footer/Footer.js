import React from "react"
import styled from "styled-components"
import { Wrapper, fontSmoothing } from "@staccx/base"
import { spacing, color } from "@staccx/theme"
import Logo from "../Logo/Logo"

const Footer = ({ heading, callToAction }) => (
  <Container>
    <Wrapper>
      <Content>
        <div>
          <Logo inverted />
        </div>
        <div>
          <ul>
            <li>Overview</li>
            <li>Services</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>Overview</li>
            <li>Services</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>Overview</li>
            <li>Services</li>
          </ul>
        </div>
      </Content>
    </Wrapper>
  </Container>
)

const Container = styled.footer`
  background-color: ${color.text};
  color: ${color.white};
  padding: ${spacing.large} 0;
  ${fontSmoothing};
`

const Content = styled.div`
  display: flex;
  justify-content: space-between;

  > div {
    flex-basis: 25%;
  }
`

export default Footer
