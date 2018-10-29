import React from "react"
import styled from "styled-components"
import { Wrapper, theming } from "@staccx/base"
import FooterCompanyInfo from "./Footer.CompanyInfo"
import FooterNavigation from "./Footer.Navigation"

const Footer = ({ heading, callToAction, openContactForm }) => (
  <Container>
    <Wrapper>
      <Content>
        <div>
          <FooterCompanyInfo />
        </div>
        <div>
          <FooterNavigation openContactForm={openContactForm} />
        </div>
      </Content>
    </Wrapper>
  </Container>
)

const Container = styled.footer`
  background-color: ${theming.color("textDark")};
  color: ${theming.color.white};
  padding: ${theming.spacing.large} 0;
  ${theming.fontSmoothing};
  font-family: ${theming.fontFamily.heading};
`

const Content = styled.div`
  display: flex;
  flex-direction: column-reverse;

  @media only screen and (max-width: ${theming.wrapper.medium}) {
    > div:last-child {
      margin-bottom: ${theming.spacing.large};
    }
  }

  @media only screen and (min-width: ${theming.wrapper.medium}) {
    flex-direction: row;
    justify-content: space-between;

    > div:first-child {
      flex-basis: 25%;
    }

    > div:last-child {
      flex-basis: 50%;
    }
  }
`

export default Footer
