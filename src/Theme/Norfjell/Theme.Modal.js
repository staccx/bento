import { css } from "styled-components"
import { registerStyle, color } from "@staccx/theme"
import { ButtonStyles } from "@staccx/base"

export const ModalLeftButton = registerStyle(
  {
    modalLeftButton: css`
      background-color: ${color.white};
      color: ${color.primary};
    `
  },
  ButtonStyles.BUTTON
)
