import { css } from "styled-components"
import {
  registerStyle,
  font,
  color,
  targetSize,
  spacing,
  VARIANT_DEFAULT
} from "@staccx/theme"
import { Button } from "@staccx/base"

const subtleButton = css`
  background-color: transparent;
  color: ${color.text};
  border-width: 0;
  border-bottom: 2px solid ${color.primary};
  box-shadow: none;
  padding-left: ${spacing.small};
  padding-right: ${spacing.small};
  border-radius: 0;
  text-decoration: none;
  padding-bottom: 3px;
  font-weight: normal;

  &:hover,
  &:active,
  &:focus {
    outline: none;
    color: ${color.primary};
    border-bottom-color: ${color.primary};
    background-color: transparent;
  }
`

const defaultButton = css`
  font-size: ${font.h4};
  border-radius: 100px;

  &:disabled {
    background-color: ${color.disabled};
  }
`

export const ButtonStyling = registerStyle(
  {
    [VARIANT_DEFAULT]: css`
      ${defaultButton};
    `,
    subtle: subtleButton,
    secondary: css`
      ${defaultButton};
      background-color: white;
      color: ${color.primary};
      min-width: 200px;
    `,
    decline: css`
      ${subtleButton};

      &:hover,
      &:active,
      &:focus {
        color: ${color.text};
        border-bottom-color: ${color.warning};
      }
    `,
    deleteSigner: css`
      align-self: flex-end;
      background-color: transparent;
      color: ${color.primary};
      padding: 0;
      min-width: ${targetSize.normal};
      border: 1px solid ${color.white};

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
        border: 1px solid ${color.primary};
        background-color: transparent;
        color: ${color.primary};
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
      color: ${color.primary};
      min-height: ${targetSize.small};
      padding: 3px ${spacing.small};
      border: 1px solid ${color.white};

      &:focus,
      &:active,
      &:hover {
        border: 1px solid ${color.primary};
        background-color: transparent;
        color: ${color.primary};
      }
    `,
    endScreen: subtleButton
  },
  Button.themeProps.button
)
