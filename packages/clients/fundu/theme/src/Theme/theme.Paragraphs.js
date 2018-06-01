import { css } from "styled-components"
import { font, spacing, registerStyle } from "@staccx/theme"
import { ParagraphStyles } from "@staccx/base"

export const ParagraphStyling = registerStyle(
  {
    lead: css`
      font-size: ${font.h5};
      text-align: center;
      margin-bottom: ${spacing.mediumPlus};
      padding: 0 ${spacing.small};
      line-height: 1.7;
      max-width: 500px;
      margin-left: auto;
      margin-right: auto;
    `,
    expandLead: css`
      text-align: center;
      margin-bottom: ${spacing.medium};
    `,
    formIntro: css`
      margin: 0 0 ${spacing.medium} ${spacing.medium};
    `
  },
  ParagraphStyles.PARAGRAPH
)
