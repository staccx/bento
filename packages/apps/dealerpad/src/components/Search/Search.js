import React from "react"
import styled from "styled-components"
import { ThemeComponent, spacing } from "@staccx/theme"
import { Input, RadioButton, CheckGroup, Box } from "@staccx/base"

const Search = ({ children, classname }) => (
  <div>
    <Box variant="mainSearch">
      <IconWrapper>
        <ThemeComponent tagName={"SearchIcon"} />
      </IconWrapper>
      <Input placeholder="Søk" id="search" name="search" type="search" />
    </Box>
    <div>
      <CheckGroup group="searchFrom" variant="mainSearch">
        <RadioButton id="sadfre4w" key="key_sbhw" value="minesaker">
          Mine saker
        </RadioButton>
        <RadioButton id="asfdghfg" key="key_123wd" value="proff">
          Bedriftsinfo Proff.no
        </RadioButton>
        <RadioButton id="gfdbvc" key="key_sdklnas" value="brreg">
          Heftelser Brønnøysundregisteret
        </RadioButton>
      </CheckGroup>
    </div>
  </div>
)

const IconWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: ${spacing.tiny};
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
