import React from "react"
import styled from "styled-components"
import { spacing, font, color } from "@staccx/theme"

const SectionHeading = ({ children }) => (
  <StyledHeading>{children}</StyledHeading>
)

const StyledHeading = styled.h2`
  /* margin-bottom: ${spacing("mediumWhitespace")}; */
  font-size: ${font("hugePlus")};
  color: ${color("secondary")};
  text-align: center;
  margin-bottom: ${spacing("huge")};
`

export default SectionHeading
