import { css } from "styled-components"
import { registerStyle, color } from "@staccx/theme"
import { List } from "@staccx/base"

export const ListStyling = registerStyle(
  {
    details: css`
      border-top: 1px solid ${color.secondary};
      color: ${color.secondary};

      > li {
        border-bottom: 1px solid ${color.secondary};
      }
    `
  },
  List.themeProps.list
)
