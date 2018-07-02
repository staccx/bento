import { css } from "styled-components"
import { color, font, spacing, registerStyle } from "@staccx/theme"
import { TextStyles } from "@staccx/base"

const getTypeColor = type => {
  switch (type) {
    case "get":
      return "codeNumber"

    case "put":
      return "codeComment"

    case "delete":
      return "codeError"

    default:
      return "codeString"
  }
}

export const TextStyling = registerStyle(
  {
    documentationInline: css`
      display: inline-block;
      color: ${color.primary};
      border: 1px solid ${color.primary};
      padding: 0 2px;
      background-color: ${color.bgGray};
      border-radius: 3px;
      line-height: 1.4;
    `,
    documentationMethodValidtionText: css`
      display: block;
    `,
    documentationAttrType: css`
      color: ${color.wcag};
      font-size: ${font.tiny};
      display: block;
    `,
    documentationAttrReq: css`
      color: ${color("codeError")};
      font-size: ${font.tiny};
    `,
    documentationOperationType: css`
      display: inline-block;
      font-size: ${font.tiny};
      background-color: ${p => color(getTypeColor(p.type))};
      padding: ${spacing.tiny} ${spacing.small};
      margin-right: ${spacing.small};
      text-transform: uppercase;
    `,

    documentationOperationPath: css`
      color: ${color("codePunctuation")};
    `
  },
  TextStyles.TEXT
)
