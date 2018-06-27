import { css } from "styled-components"
import { spacing, color, registerStyle } from "@staccx/theme"
import { ListStyles, SplitListItemStyles } from "@staccx/base"

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

export const SplitListItemStyling = registerStyle(
  {
    documentationMethodListItem: css`
      align-items: flex-start;

      > * {
        &:first-child {
          width: 180px;
          display: block;
          text-align: right;
        }
      }
    `
  },
  SplitListItemStyles.SPLIT_LIST
)
