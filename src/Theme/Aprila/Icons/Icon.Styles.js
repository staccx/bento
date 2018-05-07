import styled from "styled-components"
import { color, spacing } from "@staccx/theme"

export const Outer = styled.div`
  display: flex;
  align-items: center;
  width: 80px;
  height: 80px;
  margin: 0 auto ${spacing.small};
  padding: ${spacing.medium};
  border-radius: 50%;
  background-color: ${color.primary};

  @media screen and (max-width: 1010px) {
    width: 36px;
    height: 36px;
    padding: ${spacing.small};
  }
`

export const Icon = styled.svg`
  width: 36px;
  height: 36px;
  fill: ${color.white};
  vertical-align: middle;

  @media screen and (max-width: 1010px) {
    width: 24px;
    height: 24px;
  }
`
