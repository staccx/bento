import { css } from "styled-components"
import { Input, Select, theming, FileInput, Slider2 } from "@staccx/base"

export const InputStyling = theming.createVariants(
  {
    [theming.VARIANT_DEFAULT]: css`
      border-width: 2px;
      border-radius: 3px;
      &:focus,
      &:hover,
      &:active {
        border-color: ${theming.color.primary};
      }
    `,
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

export const LabelStyling = theming.createVariants(
  {
    [theming.VARIANT_DEFAULT]: css`
      font-weight: 500;
    `
  },
  Input.themeProps.label
)

export const SelectSelectedStyling = theming.createVariants(
  {
    loanOffer: css`
      border-color: transparent;
      padding-right: ${theming.spacing.mediumPlus};
      background-color: transparent;

      &:hover,
      &:active,
      &:focus {
        background-color: transparent;
        color: ${theming.color.primary};
        border-color: ${theming.color.primary};

        svg {
          fill: ${theming.color.primary};
        }
      }
    `
  },
  Select.themeProps.optionContainer
)

export const SelectIconButtonStyling = theming.createVariants(
  {
    loanOffer: css`
      right: 0;
    `
  },
  Select.themeProps.iconButton
)

export const SelectOptionsWrapperStyling = theming.createVariants(
  {
    loanOffer: css`
      width: 100%;
      max-height: 150px;
      overflow-y: auto;
      position: absolute;
      z-index: 10;
      background-color: ${theming.color.white};
      box-shadow: rgba(0, 0, 75, 0.015) 0px 2px 2px,
        rgba(0, 0, 75, 0.015) 0px 4px 4px, rgba(0, 0, 75, 0.015) 0px 8px 8px,
        rgba(0, 0, 75, 0.015) 0px 16px 16px, rgba(0, 0, 75, 0.015) 0px 32px 32px,
        rgba(0, 0, 75, 0.015) 0px 64px 64px;
    `
  },
  Select.themeProps.defaultOptionWrapper
)

export const FileInputStyles = theming.createVariants(
  {
    [theming.VARIANT_DEFAULT]: css`
      width: 100%;
      display: flex;
      border-radius: 3px;
      padding-left: ${theming.spacing.small};
      padding-right: ${theming.spacing.small};
      background-color: ${theming.color.white};
      color: ${theming.color.primary};
      border: 2px solid ${theming.color.line};
      line-height: inherit;
      &:hover,
      &:focus,
      &:active {
        border-color: ${theming.color.primary};
        background-color: ${theming.color.white};
        color: ${theming.color.primary};
      }
      span {
        max-width: 100px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        display: inline-block;
      }
    `
  },
  FileInput.themeProps.label
)

export const Slider2RailStyling = theming.createVariants(
  {
    [theming.VARIANT_DEFAULT]: css`
      background-color: ${theming.color.line};
    `
  },
  Slider2.themeProps.rail
)
