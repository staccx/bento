import { css } from "styled-components"
import { color, registerStyle } from "@staccx/theme"
import { LayoutItem } from "@staccx/base"

export const LayoutItemStyling = registerStyle(
  {
    sidebar: css`
      background-color: ${color.bgGray};
      border-right: 1px solid ${color.line};
    `
  },
  LayoutItem.themeProps.container
)
