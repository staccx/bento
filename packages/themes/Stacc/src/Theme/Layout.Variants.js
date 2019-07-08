import { theming, Layout } from "@staccx/base"
import { css } from "styled-components"

export default theming.createVariants(
  {
    head: css`
      padding-bottom: ${theming.spacing.large};
    `,
    left: css`
      grid-template-columns: 1fr 1fr;
      grid-template-rows: auto;
      grid-template-areas: "image content";
      grid-column-gap: ${theming.spacing.large};
      align-items: center;
    `,
    right: css`
      grid-template-columns: 1fr 1fr;
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
    `
  },
  Layout.themeProps.container
)
