import { css } from "styled-components"
import { color, font, fontWeight, registerStyle } from "@staccx/theme"
import { Text, hideVisually } from "@staccx/base"

export const TextStyling = registerStyle(
  {
    visuallyHidden: css`
      ${hideVisually};
    `,
    legalese: css`
      display: block;
      font-size: ${font.tiny};
      color: ${color.wcag};
      text-align: center;
    `,
    creditExplainer: css`
      display: block;
      font-weight: ${fontWeight.bold};
      color: ${color.text};
      text-align: center;
    `
  },
  Text.themeProps.text
)
