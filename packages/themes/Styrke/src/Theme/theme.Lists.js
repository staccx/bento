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
      margin-bottom: ${theming.spacing.medium};

      > li {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: ${theming.spacing.small};
        background-color: ${theming.color("bgBlue")};
        margin-bottom: 3px;

        &::not(:first-child) {
          border-top: 1px solid ${theming.color.line};
          padding-top: ${theming.spacing.small};
        }
      }
    `,
    documentStatusList: css`
      > li {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: ${theming.spacing.small} ${theming.spacing.medium};
        background-color: ${theming.color.bgGray};
        margin-bottom: 3px;
      }
    `,
    bottomBorder: css`
      border-bottom: 1px solid ${theming.color.line};
    `,
    topBorder: css`
      border-top: 1px solid ${theming.color.line};
    `,
    bullet: css`
      list-style-type: disc;
      padding-left: 1.5rem;

      > li {
        margin-bottom: ${theming.spacing.tiny};
      }
    `
  },
  List.themeProps.list
)

export const SplitListItemStyling = theming.createVariants(
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
    `,
    flush: css`
      padding-left: 0;
      padding-right: 0;
    `
  },
  SplitListItem.themeProps.listItem
)

export const ExpandListItemStyling = theming.createVariants(
  {
    signer: css`
      border-bottom: 1px solid
        ${p => (p.isExpanded ? "transparent" : theming.color("line")(p))};

      > button {
        padding-left: 0;
        padding-right: ${theming.spacing.mediumPlus};
      }
    `
  },
  ExpandListItem.themeProps.listItem
)
