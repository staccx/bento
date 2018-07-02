import { css } from "styled-components"
import { color, spacing, registerStyle } from "@staccx/theme"
import { LayoutStyles, fontSmoothing } from "@staccx/base"

export const LayoutStyling = registerStyle(
  {
    documentationHeader: css`
      width: 100%;
      grid-template-columns: calc(40% + ${spacing.large}) 1fr;
      grid-column-gap: 0;

      > * {
        flex-grow: 1;

        &:last-child {
          display: flex;
          align-items: center;
          background-color: ${color.bgGray};
          border-left: 1px solid ${color.line};
        }
      }
    `,
    documentationApiExample: css`
      grid-template-columns: 35% 1fr;
      grid-column-gap: ${spacing.large};

      > * {
        padding: ${spacing.medium};

        &:last-child {
          background-color: ${color("codeBackground")};
          color: #f7f9fc;
          border-left: 1px solid ${color.line};
          ${fontSmoothing};
        }
      }

      @media only screen and (max-width: 1280px) {
        grid-template-columns: 1fr;
        grid-row-gap: ${spacing.medium};
        grid-column-gap: 0;
      }
    `,
    documentationExample: css`
      > * {
        overflow-x: auto;

        ::-webkit-scrollbar {
          background-color: rgba(0, 0, 0, 0.2);
          border-radius: 50px;
          height: 12px;
        }

        ::-webkit-scrollbar-thumb {
          background: ${color("codeComment")};
          border-radius: 50px;
        }

        &:first-child {
          margin-bottom: -${spacing.medium};
        }
      }
    `
  },
  LayoutStyles.LAYOUT
)
