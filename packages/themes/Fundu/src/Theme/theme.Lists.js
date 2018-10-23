import { css } from "styled-components"
import { List, SplitListItem, ExpandListItem, theming } from "@staccx/base"

export const ListStyling = theming.createVariants(
  {
    offerInfoList: css`
      margin-top: ${theming.spacing.tiny};
      li {
        padding: 3px 0;
      }
    `,
    documentSign: css`
      > li {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: ${theming.spacing.tiny} ${theming.spacing.medium};

        &:not(:last-child) {
          border-bottom: 1px solid ${theming.color.line};
        }
      }
    `,
    documentStatusList: css`
      background-color: ${theming.color.subtleHover};

      > li {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: ${theming.spacing.tiny} ${theming.spacing.medium};

        &:not(:first-child) {
          border-top: 1px solid ${theming.color.line};
        }
      }
    `,
    bottomBorder: css`
      border-bottom: 1px solid ${theming.color.line};
    `,
    topBorder: css`
      border-top: 1px solid ${theming.color.line};
    `
  },
  List.themeProps.list
)

export const SplitListItemStyling = theming.createVariants(
  {
    signerListItem: css`
      > * {
        flex-basis: 50%;
      }

      &:last-child {
        border-bottom: 1px solid ${theming.color.line};
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

export const ExpandListItemStyling = theming.createVariants(
  {
    signer: css`
      border-bottom: 1px solid ${theming.color.line};

      > * {
        border-top: 1px solid ${theming.color.line};
      }
    `
  },
  ExpandListItem.themeProps.listItem
)
