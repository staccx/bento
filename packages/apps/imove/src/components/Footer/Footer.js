import React from "react"
import styled from "styled-components"
import { Wrapper } from "@staccx/base"

const Footer = ({ children }) => (
  <StyledWrapper>
    <Column>{children}</Column>
  </StyledWrapper>
)

const StyledWrapper = styled(Wrapper)``

const Column = styled.ul``

export default Footer
