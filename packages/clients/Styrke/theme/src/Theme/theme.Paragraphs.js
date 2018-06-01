import { css } from "styled-components"
import { font, spacing, registerStyle } from "@staccx/theme"
import { ParagraphStyles } from "@staccx/base"

export const ParagraphStyling = registerStyle(
  {
    lead: css`
      font-size: ${font.h5};
      margin-bottom: ${spacing.small};
      padding: ${spacing.small} 0 0;
      line-height: 1.7;
      max-width: 500px;
      margin-left: auto;
      margin-right: auto;
    `,
    formIntro: css`
      margin: 0 0 ${spacing.medium};
    `,
    expandLead: css`
      margin: ${spacing.medium} 0;
    `
  },
  ParagraphStyles.PARAGRAPH
)
