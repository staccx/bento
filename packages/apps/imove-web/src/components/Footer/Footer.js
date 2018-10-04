import React from "react"
import styled from "styled-components"
import { Wrapper } from "@staccx/base"
import { spacing } from "@staccx/theme"

const Footer = ({ content }) => (
  <Content>
    <Wrapper>
      <ul>
        {content.map(data => (
          <li key={data._key}>
            <h2>{data.heading}</h2>
            <p>{data.text}</p>
          </li>
        ))}
      </ul>
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
