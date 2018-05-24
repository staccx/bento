import { css } from "styled-components"
import { color, spacing, registerStyle } from "@staccx/theme"
import { BoxStyles } from "@staccx/base"

const tileStyle = css`
  background: ${color.white};
  box-shadow: rgba(0, 0, 75, 0.015) 0px 2px 2px,
    rgba(0, 0, 75, 0.015) 0px 4px 4px, rgba(0, 0, 75, 0.015) 0px 8px 8px,
    rgba(0, 0, 75, 0.015) 0px 16px 16px, rgba(0, 0, 75, 0.015) 0px 32px 32px,
    rgba(0, 0, 75, 0.015) 0px 64px 64px;
  border: 1px solid ${color.line};
  border-radius: 2px;
  -webkit-column-break-inside: avoid;
  break-inside: avoid;
  page-break-inside: avoid;
`

export const BoxStyling = registerStyle(
  {
    tile: css`
      ${tileStyle};
      padding: ${spacing.medium} 0;
    `,
    tileBox: css`
      ${tileStyle};
      padding: 0;
      margin-bottom: ${spacing.medium};
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
    `,
    centeredContainer: css`
      text-align: center;
      width: 100%;
    `,
    grayBox: css`
      background-color: ${color.subtleHover};
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
    paddedContainerLarge: css`
      padding: ${spacing.large};
    `,
    inputContainer: css`
      position: relative;
      padding: 0;
    `
  },
  BoxStyles.BOX
)
