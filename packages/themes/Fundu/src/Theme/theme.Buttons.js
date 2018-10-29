import { css } from "styled-components"
import { Button, theming } from "@staccx/base"

const subtleButton = css`
  background-color: transparent;
  color: ${theming.color.text};
  border-width: 0;
  border-bottom: 2px solid ${theming.color.primary};
  box-shadow: none;
  padding-left: ${theming.spacing.small};
  padding-right: ${theming.spacing.small};
  border-radius: 0;
  text-decoration: none;
  padding-bottom: 3px;
  font-weight: normal;

  &:hover,
  &:active,
  &:focus {
    outline: none;
    color: ${theming.color.primary};
    border-bottom-color: ${theming.color.primary};
    background-color: transparent;
  }
`

const defaultButton = css`
  font-size: ${theming.font.h4};
  border-radius: 100px;

  &:disabled {
    background-color: ${theming.color.disabled};
  }
`

export const ButtonStyling = theming.createVariants(
  {
    [theming.VARIANT_DEFAULT]: css`
      ${defaultButton};
    `,
    subtle: subtleButton,
    secondary: css`
      ${defaultButton};
      background-color: white;
      color: ${theming.color.primary};
      min-width: 200px;
    `,
    decline: css`
      ${subtleButton};

      &:hover,
      &:active,
      &:focus {
        color: ${theming.color.text};
        border-bottom-color: ${theming.color.warning};
      }
    `,
    deleteSigner: css`
      align-self: flex-end;
      background-color: transparent;
      color: ${theming.color.primary};
      padding: 0;
      min-width: ${theming.targetSize.normal};
      border: 1px solid ${theming.color.white};

      > svg {
        fill: currentColor;
        width: 16px;
        height: 16px;
        display: block;
        margin: 0 auto;
      }

      &:focus,
      &:active,
      &:hover {
        border: 1px solid ${theming.color.primary};
        background-color: transparent;
        color: ${theming.color.primary};
      }

      ${p =>
        p.isUserAdded &&
        `
        position: absolute;
        right: 24px;
        top: 50%;
        transform: translateY(-50%);
      `};
    `,
    addSigner: css`
      background-color: transparent;
      color: ${theming.color.primary};
      min-height: ${theming.targetSize.small};
      padding: 3px ${theming.spacing.small};
      border: 1px solid ${theming.color.white};

      &:focus,
      &:active,
      &:hover {
        border: 1px solid ${theming.color.primary};
        background-color: transparent;
        color: ${theming.color.primary};
      }
    `,
    endScreen: subtleButton
  },
  Button.themeProps.button
)
