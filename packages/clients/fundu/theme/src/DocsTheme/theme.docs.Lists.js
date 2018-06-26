import { css } from "styled-components"
import { spacing, color, registerStyle } from "@staccx/theme"
import { ListStyles } from "@staccx/base"

export const ListStyling = registerStyle(
  {
    documentationMenu: css`
      a {
        color: ${color.text};
        text-decoration: none;
      }
    `,
    documentationSubMenu: css`
      padding-left: ${spacing.small};
      a {
        color: ${color.gray};
        text-decoration: none;
      }
    `
  },
  ListStyles.LIST
)
