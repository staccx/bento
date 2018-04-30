import styled from "styled-components"
import { spacing } from "@staccx/theme"

// todo: Make box component in bento
export const Grid = styled.div`
  display: grid;
  grid-auto-flow: row;
  grid-gap: ${spacing.medium};
  margin-top: ${spacing.medium};
`
