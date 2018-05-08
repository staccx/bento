import { css } from "styled-components"
import { registerStyle, color, font, targetSize } from "@staccx/theme"
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
        color: ${p => lighten(0.05, color("primary")(p))};

        svg {
          fill: ${color.secondary};
        }
      }

      svg {
        display: block;
        margin: 0 auto;
      }
    `,
    accountInfo: css`
      border: 2px solid ${color.secondary};
      color: ${color.secondary};
      position: absolute;
      top: 0;
      right: -64px;
      background-color: transparent;
      width: ${targetSize.normal};
      height: ${targetSize.normal};
      line-height: ${targetSize.normal};
      border-radius: 50%;
      padding: 0;
    `
  },
  ButtonStyles.BUTTON
)
