import { css } from "styled-components"
import { ItemGroup, theming } from "@staccx/base"

export const ItemGroupWrapperStyling = theming.createVariants(
  {
    customerType: css`
      display: inline-block;
      border-radius: 100px;
    `
  },
  ItemGroup.themeProps.wrapper
)

export const ItemGroupStyling = theming.createVariants(
  {
    customerType: css`
      background-color: ${theming.color.line};
      padding: 3px;
      margin-bottom: 0;
    `
  },
  ItemGroup.themeProps.group
)
