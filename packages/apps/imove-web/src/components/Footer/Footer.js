import React from "react"
import styled from "styled-components"
import { Wrapper } from "@staccx/base"
import { spacing } from "@staccx/theme"

const Footer = ({ children }) => (
  <Wrapper>
    <Content>
      <Row>{children}</Row>
    </Content>
  </Wrapper>
)

const Content = styled.div`
  padding: ${spacing("huge")} 0;
`

const Row = styled.ul`
  display: flex;
  justify-content: space-between;

  & li {
    max-width: 220px;
  }
`

export default Footer
