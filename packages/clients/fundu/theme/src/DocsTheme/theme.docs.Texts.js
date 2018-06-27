import { css } from "styled-components"
import { color, registerStyle } from "@staccx/theme"
import { TextStyles } from "@staccx/base"

export const TextStyling = registerStyle(
  {
    documentationInline: css`
      display: inline-block;
      color: ${color.primary};
      border: 1px solid ${color.primary};
      padding: 0 2px;
      background-color: ${color.bgGray};
      border-radius: 3px;
      line-height: 1.4;
    `,
    documentationMethodValidtionText: css`
      display: block;
    `
  },
  TextStyles.TEXT
)
