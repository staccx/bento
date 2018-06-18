import { css } from "styled-components"
import {
  registerStyle,
  color,
  targetSize,
  spacing,
  VARIANT_DEFAULT
} from "@staccx/theme"
import { ButtonStyles } from "@staccx/base"

export const ButtonStyling = registerStyle(
  {
    [VARIANT_DEFAULT]: css`
      border-bottom: 1px solid ${color("primaryDark")};
    `,
    secondary: css`
      background-color: transparent;
      border-radius: 0;
      border-bottom: 2px solid ${color("primaryDark")};
      color: ${color.text};

      &:hover,
      &:active,
      &:focus {
        color: ${color.primary};
        background-color: transparent;
      }
    `,

    decline: css`
      background-color: transparent;
      border-radius: 0;
      border-bottom: 2px solid ${color("primaryDark")};
      color: ${color.text};

      &:hover,
      &:active,
      &:focus {
        color: ${color.text};
        background-color: transparent;
        border-color: ${color.warning};
      }
    `,
    deleteSigner: css`
      align-self: flex-end;
      background-color: transparent;
      color: ${color.primary};
      padding: 0;
      min-width: ${targetSize.normal};
      border: 1px solid transparent;
      min-height: 42px;

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
        right: 1px;
        bottom: 1px;
      `};
    `,
    addSigner: css`
      background-color: transparent;
      color: ${color.primary};
      min-height: ${targetSize.small};
      padding: 3px ${spacing.small};
      border: 1px solid transparent;

      &:focus,
      &:active,
      &:hover {
        border: 1px solid ${color.primary};
        background-color: transparent;
        color: ${color.primary};
      }
    `
  },
  ButtonStyles.BUTTON
)
