import { css } from "styled-components"
import { Text, theming } from "@staccx/base"

export const TextStyling = theming.createVariants(
  {
    visuallyHidden: css`
      ${theming.hideVisually};
    `,
    checkMarkBlock: css`
      display: block;
      font-size: ${theming.font.normal};
      color: ${theming.color.secondary};
    `,
    legalese: css`
      font-size: ${theming.font.tiny};
      color: ${theming.color.wcag};
    `
  },
  Text.themeProps.text
)
