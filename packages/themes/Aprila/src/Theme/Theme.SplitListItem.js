import { css } from "styled-components"
import { SplitListItem, theming } from "@staccx/base"

export default theming.createVariants(
  {
    accountInfoListItem: css`
      padding: 10px 0;
      border-color: ${theming.color("accountInfoBorder")};
      color: ${theming.color.white};
      ${p =>
        p.emphasize &&
        css`
          font-weight: ${theming.fontWeight.bold};
        `};
    `,
    annualStatementListItem: css`
      padding: ${theming.spacing.tiny} 0 ${theming.spacing.small};
      ${p =>
        p.heading &&
        css`
          border-width: 0;
          padding-bottom: 0;
          padding-top: ${theming.spacing.small};
        `};
      &:first-child {
        border-top: 1px solid ${theming.color.line};
      }
      &:last-child {
        border-bottom: 1px solid ${theming.color.line};
      }
    `
  },
  SplitListItem.themeProps.listItem
)
