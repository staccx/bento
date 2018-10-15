import React from "react"
import styled from "styled-components"
import { Wrapper, Heading } from "@staccx/base"
import { spacing, color, font, fontFamily, ThemeComponent } from "@staccx/theme"

const Footer = ({ data }) => (
  <Content>
    <Wrapper>
      <Logo>
        <ThemeComponent tagName="logo" inverted />
      </Logo>
      <Row>
        {data.map(item => (
          <li key={item._key}>
            <StyledHeading level={2}>{item.heading}</StyledHeading>
            <p>{item.text}</p>
          </li>
        ))}
      </Row>
    </Wrapper>
  </Content>
)

const Content = styled.footer`
  font-size: ${font("base")};
  line-height: 1.5;
  color: ${color("white")};
  padding: ${spacing.huge} 0;
  background-color: ${color("blackBlue")};
`

const Logo = styled.div`
  margin-bottom: ${spacing("medium")};
`

const Row = styled.ul`
  display: flex;
  justify-content: space-between;

  & li {
    max-width: 220px;
    & p:not(:last-child) {
      margin-bottom: ${spacing("small")};
    }
  }
`

const StyledHeading = styled(Heading)`
  font-family: ${fontFamily("body")};
  font-size: inherit;
  font-weight: bold;
  color: ${color("white")};
  margin-bottom: ${spacing("small")};
`

export default Footer
