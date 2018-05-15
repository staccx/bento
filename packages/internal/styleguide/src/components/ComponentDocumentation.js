import React from "react"
import styled from "styled-components"
import { spacing } from "@staccx/theme"

const ComponentDocumentation = ({ children }) => (
  <ComponentDocumentationWrapper>{children}</ComponentDocumentationWrapper>
)

const ComponentDocumentationWrapper = styled.div`
  padding: ${spacing.medium};
`
export default ComponentDocumentation
