import { css } from "styled-components"
import { ItemGroup, theming } from "@staccx/base"

export const ItemGroupVariants = theming.createVariants(
  {
    buttons: css`
      overflow: visible;
    `
  },
  ItemGroup.themeProps.wrapper
)
