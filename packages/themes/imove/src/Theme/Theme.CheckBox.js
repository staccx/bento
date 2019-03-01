import { css } from "styled-components"
import { CheckBox, theming } from "@staccx/base"

export const CheckBoxChecked = theming.createVariants(
  {
    [theming.VARIANT_DEFAULT]: css`
      &:checked ~ label::before {
        background-color: ${theming.color.primary};
      }
    `,
    light: css`
      :focus ~ label::before,
      ~ label:hover::before {
        border-color: ${theming.color.white};
        background-color: #0000004d;
      }
      ~ label {
        color: ${theming.color.white};
      }
    `
  },
  CheckBox.themeProps.input
)

export const CheckBoxLabel = theming.createVariants(
  {
    [theming.VARIANT_DEFAULT]: css`
      padding-left: 51px;
    `,
    infoButton: css`
      &::before {
        content: {p => p.dataContent};
      }
    `,
    iconBox: css`
      position: relative;
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      flex-grow: 1;
      min-height: 89px;
      display: block;
      background-color: ${theming.color.primary};
      color: ${theming.color.white};
      text-align: center;
      padding: ${theming.spacing.small};

      svg {
        display: block;
        flex-basis: 100%;
        margin: 0 auto ${theming.spacing.small};
      }
    `
  },
  CheckBox.themeProps.label
)

export const CheckBoxCheckContainer = theming.createVariants(
  {
    [theming.VARIANT_DEFAULT]: css`
      width: 28px;
      height: 28px;
      top: 8px;
      border-width: 2px;
      border-color: ${theming.color.primary}4d;
      border-radius: 50% 50% 0;
    `,
    light: css`
      border-color: ${theming.color.white};
      background-color: transparent;
    `,
    infoButton: css`
      border: none;
      background-image: url("data:image/svg+xml,%3Csvg width='17' height='17' viewBox='0 0 17 17' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M7.78711 12H9.20801V6.61426H7.78711V12ZM8.5 5.8623C9.00781 5.8623 9.33984 5.56445 9.33984 5.14453C9.33984 4.71973 9.00781 4.42676 8.5 4.42676C7.9873 4.42676 7.66016 4.71973 7.66016 5.14453C7.66016 5.56445 7.9873 5.8623 8.5 5.8623Z' fill='%231C966B'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M8.5 15.8C12.5317 15.8 15.8 12.5317 15.8 8.5C15.8 4.46832 12.5317 1.2 8.5 1.2C4.46832 1.2 1.2 4.46832 1.2 8.5C1.2 12.5317 4.46832 15.8 8.5 15.8ZM8.5 17C13.1944 17 17 13.1944 17 8.5C17 3.80558 13.1944 0 8.5 0C3.80558 0 0 3.80558 0 8.5C0 13.1944 3.80558 17 8.5 17Z' fill='%231C966B'/%3E%3C/svg%3E%0A");
      background-repeat: no-repeat;
      background-size: contain;
      width: 17px;
      height: 17px;
    `,
    iconBox: css`
      top: -9px;
      right: -9px;
      left: auto;
      border-radius: 50%;
      border: 4px solid ${theming.color("primaryLight")} !important;
    `
  },
  CheckBox.themeProps.labelBefore
)

export const CheckBoxCheck = theming.createVariants(
  {
    [theming.VARIANT_DEFAULT]: css`
      fill: ${theming.color.white};
      width: 10px;
      left: 9px;
      top: 14px;
    `,
    infoButton: css`
      display: none;
    `,
    iconBox: css`
      top: -7px;
      right: -7px;
      left: auto;
    `
  },
  CheckBox.themeProps.icon
)
