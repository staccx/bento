import { css } from "styled-components"
import { List, SplitListItem, theming } from "@staccx/base"

export const ListStyling = theming.createVariants(
  {
    documentationMenu: css`
      > li > a {
        display: block;
        margin-bottom: ${theming.spacing.tiny};
      }
      a {
        color: ${theming.color.text};
        text-decoration: none;
      }
    `,
    documentationSubMenu: css`
      padding-left: ${theming.spacing.small};
      margin-bottom: ${theming.spacing.medium};
      li {
        margin-bottom: ${theming.spacing.small};
      }
      a {
        color: ${theming.color.gray};
        text-decoration: none;
      }
    `
  },
  List.themeProps.list
)

export const SplitListItemStyling = theming.createVariants(
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
  SplitListItem.themeProps.listItem
)
