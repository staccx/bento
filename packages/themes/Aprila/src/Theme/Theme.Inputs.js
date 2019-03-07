import { css } from "styled-components"
import { theming, Input } from "@staccx/base"
import { FadeIn } from "@staccx/animations"

// Wrapper
export const InputWrapperStyling = theming.createVariants(
  {
    schemaInput: css``,
    accountNumber: css`
      max-width: 210px;
    `,
    grow: css`
      flex-grow: 1;
    `
  },
  Input.themeProps.wrapper
)

// LABEL
export const InputLabelStyling = theming.createVariants(
  {
    schemaInput: css`
      font-weight: ${theming.fontWeight("bold")};
    `
  },
  Input.themeProps.label
)

// INPUT
export const InputInputStyling = theming.createVariants(
  {
    [theming.VARIANT_DEFAULT]: css`
      box-sizing: border-box;
    `,
    schemaInput: css`
      box-sizing: border-box;
      border-radius: 3px;
      border-width: 2px;
      font-size: ${theming.font.input};
    `
  },
  Input.themeProps.input
)

export const InputHelpBoxStyling = [
  theming.createVariants(
    {
      [theming.VARIANT_DEFAULT]: css`
        display: ${({ isVisible }) => (isVisible ? "block" : "none")};
        background-color: #f9f9f9;
        border-radius: ${theming.borderRadius};
        min-width: ${theming.wrapper.small};
        max-width: ${theming.wrapper.small};
        min-height: ${theming.spacing.small};
        margin-bottom: ${theming.spacing.small};
        padding: ${theming.spacing.small};
        opacity: 0;
        animation: ${FadeIn} 0.4s ease-out 1 forwards;
        box-shadow: 0px ${theming.spacing.small} ${theming.spacing.medium}
          rgba(0, 0, 0, 0.06);
        border: 1px solid ${theming.color.line};
      `
    },
    Input.themeProps.helpText
  ),
  theming.createVariants(
    {
      [theming.VARIANT_DEFAULT]: css`
        background-color: transparent;
        color: ${({ isOn }) =>
          isOn ? theming.color.secondary : theming.color.text};
      `
    },
    Input.themeProps.helpButton
  )
]
