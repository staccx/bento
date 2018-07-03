import { css } from "styled-components"
import { spacing, color, registerStyle } from "@staccx/theme"
import { List, SplitListItem, ExpandListItem } from "@staccx/base"

export const ListStyling = registerStyle(
  {
    offerInfoList: css`
      margin-top: ${spacing.tiny};
      li {
        padding: 3px 0;
      }
    `,
    documentSign: css`
      > li {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: ${spacing.tiny} ${spacing.medium};

        &:not(:last-child) {
          border-bottom: 1px solid ${color.line};
        }
      }
    `,
    documentStatusList: css`
      background-color: ${color.subtleHover};

      > li {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: ${spacing.tiny} ${spacing.medium};

        &:not(:first-child) {
          border-top: 1px solid ${color.line};
        }
      }
    `,
    bottomBorder: css`
      border-bottom: 1px solid ${color.line};
    `,
    topBorder: css`
      border-top: 1px solid ${color.line};
    `
  },
  List.themeProps.list
)

export const SplitListItemStyling = registerStyle(
  {
    signerListItem: css`
      > * {
        flex-basis: 50%;
      }

      &:last-child {
        border-bottom: 1px solid ${color.line};
      }

      ${p =>
        p.hasInput &&
        `
        flex-wrap: wrap;
        padding: 0;
        > * {
          flex-basis: 100%;
        }
      `};
    `
  },
  SplitListItem.themeProps.listItem
)

export const ExpandListItemStyling = registerStyle(
  {
    signer: css`
      border-bottom: 1px solid ${color.line};

      > * {
        border-top: 1px solid ${color.line};
      }
    `
  },
  ExpandListItem.themeProps.listItem
)
