import { css } from "styled-components"
import { registerStyle } from "@staccx/theme"
import { Layout, LayoutItem } from "@staccx/base"

export const LayoutStyling = registerStyle(
  {
    bibMainLayout: css`
      min-height: 100vh;
      grid-template-columns: 1fr;
      grid-template-rows: auto 1fr auto;
      grid-template-areas:
        "logo"
        "main"
        "footer";
      grid-auto-flow: column;
    `
  },
  Layout.themeProps.container
)

export const LayoutItemStyling = registerStyle(
  {
    statsSelect: css``
  },
  LayoutItem.themeProps.container
)
