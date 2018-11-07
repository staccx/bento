import { css } from "styled-components"
import { Button, theming } from "@staccx/base"

export const ButtonStyling = theming.createVariants(
  {
    [theming.VARIANT_DEFAULT]: css`
      /* border-bottom: 2px solid ${theming.color("black")}; */
      font-size: ${theming.font.input};
      :focus {
        box-shadow: 0 0 0 8px ${theming.color("primaryDark")}20;
        transition: box-shadow 200ms cubic-bezier(0, 0.28, 0.54, 0.99),
          border-bottom 2000ms ease;
      }
      &[disabled] {
        background-color: #a0a0a0;
        cursor: default;
        /* border-bottom: 2px solid transparent; */
      }
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
