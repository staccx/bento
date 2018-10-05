import styled from "styled-components"
import { theming } from "@staccx/base"

// todo: Make box component in bento
export const Grid = styled.div`
  display: grid;
  grid-auto-flow: row;
  grid-gap: ${theming.spacing.medium};
  margin-top: ${theming.spacing.medium};
`
