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

export const defaultButton = css`
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
    primary: css`
      ${defaultButton};
    `,
    small: css`
      min-height: ${theming.targetSize.small};
      line-height: 1;
      padding: ${theming.spacing.small};
      font-size: ${theming.font.h6};
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
      border-width: 0;

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
        border-width: 0;
        background-color: transparent;
        color: ${theming.color.secondary};
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
    add: css`
      background-color: transparent;
      font-weight: ${theming.fontWeight.normal};
      color: ${theming.color.black};
      min-height: ${theming.targetSize.small};
      padding: 0;
      border-width: 0;

      &::before {
        content: "+";
        font-weight: ${theming.fontWeight.bold};
        color: ${theming.color.white};
        background-color: ${theming.color.secondary};
        border-radius: 50%;
        width: ${theming.spacing.medium};
        height: ${theming.spacing.medium};
        display: inline-block;
        line-height: ${theming.spacing.medium};
        margin-right: ${theming.spacing.small};
      }

      &:focus,
      &:active,
      &:hover {
        border-width: 0;
        background-color: transparent;
        color: ${theming.color.primary};
      }
    `,
    endScreen: subtleButton
  },
  Button.themeProps.button
)
