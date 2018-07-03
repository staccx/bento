import { css } from "styled-components"
import { color, registerStyle } from "@staccx/theme"
import { Text, hideVisually } from "@staccx/base"

export const TextStyling = registerStyle(
  {
    visuallyHidden: css`
      ${hideVisually};
    `,
    legalese: css`
      color: ${color.wcag};
    `
  },
  Text.themeProps.text
)
