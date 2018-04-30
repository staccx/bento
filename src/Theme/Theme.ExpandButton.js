import { css } from "styled-components"
import { registerStyle, color } from "@staccx/theme"
import { ButtonStyles } from "@staccx/base"

export default registerStyle(
  css`
    display: block;
    background-color: transparent;
    width: 100%;
    color: ${color.primary};

    &:hover,
    &:focus,
    &:active {
      background-color: transparent;
      color: ${color.text};
    }
  `,
  ButtonStyles.BUTTON,
  "expand"
)
