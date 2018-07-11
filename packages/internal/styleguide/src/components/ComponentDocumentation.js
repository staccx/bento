import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { spacing, color } from "@staccx/theme"

const ComponentDocumentation = ({ children, width }) => (
  <ComponentDocumentationWrapper width={width}>
    {children}
  </ComponentDocumentationWrapper>
)

const ComponentDocumentationWrapper = styled.div`
  background-color: ${color.bgGray};
  padding: ${spacing.medium};
  width: ${({ width }) => width};
`
export default ComponentDocumentation

ComponentDocumentation.propTypes = {
  children: PropTypes.any,
  width: PropTypes.string
}
