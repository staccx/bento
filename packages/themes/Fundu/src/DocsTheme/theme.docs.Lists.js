import { css } from "styled-components"
import { List, SplitListItem, theming } from "@staccx/base"

export const ListStyling = theming.createVariants(
  {
    documentationMenu: css`
      a {
        color: ${theming.color.text};
        text-decoration: none;
        display: block;
      }
      > li {
        margin-bottom: ${theming.spacing.medium};
      }
    `,
    documentationSubMenu: css`
      padding-left: ${theming.spacing.small};
      border-left: 1px solid ${theming.color("devportalLine")};
      a {
        color: ${theming.color.gray};
        text-decoration: none;
        display: block;
        padding-top: ${theming.spacing.tiny};
        padding-bottom: ${theming.spacing.tiny};
        &:hover,
        &:focus,
        &:active {
          text-decoration: underline;
          color: ${theming.color.primary};
        }
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
