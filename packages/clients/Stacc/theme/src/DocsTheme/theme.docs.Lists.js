import { css } from "styled-components"
import { spacing, color, registerStyle } from "@staccx/theme"
import { List, SplitListItem } from "@staccx/base"

export const ListStyling = registerStyle(
  {
    documentationMenu: css`
      li > ul {
        padding-left: ${spacing.tiny};
        margin-bottom: ${spacing.small};
        border-left: 1px solid ${color.line};
      }
      > li > a {
        display: block;
        margin-bottom: ${spacing.tiny};
      }
      a {
        color: ${color.text};
        text-decoration: none;
        &:hover,
        &:active,
        &:focus {
          color: ${color.primary};
          text-decoration: underline;
        }
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
  List.themeProps.list
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
  SplitListItem.themeProps.listItem
)
