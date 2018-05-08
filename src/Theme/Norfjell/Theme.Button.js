import { css } from "styled-components"
import { registerStyle, color, spacing, targetSize } from "@staccx/theme"
import { ButtonStyles } from "@staccx/base"

export default registerStyle(
  {
    expand: css`
      display: block;
      width: 100%;
      margin: 0;
      background-color: transparent;
      color: ${color.primary};

      &:hover,
      &:focus,
      &:active {
        background-color: transparent;
        color: ${color.text};
      }
    `,
    menuItem: css`
      display: flex;
      padding-left: ${spacing.small};
      background-color: transparent;
      width: 100%;
      text-align: left;
      color: ${color.text};
      border-bottom: 1px solid ${color.line};
      border-radius: 0;

      &:hover,
      &:focus,
      &:active {
        background-color: ${color.subtleHover};
        color: ${color.text};
      }
    `,
    modalLeftButton: css`
      background-color: ${color.white};
      color: ${color.primary};
    `,
    accountInfo: css`
      border: 1px solid ${color.primary};
      color: ${color.primary};
      position: absolute;
      top: 0;
      right: 0;
      background-color: transparent;
      width: ${targetSize.normal};
      height: ${targetSize.normal};
      line-height: ${targetSize.normal};
      border-radius: 50%;
      padding: 0;
    `
  },
  ButtonStyles.BUTTON
)
