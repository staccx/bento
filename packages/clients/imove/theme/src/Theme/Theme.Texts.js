import { css } from "styled-components"
import { color, font, registerStyle } from "@staccx/theme"
import { Text, hideVisually } from "@staccx/base"

export const TextStyling = registerStyle(
  {
    visuallyHidden: css`
      ${hideVisually};
    `,
    checkMarkBlock: css`
      display: block;
      font-size: ${font.normal};
      color: ${color.wcag};
    `
  },
  Text.themeProps.text
)
