import { css } from "styled-components"
import { registerStyle, VARIANT_DEFAULT, color, spacing } from "@staccx/theme"
import { Button } from "@staccx/base"

export default registerStyle(
  {
    [VARIANT_DEFAULT]: css`
      background-color: ${color.primary};
      color: ${color.white};
      border-radius: 0;
    `,
    secondary: css`
      background-color: ${color.white};
      color: ${color.primary};
      border: 2px solig ${color.primary};
      &:hover,
      &:focus,
      &:active {
        background-color: ${color.white};
        color: ${color.white};
        text-decoration: none;
      }
    `,
    tertiary: css`
      background-color: transparent;
      color: ${color.primary};
      border-radius: 0;
      &:hover,
      &:focus,
      &:active {
        background-color: transparent;
        color: ${color.primary};
        text-decoration: underline;
      }
    `,
    mainNavigation: css`
      background-color: ${color.primary};
      color: ${color.white};
      border-radius: 0;
      width: 100%;
      background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg width='6' height='10' viewBox='0 0 6 10' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M0 1.427L1.386 0 6 4.75 1.386 9.5 0 8.073 3.228 4.75 0 1.427z' fill='%23fff'/%3e%3c/svg%3e");
      background-repeat: no-repeat;
      background-position: right ${spacing.small} center;
      text-align: left;
      min-height: 60px;
      @media only screen and (max-width: 430px) {
        margin-left: -${spacing.medium};
      }
      & + & {
        margin-top: 1px;
      }
    `,
    back: css`
      min-height: 28px;
      padding: 3px ${spacing.small} 3px;
      border-radius: 50px;
      color: ${color.white};

      &::before {
        content: "< ";
        text-indent: -6px;
      }
    `
  },
  Button.themeProps.button
)
