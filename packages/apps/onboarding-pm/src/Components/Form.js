import React from "react"
import styled from "styled-components"
import { Wrapper } from "@staccx/base"
import { spacing } from "@staccx/theme"

const Form = ({ children }) => (
  <FormWrapper size="small">{children}</FormWrapper>
)

const FormWrapper = styled(Wrapper)`
  padding-top: ${spacing.large};
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 48px;
`

export default Form
