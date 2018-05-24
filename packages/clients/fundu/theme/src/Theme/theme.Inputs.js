import { css } from "styled-components"
import { spacing, registerStyle } from "@staccx/theme"
import { InputStyles } from "@staccx/base"

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
