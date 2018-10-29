import { css } from "styled-components"
import { Text, theming } from "@staccx/base"

export const TextStyling = theming.createVariants(
  {
    subtle: css`
      color: ${theming.color.wcag};
    `,
    inputSize: css`
      font-size: ${theming.font.input};
      line-height: 1.4;
      color: ${theming.color("g4")};
      ${theming.fontSmoothing};
    `,
    legalese: css`
      font-size: ${theming.font.tiny};
    `
  },
  Text.themeProps.text
)
