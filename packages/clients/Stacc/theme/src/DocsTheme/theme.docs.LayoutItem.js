import { css } from "styled-components"
import { color, registerStyle, mapProp } from "@staccx/theme"
import { LayoutItem } from "@staccx/base"

export const LayoutItemStyling = registerStyle(
  {
    sidebar: css`
      background-color: ${color.bgGray};
      border-right: 1px solid ${color.line};
    `,
    styleguidePreview: css`
      padding: 0;
      background-color: ${mapProp(
        "tab",
        {
          Example: color("white"),
          Variants: color("white")
        },
        color("codeBackground")
      )};
    `
  },
  LayoutItem.themeProps.container
)
