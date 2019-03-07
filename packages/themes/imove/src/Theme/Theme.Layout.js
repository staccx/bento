import { css } from "styled-components"
import { Layout, theming } from "@staccx/base"

export const LayoutStyling = theming.createVariants(
  {
    verticalAlign: css`
      display: flex;
      align-items: center;
      height: 100vh;
      > * {
        width: 100%;
      }
    `,
    bottomButtons: css`
      padding-top: ${theming.spacing.large};
    `
  },
  Layout.themeProps.container
)
