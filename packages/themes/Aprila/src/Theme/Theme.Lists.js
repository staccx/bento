import { css } from "styled-components"
import { List, theming } from "@staccx/base"

export const ListStyling = theming.createVariants(
  {
    menu: css`
      display: flex;
      li {
      }
    `
  },
  List.themeProps.list
)
