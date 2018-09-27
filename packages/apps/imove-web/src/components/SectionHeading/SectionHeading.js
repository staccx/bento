import React from "react"
import styled from "styled-components"
import { spacing } from "@staccx/theme"

const SectionHeading = ({ text }) => <StyledHeading>{text}</StyledHeading>

const StyledHeading = styled.h2`
  margin-bottom: ${spacing("mediumWhitespace")};
`

export default SectionHeading
