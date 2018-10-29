import { css } from "styled-components"
import { Text, hideVisually, theming } from "@staccx/base"

export const TextStyling = theming.createVariants(
  {
    visuallyHidden: css`
      ${hideVisually};
    `,
    legalese: css`
      color: ${theming.color.wcag};
    `
  },
  Text.themeProps.text
)
