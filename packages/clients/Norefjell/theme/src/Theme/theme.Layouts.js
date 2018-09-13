import { css } from "styled-components"
import { registerStyle } from "@staccx/theme"
import { Layout, LayoutItem } from "@staccx/base"
import { FadeIn } from "@staccx/animations"

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
    fadeIn: css`
      opacity: 0;
      animation: ${FadeIn} forwards ease-out 400ms 1;
      animation-delay: ${p => (p.delay ? p.delay : 0)}ms;
    `
  },
  LayoutItem.themeProps.container
)
