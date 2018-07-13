import { css } from "styled-components"
import { color, spacing, registerStyle, VARIANT_DEFAULT } from "@staccx/theme"
import { Input, SelectOption, Select, RadioPill } from "@staccx/base"

export const InputStyling = registerStyle(
  {
    loanOffer: css`
      border-width: 0;
    `,
    currencyLarge: css`
      input {
        min-height: 96px;
      }
    `
  },
  Input.themeProps.input
)

export const LabelStyling = registerStyle(Input.themeProps.label)

export const SelectSelectedStyling = registerStyle(
  {
    loanOffer: css`
      border-color: transparent;
      padding-right: ${spacing.mediumPlus};
      background-color: transparent;

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
  Select.themeProps.optionContainer
)

export const SelectIconButtonStyling = registerStyle(
  {
    loanOffer: css`
      right: 0;
    `
  },
  Select.themeProps.iconButton
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
  Select.themeProps.defaultOptionWrapper
)

export const RadioPillStyling = registerStyle(
  {
    numberOfChildren: css`
      padding-top: ${spacing.mediumPlus};
      padding-left: ${spacing.medium};
      padding-right: ${spacing.medium};
    `
  },
  RadioPill.themeProps.container
)
