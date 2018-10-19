import React from "react"
import styled from "styled-components"
import { theming } from "@staccx/base"

const Documentation = ({ children, title }) => (
  <DocumentationWrapper>
    <Title>{title}</Title>
    <DocumentationBlock>{children}</DocumentationBlock>
  </DocumentationWrapper>
)

const Title = styled.h2`
  font-family: ${theming.fontFamily.heading};
`
const DocumentationWrapper = styled.div``
const DocumentationBlock = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  font-size: ${theming.font.base};
  align-items: center;
  gap: 0;
  border: 1px solid #ebe7e7;
`

export default Documentation
