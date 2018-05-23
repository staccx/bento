import { css } from "styled-components"
import { registerStyle, color } from "@staccx/theme"
import { ButtonStyles } from "@staccx/base"

export const ButtonStyling = registerStyle(
  {
    delete: css`
      align-self: flex-end;
      background-color: transparent;
      color: ${color.primary};
    `
  },
  ButtonStyles.BUTTON
)
