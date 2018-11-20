import { css } from "styled-components"
import { Button, theming } from "@staccx/base"

const defaultStyle = css`
  /* border-bottom: 2px solid ${theming.color("black")}; */
  font-size: ${theming.font.input};
  padding: 4px ${theming.spacing.medium};
  border: 2px solid ${theming.color.primary};
  :focus {
    box-shadow: 0 0 0 8px ${theming.color("primaryDark")}20;
    transition: box-shadow 200ms cubic-bezier(0, 0.28, 0.54, 0.99),
      border-bottom 2000ms ease;
  }
  &[disabled] {
    background-color: ${theming.color.disabled};
    border-color: ${theming.color.disabled};
    cursor: default;
  }
`

export const ButtonStyling = theming.createVariants(
  {
    [theming.VARIANT_DEFAULT]: css`
      ${defaultStyle};
    `,
    forward: css`
      ${defaultStyle};
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
      border: 2px solid ${theming.color("primary")};
      color: ${theming.color.primary};

      &:hover,
      &:active,
      &:focus {
        border-color: ${theming.color("primaryDark")};
        color: ${theming.color("primaryDark")};
        background-color: transparent;
      }
    `,
    deleteSigner: css`
      align-self: flex-end;
      background-color: transparent;
      color: ${theming.color.primary};
      padding: 6px;
      border: 1px solid transparent;

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
    add: css`
      background-color: transparent;
      color: ${theming.color.primary};
      min-height: ${theming.targetSize.small};
      padding: 0 ${theming.spacing.small};
      border: 2px solid;
      :active,
      :hover,
      :focus {
        border-color: ${theming.color("primaryDark")};
        color: ${theming.color("primaryDark")};
        background-color: transparent;
      }
    `,
    small: css`
      ${defaultStyle};
      text-transform: uppercase;
      font-size: ${theming.font.tiny};
      padding: 2px 16px;
      min-height: 0;
    `
  },
  Button.themeProps.button
)
