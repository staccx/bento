import { css } from "styled-components"
import { color, registerStyle } from "@staccx/theme"
import { Text } from "@staccx/base"

export const TextStyling = registerStyle(
  {
    subtle: css`
      color: ${color.wcag};
    `
  },
  Text.themeProps.text
)
