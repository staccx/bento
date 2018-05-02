import { css } from "styled-components"
import { registerStyle, color } from "@staccx/theme"
import { BoxStyles, ButtonStyles } from "@staccx/base"

export const ModalStyles = registerStyle(
  {
    modalLeft: css`
      background-color: ${color.primary};
      color: ${color.white};
      text-align: center;
    `,
    modalRight: css`
      background-color: ${color.white};
      text-align: center;
    `
  },
  BoxStyles.BOX
)

export const ModalLeftButton = registerStyle(
  {
    modalLeftButton: css`
      background-color: ${color.white};
      color: ${color.primary};
    `
  },
  ButtonStyles.BUTTON
)
