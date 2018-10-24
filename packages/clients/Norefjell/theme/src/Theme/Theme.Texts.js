import { css } from "styled-components"
import { color, font, registerStyle, fontWeight, spacing } from "@staccx/theme"
import { Text, hideVisually } from "@staccx/base"

export const TextStyling = registerStyle(
  {
    visuallyHidden: css`
      ${hideVisually};
    `,
    accountBalance: css`
      display: block;
      font-size: ${font("accountBalance")};
      font-weight: ${fontWeight.bold};
      color: ${color("accountBalance")};
      display: inline;
    `,
    loanBalance: css`
      font-size: ${font("accountBalance")};
      font-weight: ${fontWeight.bold};
      color: ${color("accountLoan")};
      display: inline;
    `,
    loanDecimal: css`
      font-size: ${font("accountBalanceDecimals")};
      color: ${color("accountLoan")};
      font-weight: ${fontWeight.bold};
    `,
    accountDecimal: css`
      font-size: ${font("accountBalanceDecimals")};
      color: ${color("accountBalance")};
      font-weight: ${fontWeight.bold};
    `,
    earned: css`
      font-size: ${font.input};
      font-weight: ${fontWeight.bold};
      color: ${color("accountEarned")};
      line-height: 1;
      margin-bottom: ${spacing.small};
      display: block;
    `
  },
  Text.themeProps.text
)
