import { css } from "styled-components"
import { Paragraph, theming } from "@staccx/base"

export const ParagraphVariants = theming.createVariants(
  {
    lede: css`
      line-height: 1.6;
    `
  },
  Paragraph.themeProps.paragraph
)
