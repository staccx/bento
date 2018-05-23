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

      > svg {
        fill: currentColor;
        width: 16px;
        height: 16px;
        display: block;
        margin: 0 auto;
      }
    `,
    addSigner: css`
      background-color: transparent;
      border: 1px solid ${color.primary};
      color: ${color.primary};
      min-height: ${targetSize.small};
      padding: 3px ${spacing.small};
    `
  },
  ButtonStyles.BUTTON
)
