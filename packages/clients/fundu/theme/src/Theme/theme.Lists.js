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
    split5050: css`
      > * {
        flex-basis: 50%;
      }
    `
  },
  ListStyles.LIST
)

export const SplitListItemStyling = registerStyle(
  {
    split5050: css`
      > * {
        flex-basis: 50%;
      }
    `
  },
  SplitListItemStyles.SPLIT_LIST
)
