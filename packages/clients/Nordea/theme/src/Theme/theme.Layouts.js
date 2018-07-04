import { css } from "styled-components"
import { registerStyle, spacing, targetSize } from "@staccx/theme"
import { Layout, LayoutItem } from "@staccx/base"

export const LayoutStyling = registerStyle(
  {
    case: css`
      grid-template-columns: 1fr 320px 130px 320px 1fr;
      grid-template-rows:
        ${spacing.large} auto ${spacing.medium} calc(
          ${targetSize.normal} - ${spacing.medium}
        )
        auto auto auto;
      grid-row-gap: ${spacing.medium};
      grid-column-gap: ${spacing.medium};
    `
  },
  Layout.themeProps.container
)

export const LayoutItemStyling = registerStyle(
  {
    caseHeader: css`
      grid-column: 1 / span 5;
      grid-row: 1 / span 3;
      z-index: -1;
    `,
    caseSummary: css`
      grid-column: 2 / span 1;
      grid-row: 2;
    `,
    caseChat: css`
      grid-column: 4 / span 1;
      grid-row: 2 / span 3;
    `,
    caseDocumentation: css`
      grid-column: 2 / span 1;
      grid-row: 5;
    `,
    caseContact: css`
      grid-column: 4 / span 1;
      grid-row: 5;
    `,
    caseFinance: css`
      grid-column: 2 / span 1;
      grid-row: 6;
    `,
    caseObject: css`
      grid-column: 4 / span 1;
      grid-row: 6;
    `
  },
  LayoutItem.themeProps.container
)
