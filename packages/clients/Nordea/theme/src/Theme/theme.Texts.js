import { css } from "styled-components"
import { color, registerStyle } from "@staccx/theme"
import { TextStyles } from "@staccx/base"

export const TextStyling = registerStyle(
  {
    subtle: css`
      color: ${color.wcag};
    `
  },
  TextStyles.TEXT
)
