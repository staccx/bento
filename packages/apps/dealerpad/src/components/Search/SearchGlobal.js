import React from "react"
import styled from "styled-components"
import { RadioButton, CheckGroup } from "@staccx/base"
import { spacing } from "@staccx/theme"
import Search from "./Search"

const SearchGlobal = ({ children, classname }) => (
  <div>
    <Search placeholder="Søk" />
    <RadioButtonGroup>
      <CheckGroup
        group="searchFrom"
        variant="mainSearch"
        onChange={() => console.log("Implement this")}
      >
        <RadioButton
          id="sadfre4w"
          key="key_sbhw"
          value="minesaker"
          defaultChecked
          variant="search"
        >
          Mine saker
        </RadioButton>
        <RadioButton
          id="asfdghfg"
          key="key_123wd"
          value="proff"
          variant="search"
        >
          Bedriftsinfo Proff.no
        </RadioButton>
        <RadioButton
          id="gfdbvc"
          key="key_sdklnas"
          value="brreg"
          variant="search"
        >
          Heftelser Brønnøysundregisteret
        </RadioButton>
      </CheckGroup>
    </RadioButtonGroup>
  </div>
)

const RadioButtonGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: ${spacing.tiny};
`

export default SearchGlobal
