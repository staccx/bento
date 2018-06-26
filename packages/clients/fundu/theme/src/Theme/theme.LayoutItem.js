import { css } from "styled-components"
import { color, registerStyle } from "@staccx/theme"
import { LayoutItemStyles } from "@staccx/base"

export const LayoutItemStyling = registerStyle(
  {
    sidebar: css`
      background-color: ${color.bgGray};
    `
  },
  LayoutItemStyles.LAYOUT_ITEM
)
