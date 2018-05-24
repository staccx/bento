import { css } from "styled-components"
import { spacing, color, registerStyle } from "@staccx/theme"
import { ListStyles, SplitListItemStyles } from "@staccx/base"

export const ListStyling = registerStyle(
  {
    offerInfoList: css`
      margin-top: ${spacing.tiny};
      li {
        padding: 3px 0;
      }
    `,
    documentStatusList: css`
      background-color: ${color.subtleHover};
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
  SplitListItemStyles.SPLIT_LIST
)
