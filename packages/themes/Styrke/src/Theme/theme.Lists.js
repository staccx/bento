import { css } from "styled-components"
import { List, SplitListItem, ExpandListItem, theming } from "@staccx/base"

export const ListStyling = theming.createVariants(
  {
    offerInfoList: css`
      font-size: ${theming.font.input};
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
        background-color: ${theming.color.bgGray};
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

      &:not(:first-child) {
        border-top: 1px solid ${theming.color.line};
      }

      & > * {
        flex-basis: 50%;
      }
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
    [theming.VARIANT_DEFAULT]: css``,
    signer: css`
      position: relative;

      & > button::after {
        content: "";
        background-color: ${theming.color.bgGray};
        display: block;
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        opacity: 0;
        transform: scaleY(0);
        transition: opacity 500ms ease, transform 0ms 200ms;
        z-index: -1;
      }

      & > button:focus::after {
        opacity: 1;
        transform: scaleY(1);
        transition: transform 200ms ease;
      }

      border-bottom: 1px solid
        ${p => (p.isExpanded ? "transparent" : theming.color("line")(p))};

      > button {
        padding-left: 0;
        padding-right: ${theming.spacing.mediumPlus};
      }

      span + span {
        color: ${theming.color.primary};
      }
    `
  },
  ExpandListItem.themeProps.listItem
)
