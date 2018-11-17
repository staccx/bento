import { css } from "styled-components"
import { ItemGroup, theming } from "@staccx/base"

export const ItemGroupStyling = theming.createVariants(
  {
    overflow: css`
      /* overflow: visible; */
    `,
    forward: css`
      button {
        margin-right: calc(${theming.spacing.medium} + 12px);
      }
    `
  },
  ItemGroup.themeProps.wrapper
)

export const ItemGroupElementStyling = theming.createVariants(
  {
    [theming.VARIANT_DEFAULT]: css``,
    forward: css``
  },
  ItemGroup.themeProps.group
)
