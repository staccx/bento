import { css } from "styled-components"
import { Text, hideVisually, theming } from "@staccx/base"

export const TextStyling = theming.createVariants(
  {
    visuallyHidden: css`
      ${hideVisually};
    `,
    legalese: css`
      display: block;
      font-size: ${theming.font.tiny};
      color: ${theming.color.wcag};
      text-align: center;
    `,
    creditExplainer: css`
      display: block;
      font-weight: ${theming.fontWeight.bold};
      color: ${theming.color.text};
      text-align: center;
    `
  },
  Text.themeProps.text
)
