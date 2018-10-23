import { css } from "styled-components"
import { LayoutItem, theming } from "@staccx/base"

export const LayoutItemStyling = theming.createVariants(
  {
    sidebar: css`
      background-color: ${theming.color.bgGray};
      border-right: 1px solid ${theming.color.line};
    `,
    styleguidePreview: css`
      padding: 0;
      background-color: ${theming.mapProp(
        "tab",
        {
          Example: theming.color("white"),
          Variants: theming.color("white")
        },
        theming.color("codeBackground")
      )};
    `
  },
  LayoutItem.themeProps.container
)
