import { css } from "styled-components"
import { Layout, theming } from "@staccx/base"

export const LayoutVariants = theming.createVariants(
  {
    page: css`
      grid-template-columns:
        minmax(${theming.spacing.medium}, 1fr) minmax(
          272px,
          ${theming.wrapper.medium}
        )
        minmax(${theming.spacing.medium}, 1fr);
      grid-template-areas: ".  main  .";
    `
  },
  Layout.themeProps.container
)
