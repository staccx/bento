import { css } from "styled-components"
import { color, spacing, registerStyle, VARIANT_DEFAULT } from "@staccx/theme"
import {
  InputStyles,
  LabelStyles,
  SelectSelectedStyles,
  SelectStyles,
  RadioPillItemStyles,
  SelectSimpleStyles
} from "@staccx/base"

const floatingLabel = css`
  font-size: 14px;
  line-height: 1.2;
  padding-bottom: 6px;
  display: block;
  position: absolute;
  top: 12px;
  left: 24px;
`

export const InputStyling = registerStyle(
  {
    [VARIANT_DEFAULT]: css`
      display: block;
      min-height: 72px;
      border-width: 0;
      border-radius: 0;
      padding: ${spacing.medium} ${spacing.medium} 0;
      transition: border-color 0.2s ease-out;
    `,
    simple: css``,
    loanOffer: css`
      border-width: 0;
    `,
    currencyLarge: css`
      input {
        min-height: 96px;
      }
    `
  },
  InputStyles.INPUT
)

export const LabelStyling = registerStyle(
  {
    [VARIANT_DEFAULT]: floatingLabel,
    radioPill: css`
      display: block;
      padding-left: ${spacing.medium};
      padding-top: ${spacing.small};
      padding-bottom: ${spacing.small};
    `
  },
  LabelStyles.LABEL
)

export const SelectSelectedStyling = registerStyle(
  {
    loanOffer: css`
      border-color: transparent;
      padding-right: ${spacing.mediumPlus};

      &:hover,
      &:active,
      &:focus {
        background-color: transparent;
        color: ${color.primary};
        border-color: ${color.primary};

        svg {
          fill: ${color.primary};
        }
      }
    `
  },
  SelectSelectedStyles.SELECT_SELECTED
)

export const SelectIconButtonStyling = registerStyle(
  {
    loanOffer: css`
      right: 0;
    `
  },
  SelectStyles.SELECT_ICON_BUTTON
)

export const SelectOptionsWrapperStyling = registerStyle(
  {
    loanOffer: css`
      width: 100%;
      max-height: 150px;
      overflow-y: auto;
      position: absolute;
      z-index: 10;
      background-color: ${color.white};
      box-shadow: rgba(0, 0, 75, 0.015) 0px 2px 2px,
        rgba(0, 0, 75, 0.015) 0px 4px 4px, rgba(0, 0, 75, 0.015) 0px 8px 8px,
        rgba(0, 0, 75, 0.015) 0px 16px 16px, rgba(0, 0, 75, 0.015) 0px 32px 32px,
        rgba(0, 0, 75, 0.015) 0px 64px 64px;
    `
  },
  SelectStyles.SELECT_DEFAULT_OPTION_ELEMENT_WRAPPER
)

export const SelectSimpleWrapperStyling = registerStyle(
  {
    [VARIANT_DEFAULT]: css``
  },
  SelectSimpleStyles.SELECT_SIMPLE_WRAPPER
)

export const SelectSimpleSelectStyling = registerStyle(
  {
    [VARIANT_DEFAULT]: css`
      display: block;
      min-height: 72px;
      border-width: 0;
      border-radius: 0;
      padding: ${spacing.medium} ${spacing.medium} 0;
      transition: border-color 0.2s ease-out;

      & ~ label {
        font-size: 14px;
        line-height: 1.2;
        padding-bottom: 6px;
        display: block;
        position: absolute;
        top: 12px;
        left: 24px;
      }
    `
  },
  SelectSimpleStyles.SELECT_SIMPLE_SELECT
)

export const RadioPillItemStyling = registerStyle(
  {
    [VARIANT_DEFAULT]: css`
      &:first-child {
        margin-left: ${spacing.medium};
        && label {
          border-radius: 0;
          border-top-left-radius: 0;
          border-bottom-left-radius: 0;
        }
      }
      &:last-child {
        margin-right: ${spacing.medium};
        && label {
          border-radius: 0;
          border-bottom-right-radius: 0;
          border-top-right-radius: 0;
        }
      }
    `
  },
  RadioPillItemStyles.RADIO_PILL_ITEM_WRAPPER
)
