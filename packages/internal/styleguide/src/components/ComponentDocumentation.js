import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { theming } from "@staccx/base"

const ComponentDocumentation = ({ children, width }) => (
  <ComponentDocumentationWrapper width={width}>
    {children}
  </ComponentDocumentationWrapper>
)

const ComponentDocumentationWrapper = styled.div`
  width: ${({ width }) => width};
  padding: ${theming.spacing.medium};
`
export default ComponentDocumentation

ComponentDocumentation.propTypes = {
  children: PropTypes.any,
  width: PropTypes.string
}
