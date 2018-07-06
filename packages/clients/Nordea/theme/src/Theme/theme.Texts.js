import { css } from "styled-components"
import { color, registerStyle, font } from "@staccx/theme"
import { Text, fontSmoothing } from "@staccx/base"

export const TextStyling = registerStyle(
  {
    subtle: css`
      color: ${color.wcag};
    `,
    inputSize: css`
      font-size: ${font.input};
      line-height: 1.4;
      color: ${color("g4")};
      ${fontSmoothing};
    `,
    legalese: css`
      font-size: ${font.tiny};
    `
  },
  Text.themeProps.text
)
