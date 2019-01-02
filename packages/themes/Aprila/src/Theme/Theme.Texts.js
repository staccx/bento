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
    accountDecimal: css`
      font-size: ${theming.font("accountBalanceDecimals")};
      color: ${theming.color("accountBalance")};
      font-weight: ${theming.fontWeight.bold};
      &::after {
        content: url("data:image/svg+xml;charset=UTF-8,%3csvg width='39' height='39' viewBox='0 0 39 39' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle cx='19.5' cy='19.5' r='19.5' fill='white'/%3e%3cpath d='M10 19.9297L24.0703 19.9297L19.5 24.5L21 26L28.0703 18.9297L21 11.8594L19.5 13.3594L24.0703 17.9297L10 17.9297L10 19.9297Z' fill='%233A2C7B'/%3e%3c/svg%3e ");
        width: 39px;
        height: 39px;
        margin-left: ${theming.spacing.small};
      }
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
    `,
    strong: css`
      font-weight: ${theming.fontWeight.normal};
    `,
    accountHeadingAvailable: css`
      font-size: ${theming.font.h1};
      color: ${theming.color.secondary};
      font-weight: bold;
    `,
    accountHeadingSubtext: css`
      font-size: ${theming.font.input};
      font-weight: normal;
      display: block;
      ${theming.fontSmoothing};
    `
  },
  Text.themeProps.text
)
