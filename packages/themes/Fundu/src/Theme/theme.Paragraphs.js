import { css } from "styled-components"
import { Paragraph, theming } from "@staccx/base"

export const ParagraphStyling = theming.createVariants(
  {
    lead: css`
      font-size: ${theming.font.h5};
      text-align: center;
      padding: 0 ${theming.spacing.small};
      line-height: 1.7;
      max-width: 500px;
      margin-left: auto;
      margin-right: auto;
    `,
    formIntro: css`
      margin: 0 0 ${theming.spacing.medium} ${theming.spacing.medium};
    `
  },
  Paragraph.themeProps.paragraph
)
