import { css } from "styled-components"
import { registerStyle, color, spacing, font } from "@staccx/theme"
import { ButtonStyles } from "@staccx/base"

export default registerStyle(
  {
    menuItem: css`
      padding-left: ${spacing.small};
      background-color: transparent;
      width: 100%;
      text-align: center;
      color: ${color.secondary};
      font-size: ${font.h4};
      border-radius: 0;

      &:hover,
      &:focus,
      &:active {
        background-color: transparent;
        color: ${color.text};
      }

      svg {
        display: block;
        margin: 0 auto;
      }
    `
  },
  ButtonStyles.BUTTON
)
