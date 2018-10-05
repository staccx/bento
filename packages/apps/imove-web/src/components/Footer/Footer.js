import React from "react"
import styled from "styled-components"
import { Wrapper } from "@staccx/base"
import { spacing } from "@staccx/theme"

const Footer = ({ data }) => (
  <Content>
    <Wrapper>
      <Row>
        {data.map(item => (
          <li key={item._key}>
            <h2>{item.heading}</h2>
            <p>{item.text}</p>
          </li>
        ))}
      </Row>
    </Wrapper>
  </Content>
)

const Content = styled.footer`
  padding: ${spacing.huge} 0;
`

const Row = styled.ul`
  display: flex;
  justify-content: space-between;

  & li {
    max-width: 220px;
  }
`

export default Footer
