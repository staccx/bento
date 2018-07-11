import { css } from "styled-components"
import { color, spacing, registerStyle } from "@staccx/theme"
import { Layout, fontSmoothing } from "@staccx/base"

export const LayoutStyling = registerStyle(
  {
    documentationHeader: css`
      width: 100%;
      grid-template-columns: 1fr auto 200px;
      grid-column-gap: 0;
    `,
    documentationApiExample: css`
      grid-template-columns: 35% 1fr;
      grid-column-gap: ${spacing.large};

      > * {
        padding: ${spacing.medium};

        &:last-child {
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
    `,

    documentationSidebar: css``
  },
  Layout.themeProps.container
)
