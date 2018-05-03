import React from "react"
import styled from "styled-components"
import { spacing } from "@staccx/theme"

const Pack = ({ children }) => (
  <Wrap>
    <PackElement>{children}</PackElement>
  </Wrap>
)

const Wrap = styled.div`
  overflow: hidden;
`
const PackElement = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: -${spacing.tiny};
  & > * {
    margin: ${spacing.tiny};
  }
`

export default Pack
