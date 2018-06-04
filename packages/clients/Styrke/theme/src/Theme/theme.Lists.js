import { css } from "styled-components"
import { spacing, color, registerStyle } from "@staccx/theme"
import {
  ListStyles,
  SplitListItemStyles,
  ExpandListItemStyles
} from "@staccx/base"

export const ListStyling = registerStyle(
  {
    offerInfoList: css`
      margin-top: ${spacing.tiny};
      li {
        padding: 3px 0;
      }
    `,
    documentSign: css`
      margin-bottom: ${spacing.medium};

      > li {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: ${spacing.small};
        background-color: ${color("bgBlue")};
        margin-bottom: 3px;

        &::not(:first-child) {
          border-top: 1px solid ${color.line};
          padding-top: ${spacing.small};
        }
      }
    `,
    documentStatusList: css`
      > li {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: ${spacing.small} ${spacing.medium};
        background-color: ${color.bgGray};
        margin-bottom: 3px;
      }
    `,
    bottomBorder: css`
      border-bottom: 1px solid ${color.line};
    `,
    topBorder: css`
      border-top: 1px solid ${color.line};
    `
  },
  ListStyles.LIST
)

export const SplitListItemStyling = registerStyle(
  {
    signerListItem: css`
      padding-left: 0;
      padding-right: 0;
      border-width: 0;

      > * {
        flex-basis: 50%;
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
  SplitListItemStyles.SPLIT_LIST
)

export const ExpandListItemStyling = registerStyle(
  {
    signer: css`
      border-bottom: 1px solid
        ${p => (p.isExpanded ? "transparent" : color("line")(p))};

      > button {
        padding-left: 0;
        padding-right: ${spacing.mediumPlus};
      }
    `
  },
  ExpandListItemStyles.EXPAND_LIST_ITEM
)
