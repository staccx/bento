import React from "react"
import styled from "styled-components"
import { ThemeComponent, spacing } from "@staccx/theme"
import { Input, Box } from "@staccx/base"

const Search = ({ children, classname }) => (
  <Box variant="mainSearch">
    <IconWrapper>
      <ThemeComponent tagName={"SearchIcon"} />
    </IconWrapper>
    <Input
      placeholder="Søk"
      id="search"
      name="search"
      type="search"
      variant="search"
    />
  </Box>
)

const IconWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: ${spacing.small};
  z-index: 5;
  transform: translateY(-50%);
  pointer-events: none;

  svg {
    display: block;
    width: ${spacing.medium};
    height: ${spacing.medium};
  }
`

export default Search
