import { css } from "styled-components"
import { ItemGroup, theming } from "@staccx/base"

export const ItemGroupStyling = theming.createVariants(
  {
    overflow: css`
      overflow: visible;
    `
  },
  ItemGroup.themeProps.wrapper
)
