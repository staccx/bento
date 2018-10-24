import { css } from "styled-components"
import { Button, theming } from "@staccx/base"

export const ButtonStyling = theming.createVariants(
  {
    [theming.VARIANT_DEFAULT]: css`
      border-bottom: 1px solid ${theming.color("primaryDark")};
    `,
    secondary: css`
      background-color: transparent;
      border-radius: 0;
      border-bottom: 2px solid ${theming.color("primaryDark")};
      color: ${theming.color.text};

      &:hover,
      &:active,
      &:focus {
        color: ${theming.color.primary};
        background-color: transparent;
      }
    `,

    decline: css`
      background-color: transparent;
      border-radius: 0;
      border-bottom: 2px solid ${theming.color("primaryDark")};
      color: ${theming.color.text};

      &:hover,
      &:active,
      &:focus {
        color: ${theming.color.text};
        background-color: transparent;
        border-color: ${theming.color.warning};
      }
    `,
    deleteSigner: css`
      align-self: flex-end;
      background-color: transparent;
      color: ${theming.color.primary};
      padding: 0;
      min-width: ${theming.targetSize.normal};
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
        border: 1px solid ${theming.color.primary};
        background-color: transparent;
        color: ${theming.color.primary};
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
      color: ${theming.color.primary};
      min-height: ${theming.targetSize.small};
      padding: 3px ${theming.spacing.small};
      border: 1px solid transparent;

      &:focus,
      &:active,
      &:hover {
        border: 1px solid ${theming.color.primary};
        background-color: transparent;
        color: ${theming.color.primary};
      }
    `
  },
  Button.themeProps.button
)
