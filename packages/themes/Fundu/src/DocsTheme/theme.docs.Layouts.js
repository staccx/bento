import { css } from "styled-components"
import { Layout, fontSmoothing, theming } from "@staccx/base"

export const LayoutStyling = theming.createVariants(
  {
    documentationHeader: css`
      width: 100%;
      grid-template-columns: calc(40% + ${theming.spacing.large}) 1fr;
      grid-column-gap: 0;

      > * {
        flex-grow: 1;

        &:last-child {
          display: flex;
          align-items: center;
          background-color: ${theming.color.bgGray};
          border-left: 1px solid ${theming.color.line};
        }
      }
    `,
    documentationApiExample: css`
      grid-template-columns: 35% 1fr;
      grid-column-gap: ${theming.spacing.large};

      > * {
        padding: ${theming.spacing.medium};

        &:last-child {
          background-color: ${theming.color("codeBackground")};
          color: #f7f9fc;
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
    docForm: css`
      grid-template-areas: initial;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      > a {
        display: flex;
      }
    `,
    dashboard: css`
      grid-template-columns: 340px 1fr;
      grid-gap: 0;
      min-height: 100vh;
      grid-template-areas: "aside main";
    `,
    createApi: css`
      grid-template-columns: 1fr 1fr;
      @media only screen and (max-width: 1000px) {
        grid-template-columns: 1fr;
      }
    `,
    twoUp: css`
      grid-template-columns: 1fr 1fr;
      grid-gap: 0;
    `
  },
  Layout.themeProps.container
)
