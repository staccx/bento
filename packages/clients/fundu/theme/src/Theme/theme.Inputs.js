import { css } from "styled-components"
import { color, spacing, registerStyle } from "@staccx/theme"
import { InputStyles, SelectSelectedStyles, SelectStyles } from "@staccx/base"

export const InputStyling = registerStyle(
  {
    clean: css`
      display: block;
      min-height: 72px;
      border-width: 0;
      border-radius: 0;
      padding: ${spacing.medium} ${spacing.medium} 0;
      transition: border-color 0.2s ease-out;

      > label {
        font-size: 14px;
        line-height: 1.2;
        padding-bottom: 6px;
        display: block;
        position: absolute;
        top: 12px;
        left: 24px;
      }
    `,
    loanOffer: css`
      border-width: 0;
    `
  },
  InputStyles.INPUT
)

export const LabelStyling = registerStyle(
  {
    clean: css`
      font-size: 14px;
      line-height: 1.2;
      padding-bottom: 6px;
      display: block;
      position: absolute;
      top: 12px;
      left: 24px;
    `
  },
  InputStyles.INPUT_LABEL
)

export const SelectSelectedStyling = registerStyle(
  {
    loanOffer: css`
      border-width: 0;
      padding-right: ${spacing.mediumPlus};

      &:hover,
      &:active,
      &:focus {
        background-color: transparent;
        color: ${color.primary};

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
