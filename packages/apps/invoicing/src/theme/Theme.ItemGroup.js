import { css } from "styled-components"
import { color, registerStyle } from "@staccx/theme"
import { ItemGroup } from "@staccx/base"

export const ItemGroupWrapperStyling = registerStyle(
  {
    customerType: css`
      display: inline-block;
      border-radius: 100px;
    `
  },
  ItemGroup.themeProps.wrapper
)

export const ItemGroupStyling = registerStyle(
  {
    customerType: css`
      background-color: ${color.line};
      padding: 3px;
      margin-bottom: 0;
    `
  },
  ItemGroup.themeProps.group
)
