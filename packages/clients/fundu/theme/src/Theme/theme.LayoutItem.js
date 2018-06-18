import { css } from "styled-components"
import { color, registerStyle } from "@staccx/theme"
import { LayoutItemStyles } from "@staccx/base"

export const LayoutItemStyling = registerStyle(
  {
    sidebar: css`
      border-right: 1px solid ${color.line};
    `
  },
  LayoutItemStyles.LAYOUT_ITEM
)
