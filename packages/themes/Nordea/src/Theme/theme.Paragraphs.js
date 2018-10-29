import { css } from "styled-components"
import { Paragraph, theming } from "@staccx/base"

export const ParagraphStyling = theming.createVariants(
  {
    CaseSummary: css`
      color: ${theming.color("b4")};
      font-size: ${theming.font.small};
    `
  },
  Paragraph.themeProps.paragraph
)
