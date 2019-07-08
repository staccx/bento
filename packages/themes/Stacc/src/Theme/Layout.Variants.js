import { theming, Layout } from "@staccx/base"
import { css } from "styled-components"

export default theming.createVariants(
  {
    head: css`
      padding-bottom: ${theming.spacing.large};
    `,
    left: css`
      grid-template-columns: fit-content(550px) minmax(300px, 600px);
      grid-template-rows: auto;
      grid-template-areas: "image content";
      grid-column-gap: ${theming.spacing.large};
      align-items: center;
    `,
    right: css`
      grid-template-columns: minmax(300px, 600px) fit-content(550px);
      grid-template-rows: auto;
      grid-template-areas: "content image";
      grid-column-gap: ${theming.spacing.large};
      align-items: center;
    `,
    above: css`
      grid-template-columns: 1fr;
      grid-template-rows: auto auto;
      grid-template-areas:
        "image"
        "content";
      grid-row-gap: ${theming.spacing.large};
      align-items: center;
    `,
    sideBySide: css`
      grid-template-columns: 1fr;
      grid-template-rows: auto auto;
      grid-template-areas:
        "image"
        "content";
      grid-row-gap: ${theming.spacing.large};
      align-items: center;
    `,
    story: css`
      margin: 0 auto;
      @media (max-width: 768px) {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: auto auto;
        grid-template-areas: "image" "content";
        img {
          max-width: 240px;
          margin-top: 8vw;
        }
      }
    `
  },
  Layout.themeProps.container
)
