import { css } from "styled-components"
import {
  registerStyle,
  VARIANT_DEFAULT,
  color,
  targetSize,
  spacing,
  fontWeight
} from "@staccx/theme"
import { Button } from "@staccx/base"

const baseStyling = css`
  border-radius: ${targetSize.normal};
  background-color: ${color("b5")};
  &:hover,
  &:focus,
  &:active {
    background-color: ${color("text")};
  }
`

export const ButtonStyling = registerStyle(
  {
    [VARIANT_DEFAULT]: css`
      ${baseStyling};
    `,
    chat: css`
      ${baseStyling};
      position: absolute;
      right: 0;
      bottom: 0;
      min-height: ${targetSize.small};
      right: ${spacing.tiny};
      bottom: 8px;
      min-height: ${spacing.mediumPlus};
      padding: 0 ${spacing.small};
    `,
    icon: css`
      background: transparent;
      padding-left: ${spacing.tiny};
      padding-right: ${spacing.tiny};
      color: ${color.primary};
      font-weight: ${fontWeight.normal};
      svg {
        fill: ${color("g2")};
      }
      &:hover,
      &:focus,
      &:active {
        background: transparent;
        color: ${color.primary};
        svg {
          fill: ${color("g3")};
        }
      }
    `,
    subtle: css`
      border-radius: ${targetSize.normal};
      padding: 0 ${spacing.small};
      min-height: ${spacing.medium};
      background-color: transparent;
      color: ${color("b4")};
      &:hover,
      &:focus,
      &:active {
        color: ${color("b4")};
        background-color: ${color("bg")};
      }
    `,
    back: css`
      display: flex;
      align-items: center;
      background-color: transparent;
      color: ${color("b4")};
      padding: 0;
      min-height: ${spacing.medium};

      svg {
        margin-right: ${spacing.tiny};
      }
      &:hover,
      &:active,
      &:focus {
        color: ${color("text")};
        color: ${color("b4")};
        background-color: transparent;
        text-decoration: underline;
      }
    `
  },
  Button.themeProps.button
)
