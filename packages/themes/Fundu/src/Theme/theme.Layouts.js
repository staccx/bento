import { css } from "styled-components"
import { Layout, theming } from "@staccx/base"

export const LayoutStyling = theming.createVariants(
  {
    formElements: css``,
    columns: css`
      grid-auto-flow: column;
      justify-content: start;
    `,
    center: css`
      text-align: center;
    `
  },
  Layout.themeProps.container
)
