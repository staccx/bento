import { css } from "styled-components"
import { Paragraph, theming } from "@staccx/base"

export const ParagraphStyling = theming.createVariants(
  {
    lead: css`
      font-size: ${theming.font.h5};
      margin-bottom: ${theming.spacing.small};
      padding: ${theming.spacing.small} 0 0;
      line-height: 1.7;
      max-width: 500px;
    `,
    formIntro: css`
      margin: 0 0 ${theming.spacing.medium};
    `
  },
  Paragraph.themeProps.paragraph
)
