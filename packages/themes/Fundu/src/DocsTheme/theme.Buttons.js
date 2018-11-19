import { css } from "styled-components"
import { Button, theming } from "@staccx/base"
import { defaultButton } from "../Theme/theme.Buttons"

export const ButtonDevStyling = theming.createVariants(
  {
    devLogin: css`
      ${defaultButton};
      background-color: white;
      color: ${theming.color.primary};
      font-size: ${theming.font.base};
      margin-left: ${theming.spacing.small};
      margin-right: ${theming.spacing.small};
    `,
    deleteClient: css`
      font-size: ${theming.font.base};
      background-color: transparent;
      color: ${theming.color.primary};
      position: absolute;
      top: ${theming.spacing.medium};
      right: ${theming.spacing.medium};
      padding-left: 0;
      padding-right: 0;
      &:hover,
      &:focus,
      &:active {
        background-color: transparent;
        color: ${theming.color.warning};
      }
    `,
    positive: css`
      background-color: ${theming.color("secondary")};
      &:hover,
      &:focus,
      &:active {
        background-color: ${theming.color("green")};
      }
    `,
    negative: css`
      background-color: ${theming.color("warning")};
      &:hover,
      &:focus,
      &:active {
        background-color: ${theming.color("red")};
      }
    `
  },
  Button.themeProps.button
)
