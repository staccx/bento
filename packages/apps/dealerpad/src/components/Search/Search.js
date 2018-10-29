import React from "react"
import styled from "styled-components"
import { Input, Box, ThemeComponent, theming } from "@staccx/base"

const Search = ({ placeholder }) => (
  <Box variant="mainSearch">
    <IconWrapper>
      <ThemeComponent tagName={"SearchIcon"} />
    </IconWrapper>
    <Input
      placeholder={placeholder}
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
  left: ${theming.spacing.small};
  z-index: 5;
  transform: translateY(-50%);
  pointer-events: none;

  svg {
    display: block;
    width: ${theming.spacing.medium};
    height: ${theming.spacing.medium};
  }
`

export default Search
