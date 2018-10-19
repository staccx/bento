import { css } from "styled-components"
import { Text, theming } from "@staccx/base"

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

export const TextStyling = theming.createVariants(
  {
    documentationInline: css`
      display: inline-block;
      color: ${theming.color.primary};
      border: 1px solid ${theming.color.primary};
      padding: 0 2px;
      background-color: ${theming.color.bgGray};
      border-radius: 3px;
      line-height: 1.4;
    `,
    documentationMethodValidtionText: css`
      display: block;
    `,
    documentationAttrType: css`
      color: ${theming.color.wcag};
      font-size: ${theming.font.tiny};
      display: block;
    `,
    documentationAttrReq: css`
      color: ${theming.color("codeError")};
      font-size: ${theming.font.tiny};
    `,
    documentationOperationType: css`
      display: inline-block;
      font-size: ${theming.font.tiny};
      background-color: ${p => theming.color(getTypeColor(p.type))};
      padding: ${theming.spacing.tiny} ${theming.spacing.small};
      margin-right: ${theming.spacing.small};
      text-transform: uppercase;
    `,

    documentationOperationPath: css`
      color: ${theming.color("codePunctuation")};
    `
  },
  Text.themeProps.text
)
