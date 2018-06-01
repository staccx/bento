import { css } from "styled-components"
import { color, spacing, registerStyle } from "@staccx/theme"
import { BoxStyles } from "@staccx/base"

export const BoxStyling = registerStyle(
  {
    actionBox: css`
      padding: 0;
    `,
    actionBoxContent: css`
      padding: ${spacing.medium} 0 0 0;
    `,
    largeForm: css`
      padding: 0;
    `,
    paddingVertical: css`
      padding: 0;
      padding-top: ${spacing.medium};
      padding-bottom: ${spacing.medium};
    `,
    illustration: css`
      padding: 0;
      text-align: center;
      margin-bottom: ${spacing.medium};
    `,
    split: css`
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      padding: 0;
    `,
    centeredContent: css`
      text-align: center;
      width: 100%;
    `,
    subtleBox: css`
      padding: ${spacing.small} 0;
    `,
    halves: css`
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: ${spacing.large};
      grid-template-areas: "left right";
      padding: 0;

      @media (max-width: 735px) {
        grid-gap: ${spacing.medium};
      }
      @media (max-width: 710px) {
        grid-template-columns: 100%;
        grid-template-areas: "one";
      }
    `,
    inputContainer: css`
      position: relative;
      padding: 0;
    `,
    pickAmounts: css`
      padding: ${spacing.medium} 0 0;
    `,
    offerTable: css`
      border-top: 3px solid ${color.primary};
      border-bottom: 3px solid ${color.primary};
      padding: 0 0 ${spacing.small};
    `
  },
  BoxStyles.BOX
)
