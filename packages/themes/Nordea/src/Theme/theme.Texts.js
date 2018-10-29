import { css } from "styled-components"
import { Text, fontSmoothing, theming } from "@staccx/base"

export const TextStyling = theming.createVariants(
  {
    subtle: css`
      color: ${theming.color.wcag};
    `,
    inputSize: css`
      font-size: ${theming.font.input};
      line-height: 1.4;
      color: ${theming.color("g4")};
      ${fontSmoothing};
    `,
    legalese: css`
      font-size: ${theming.font.tiny};
    `,
    contactText: css`
      font-size: ${theming.font.small};
      line-height: 1.4;
      color: ${theming.color("g4")};
      ${fontSmoothing};
    `
  },
  Text.themeProps.text
)
