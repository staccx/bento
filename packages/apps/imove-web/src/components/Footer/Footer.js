import React from "react"
import styled from "styled-components"
import { Wrapper, Heading } from "@staccx/base"
import { spacing, color, fontFamily } from "@staccx/theme"

const Footer = ({ data }) => (
  <Content>
    <Wrapper>
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
  padding: ${spacing.huge} 0;
  background-color: ${color("blackBlue")};
  color: ${color("white")};
`

const Row = styled.ul`
  display: flex;
  justify-content: space-between;

  & li {
    max-width: 220px;
  }
`

const StyledHeading = styled(Heading)`
  font-family: ${fontFamily("body")};
  font-size: inherit;
  font-weight: bold;
  color: ${color("white")};
`

export default Footer
