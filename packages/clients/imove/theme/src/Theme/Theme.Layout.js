import { css } from "styled-components"
import { registerStyle } from "@staccx/theme"
import { Layout } from "@staccx/base"

export const LayoutStyling = registerStyle(
  {
    verticalAlign: css`
      display: flex;
      align-items: center;
      height: 100vh;
      > * {
        width: 100%;
      }
    `
  },
  Layout.themeProps.container
)
