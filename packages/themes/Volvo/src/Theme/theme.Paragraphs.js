import { css } from "styled-components"
import { Paragraph, theming } from "@staccx/base"

export const ParagraphStyling = theming.createVariants(
  {
    CaseSummary: css`
      color: ${theming.color("gray")};
      font-size: ${theming.font.small};
    `
  },
  Paragraph.themeProps.paragraph
)
