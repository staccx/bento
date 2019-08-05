import { css } from "styled-components"
import { CheckBox, theming } from "@staccx/base"

export const CheckBoxInputStyling = theming.createVariants(
  {
    filter: css`
      :active ~ label::before,
      :focus ~ label::before {
        outline: 3px solid ${theming.color("b1")};
        outline-offset: 0;
      }
    `
  },
  CheckBox.themeProps.input
)

export const CheckBoxLabelStyling = theming.createVariants(
  {
    filter: css`
      min-height: 0;
      padding-top: 0;
      padding-bottom: 0;
      line-height: 24px;
      ::after {
        content: "";
        display: none;
        width: 14px;
        height: 8px;
        position: absolute;
        bottom: 6px;
        left: 10px;
        border: 3px solid;
        border-top: 0;
        border-right: 0;
        transform-origin: bottom left;
        transform: rotate(-45deg) scale(1);
      }
    `
  },
  CheckBox.themeProps.label
)

export const CheckBoxLabelBeforeStyling = theming.createVariants(
  {
    filter: css`
      top: 0;
      border-color: ${theming.color("text")};
    `
  },
  CheckBox.themeProps.labelBefore
)

export const CheckBoxLabelCheckedStyling = theming.createVariants(
  {
    filter: css`
      > svg {
        display: none;
      }
      ::after {
        display: block;
      }
    `
  },
  CheckBox.themeProps.labelChecked
)
