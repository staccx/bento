import { css } from "styled-components"
import { Layout, fontSmoothing, theming } from "@staccx/base"

export const LayoutStyling = theming.createVariants(
  {
    documentationHeader: css`
      width: 100%;
      grid-template-columns: 1fr auto 200px;
      grid-column-gap: 0;
    `,
    documentationApiExample: css`
      grid-template-columns: 35% 1fr;
      grid-column-gap: 0;

      > * {
        padding: ${theming.spacing.medium};
        background-color: ${theming.color.white};

        &:last-child {
          border-left: 1px solid ${theming.color.line};
          ${fontSmoothing};
        }
      }

      @media only screen and (max-width: 1280px) {
        grid-template-columns: 1fr;
        grid-row-gap: ${theming.spacing.medium};
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
          background: ${theming.color("codeComment")};
          border-radius: 50px;
        }

        &:first-child {
          margin-bottom: -${theming.spacing.medium};
        }
      }
    `,

    documentationSidebar: css``,
    styleguideExamples: css`
      grid-template-rows: 72px 1fr;
      height: 100%;
      > * {
        padding-left: ${theming.spacing.medium};
        padding-right: ${theming.spacing.medium};
      }
    `,
    dashboard: css`
      grid-template-columns: 220px 1fr;
      grid-gap: 0;
      min-height: 100vh;
      grid-template-areas: "aside main";
    `,
    centered: css`
      justify-content: center;
      align-items: center;
    `,
    componentContent: css`
      justify-content: center;
      align-items: center;
      height: 100%;
      position: relative;
    `
  },
  Layout.themeProps.container
)
