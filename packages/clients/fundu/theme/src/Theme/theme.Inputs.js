import { css } from "styled-components"
import {
  color,
  spacing,
  registerStyle,
  targetSize,
  VARIANT_DEFAULT
} from "@staccx/theme"
import {
  InputStyles,
  LabelStyles,
  SelectStyles,
  RadioPillItemStyles,
  SelectSimpleStyles,
  SliderKeyboardInputStyles,
  CompanyInputStyles
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
    loanDuration: css`
      padding: 0;
    `,
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
    [VARIANT_DEFAULT]: css`
      border-color: transparent;
    `,
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
  SelectStyles.SELECTED_WRAPPER
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
export const SliderKeyboardWrapperStyling = registerStyle(
  {
    [VARIANT_DEFAULT]: css`
      max-width: 360px;
      margin: 0 auto;

      label {
        display: block;
        position: relative;
        text-align: center;
        top: auto;
        left: auto;
      }
    `
  },
  SliderKeyboardInputStyles.SLIDER_KEYBOARD_WRAPPER
)

export const SliderInputStyling = registerStyle(
  {
    [VARIANT_DEFAULT]: css`
      input[type="text"] {
        min-width: 240px;
        max-width: 100%;
        min-height: ${targetSize.normal};
        margin-bottom: 24px;
        border-width: 0;
        border-bottom: 1px dashed ${color.line};
        padding: ${spacing.small} 0;
        background-color: transparent;
        text-align: center;
        font-size: 40px;
        outline: none;
        -moz-appearance: textfield;

        &::-webkit-inner-spin-button,
        &::-webkit-outer-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }

        &:hover,
        &:active,
        &:focus,
        &:-moz-ui-invalid,
        &:invalid {
          outline: none;
          box-shadow: none;
        }

        &:disabled {
          color: ${color.text};
        }
      }
    `
  },
  SliderKeyboardInputStyles.SLIDER_KEYBOARD_INPUT
)

export const CompanyInputLoadFromStyling = registerStyle(
  {
    [VARIANT_DEFAULT]: css`
      background-color: ${color("subtleHover")};
    `
  },
  CompanyInputStyles.COMPANY_INPUT_LOAD_FROM
)

export const CompanyInputLoadToStyling = registerStyle(
  {
    [VARIANT_DEFAULT]: css`
      background-color: ${color("blue")};
    `
  },
  CompanyInputStyles.COMPANY_INPUT_LOAD_TO
)

export const CompanyInputCloseStyling = registerStyle(
  {
    [VARIANT_DEFAULT]: css`
      color: ${color("blue")};
    `
  },
  CompanyInputStyles.COMPANY_INPUT_SELECT_CLOSE
)

export const CompanyInputFlagStyling = registerStyle(
  {
    [VARIANT_DEFAULT]: css`
      padding: ${spacing.mediumPlus} ${spacing.tiny} ${spacing.tiny}
        ${spacing.medium};
    `
  },
  CompanyInputStyles.COMPANY_INPUT_FLAG
)

export const CompanyInputSelectItemStyling = registerStyle(
  {
    [VARIANT_DEFAULT]: css`
      background-color: ${p => (p.isSelected ? color("blue") : "transparent")};
    `
  },
  CompanyInputStyles.COMPANY_INPUT_SELECT_ITEM
)
