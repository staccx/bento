import { css } from "styled-components"
import { registerStyle, color, targetSize, spacing } from "@staccx/theme"
import { ButtonStyles } from "@staccx/base"

export const ButtonStyling = registerStyle(
  {
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
    endScreen: css`
      background-color: transparent;
      color: ${color.text};
      border-width: 0;
      border-bottom: 2px solid ${color.primary};
      box-shadow: none;
      padding-left: 0;
      padding-right: 0;
      border-radius: 0;
      text-decoration: none;
      padding-bottom: 3px;
      font-weight: normal;

      &:hover,
      &:focus {
        outline: none;
        color: ${color.primary};
        border-bottom-color: ${color.primary};
        background-color: transparent;
      }
    `
  },
  ButtonStyles.BUTTON
)
