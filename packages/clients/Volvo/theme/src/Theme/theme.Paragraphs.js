import { css } from "styled-components"
import { registerStyle, color, font } from "@staccx/theme"
import { Paragraph } from "@staccx/base"

export const ParagraphStyling = registerStyle(
  {
    CaseSummary: css`
      color: ${color("gray")};
      font-size: ${font.small};
    `
  },
  Paragraph.themeProps.paragraph
)
