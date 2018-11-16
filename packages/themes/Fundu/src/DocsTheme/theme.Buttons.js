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
    `
  },
  Button.themeProps.button
)
