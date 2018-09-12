import React from "react"
import styled from "styled-components"
import { Wrapper, fontSmoothing } from "@staccx/base"
import { spacing, color, wrapper } from "@staccx/theme"
import FooterCompanyInfo from "./Footer.CompanyInfo"
import FooterNavigation from "./Footer.Navigation"

const Footer = ({ heading, callToAction }) => (
  <Container>
    <Wrapper>
      <Content>
        <div>
          <FooterCompanyInfo />
        </div>
        <div>
          <FooterNavigation />
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
  flex-direction: column-reverse;

  @media only screen and (max-width: ${wrapper.medium}) {
    > div:last-child {
      margin-bottom: ${spacing.large};
    }
  }

  @media only screen and (min-width: ${wrapper.medium}) {
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
