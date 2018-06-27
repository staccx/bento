import { css } from "styled-components"
import { spacing, color, registerStyle } from "@staccx/theme"
import { ListStyles } from "@staccx/base"

export const ListStyling = registerStyle(
  {
    documentationMenu: css`
      > li > a {
        display: block;
        margin-bottom: ${spacing.tiny};
      }
      a {
        color: ${color.text};
        text-decoration: none;
      }
    `,
    documentationSubMenu: css`
      padding-left: ${spacing.small};
      margin-bottom: ${spacing.medium};
      li {
        margin-bottom: ${spacing.small};
      }
      a {
        color: ${color.gray};
        text-decoration: none;
      }
    `
  },
  ListStyles.LIST
)
