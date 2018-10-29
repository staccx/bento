import { css } from "styled-components"
import { LayoutItem, theming } from "@staccx/base"

export const LayoutItemStyling = theming.createVariants(
  {
    sidebar: css`
      background-color: ${theming.color.bgGray};
    `
  },
  LayoutItem.themeProps.container
)
