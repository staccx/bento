import { css } from "styled-components"
import { RadioButton, theming } from "@staccx/base"

/***
 * DOC
 * ---
 * layoutList: Use for cases where radiobuttons are
 * wrapped by Layout, and vertical spacing is
 * determined by it.
 * **/

export const RadioButtonInput = theming.createVariants(
  {
    [theming.VARIANT_DEFAULT]: css`
      /* Checked -> RadioButtonHole */
      &:checked ~ label::before {
        background-color: ${theming.color.primary};
      }
    `
  },
  RadioButton.themeProps.radio
)

export const RadioButtonLabel = theming.createVariants(
  {
    [theming.VARIANT_DEFAULT]: css`
      display: inline-block;
      padding-left: 51px;
      width: 100%;
      /* Unchecked -> "RadioButtonHole" */
      &::before {
        top: -5px;
        width: 28px;
        height: 28px;
        border: 2px solid ${theming.color.primary}4d;
        border-radius: 50% 50% 0;
        background-color: transparent;
      }
      /* Unchecked -> RadioButtonDot: */
      &::after {
        background-image: url("data:image/svg+xml,%3Csvg fill='none' viewBox='0 0 10 9' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='m9.7556 0.68989l-0.92038-0.59804c-0.25466-0.16484-0.60356-0.10159-0.774 0.13993l-4.2514 5.895-2.0734-1.982c-0.21657-0.20702-0.56948-0.20702-0.78604 0l-0.78804 0.7533c-0.21656 0.20701-0.21656 0.54437 0 0.7533l3.1882 3.0477c0.17847 0.17059 0.45919 0.30094 0.71185 0.30094 0.25265 0 0.50731-0.15143 0.67174-0.37953l5.1698-7.1926c0.17248-0.24151 0.10628-0.57312-0.14839-0.73796z' fill='%23fff'/%3E%3C/svg%3E");
        background-repeat: no-repeat;
        background-color: transparent;
        width: 11px;
        left: 9px;
        top: 4px;
      }
    `,
    layoutList: css`
      ::before {
        top: 0;
      }
      ::after {
        top: 9px;
      }
    `
  },
  RadioButton.themeProps.label
)

export const RadioButtonWrapper = theming.createVariants(
  {
    [theming.VARIANT_DEFAULT]: css`
      /* Hover and/or Focus -> RadioButtonHole: */
      &:hover input ~ label::before,
      input:focus ~ label::before {
        border-color: ${theming.color.primary} !important;
      }
    `,
    layoutList: css`
      padding-top: 0;
      padding-bottom: 0;
    `
  },
  RadioButton.themeProps.wrapper
)
