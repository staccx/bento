import { css } from "styled-components"
import { Text, hideVisually, theming } from "@staccx/base"

export const TextStyling = theming.createVariants(
  {
    visuallyHidden: css`
      ${hideVisually};
    `,
    accountBalance: css`
      display: block;
      font-size: ${theming.font("accountBalance")};
      font-weight: ${theming.fontWeight.bold};
      color: ${theming.color("accountBalance")};
      display: inline;
    `,
    loanBalance: css`
      font-size: ${theming.font("accountBalance")};
      font-weight: ${theming.fontWeight.bold};
      color: ${theming.color("accountLoan")};
      display: inline;
    `,
    loanDecimal: css`
      font-size: ${theming.font("accountBalanceDecimals")};
      color: ${theming.color("accountLoan")};
      font-weight: ${theming.fontWeight.bold};
    `,
    accountDecimal: css`
      font-size: ${theming.font("accountBalanceDecimals")};
      color: ${theming.color("accountBalance")};
      font-weight: ${theming.fontWeight.bold};
    `,
    earned: css`
      font-size: ${theming.font.input};
      font-weight: ${theming.fontWeight.bold};
      color: ${theming.color("accountEarned")};
      line-height: 1;
      margin-bottom: ${theming.spacing.small};
      display: block;
    `,
    withdrawAlertNumber: css`
      display: inline-block;
      color: ${theming.color.primary};
    `
  },
  Text.themeProps.text
)
