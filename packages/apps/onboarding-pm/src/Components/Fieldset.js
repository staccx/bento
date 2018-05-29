import React from "react"
import styled from "styled-components"

const Fieldset = ({ children }) => (
  <FieldsetWrapper size="small">{children}</FieldsetWrapper>
)

const FieldsetWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 24px;
`

export default Fieldset
