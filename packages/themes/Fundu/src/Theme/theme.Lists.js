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
        padding: ${theming.spacing.small} 0;

        &:not(:last-child) {
          border-bottom: 1px solid ${theming.color.primary};
        }
      }
    `,
    documentStatusList: css`
      padding-top: ${theming.spacing.small};
      padding-bottom: ${theming.spacing.medium};

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
    `,
    tileListItem: css`
      margin-left: -${theming.spacing.medium};
      margin-right: -${theming.spacing.medium};
      padding: ${theming.spacing.medium} ${theming.spacing.medium};
    `
  },
  SplitListItem.themeProps.listItem
)

export const ExpandListItemStyling = theming.createVariants(
  {
    signer: css`
      border-bottom: 2px solid ${theming.color.primary};
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
