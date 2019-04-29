import { css } from "styled-components"
import { ItemGroup, theming } from "@staccx/base"

export const ItemGroupStyling = theming.createVariants(
  {
    caseTabs: css`
      justify-content: space-between;
    `
  },
  ItemGroup.themeProps.group
)

export const ItemGroupWrapperStyling = theming.createVariants(
  {
    caseTabs: css`
      padding-top: ${theming.spacing.medium};
      margin-bottom: -${theming.spacing.large};

      @media screen and (min-width: 490px) {
        display: none;
      }
    `
  },
  ItemGroup.themeProps.wrapper
)
