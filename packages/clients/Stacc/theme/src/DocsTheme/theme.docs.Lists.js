import { css } from "styled-components"
import { List, SplitListItem, theming } from "@staccx/base"

export const ListStyling = theming.createVariants(
  {
    documentationMenu: css`
      li > ul {
        padding-left: ${theming.spacing.tiny};
        margin-bottom: ${theming.spacing.small};
        border-left: 1px solid ${theming.color.line};
      }
      > li > a {
        display: block;
        margin-bottom: ${theming.spacing.tiny};
      }
      a {
        color: ${theming.color.text};
        text-decoration: none;
        &:hover,
        &:active,
        &:focus {
          color: ${theming.color.primary};
          text-decoration: underline;
        }
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
