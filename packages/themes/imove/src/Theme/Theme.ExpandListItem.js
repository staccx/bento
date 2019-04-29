import { css } from "styled-components"
import { ExpandListItem, theming } from "@staccx/base"

export const ExpandButton = theming.createVariants(
  {
    [theming.VARIANT_DEFAULT]: css`
      padding: ${theming.spacing.small} 0;
      font-size: ${theming.font("small")};
      font-weight: ${theming.fontWeight.bold};
      color: ${theming.color.primary};

      :focus,
      :hover {
        color: ${theming.color.secondary};

        > svg {
          fill: ${theming.color.secondary} !important;
        }
      }
    `
  },
  ExpandListItem.themeProps.listButton
)

export const ExpandIcon = theming.createVariants(
  {
    [theming.VARIANT_DEFAULT]: css`
      right: 0;
      fill: ${theming.color.primary};
    `
  },
  ExpandListItem.themeProps.listIcon
)

export const ExpandedItem = theming.createVariants(
  {
    [theming.VARIANT_DEFAULT]: css`
      padding: 0;
    `
  },
  ExpandListItem.themeProps.expandedItem
)
