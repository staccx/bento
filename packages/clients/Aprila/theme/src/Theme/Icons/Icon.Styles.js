import styled from "styled-components"
import { theming } from "@staccx/base"

export const Outer = styled.div`
  display: flex;
  align-items: center;
  width: 80px;
  height: 80px;
  margin: 0 auto ${theming.spacing.small};
  padding: ${theming.spacing.medium};
  border-radius: 50%;
  background-color: currentColor;
  transition: background 0.2s ease;

  @media screen and (max-width: 1010px) {
    width: 36px;
    height: 36px;
    padding: ${theming.spacing.small};
  }
`

export const Icon = styled.svg`
  width: 36px;
  height: 36px;
  fill: ${theming.color.white};
  vertical-align: middle;

  @media screen and (max-width: 1010px) {
    width: 24px;
    height: 24px;
  }
`
