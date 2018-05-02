import { css } from "styled-components"
import { registerStyle, color } from "@staccx/theme"
import { BoxStyles } from "@staccx/base"

export const ModalLeft = registerStyle(
  css`
    background-color: ${color.primary};
    color: ${color.white};
    text-align: center;
  `,
  BoxStyles.BOX,
  "modalLeft"
)

export const ModalRight = registerStyle(
  css`
    background-color: ${color.white};
    text-align: center;
  `,
  BoxStyles.BOX,
  "modalRight"
)

export const ModalLeftButton = registerStyle(
  css`
    background-color: ${color.white};
    color: ${color.primary};
  `,
  BoxStyles.BOX,
  "modalLeftButton"
)
