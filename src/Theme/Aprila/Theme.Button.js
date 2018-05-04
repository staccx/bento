import { css } from "styled-components"
import { registerStyle, color, font } from "@staccx/theme"
import { ButtonStyles } from "@staccx/base"
import { lighten } from "polished"

export default registerStyle(
  {
    secondary: css`
      background-color: ${color.secondary};
      color: ${color.primary};
      &:hover,
      &:focus,
      &:active {
        background-color: ${p => lighten(0.2, color("secondary")(p))};
        color: ${color.primary};
      }
    `,
    expand: css`
      display: block;
      width: 100%;
      margin: 0;
      background-color: transparent;
      color: ${color.secondary};

      &:hover,
      &:focus,
      &:active {
        background-color: transparent;
        color: ${color.text};
      }
    `,
    menuItem: css`
      padding: 0;
      background-color: transparent;
      width: 100%;
      text-align: center;
      color: ${color.primary};
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
