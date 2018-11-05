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
        padding: ${theming.spacing.tiny} 0;

        &:not(:last-child) {
          border-bottom: 1px solid ${theming.color.line};
        }
      }
    `,
    documentStatusList: css`
      padding-top: ${theming.spacing.medium};
      padding-bottom: ${theming.spacing.medium};
      background-color: ${theming.color.bgGray};

      > li {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: ${theming.spacing.tiny} ${theming.spacing.medium};
      }

      @media (max-width: 450px) {
        margin-left: -${theming.spacing.medium};
        margin-right: -${theming.spacing.medium};
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
    `
  },
  SplitListItem.themeProps.listItem
)

export const ExpandListItemStyling = theming.createVariants(
  {
    signer: css`
      border-bottom: 2px solid ${theming.color.primary};
      > button {
        padding-left: 0;
      }

      > * {
        border-top: 2px solid ${theming.color.primary};
      }
    `
  },
  ExpandListItem.themeProps.listItem
)
