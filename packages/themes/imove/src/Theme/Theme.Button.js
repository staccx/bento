import { css } from "styled-components"
import { Button, theming } from "@staccx/base"

export default theming.createVariants(
  {
    [theming.VARIANT_DEFAULT]: css`
      background-color: ${theming.color.primary};
      color: ${theming.color.white};
      border-radius: 50px;
      transition: background 0.2s ease;

      &:hover,
      &:active,
      &:focus {
        background-color: ${theming.color("primaryDark")};
        outline: none;
      }
    `,
    secondary: css`
      background-color: ${theming.color.white};
      color: ${theming.color.primary};
      border-radius: 50px;
      border: 2px solid ${theming.color.primary};
      padding-top: 4px;
      padding-bottom: 4px;
      &:hover,
      &:focus,
      &:active {
        background-color: ${theming.color.primary};
        color: ${theming.color.white};
        text-decoration: none;
      }
    `,
    tertiary: css`
      background-color: transparent;
      color: ${theming.color.primary};
      border-radius: 0;
      &:hover,
      &:focus,
      &:active {
        background-color: transparent;
        color: ${theming.color.secondary};
        text-decoration: underline;
      }
    `,
    mainNavigation: css`
      display: block;
      background-color: transparent;
      color: ${theming.color.primary};
      border-radius: 0;
      width: 100%;
      background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg width='6' height='10' viewBox='0 0 6 10' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M0 1.427L1.386 0 6 4.75 1.386 9.5 0 8.073 3.228 4.75 0 1.427z' fill='%234FAF73'/%3e%3c/svg%3e");
      background-repeat: no-repeat;
      background-position: right ${theming.spacing.small} center;
      text-align: left;
      min-height: 60px;
      padding-left: 0;
      border-bottom: 1px solid ${theming.color.line};

      &:hover,
      &:active,
      &:focus {
        background-color: transparent;
        color: ${theming.color.secondary};
      }

      @media only screen and (max-width: 430px) {
        margin-left: -${theming.spacing.medium};
        margin-right: -${theming.spacing.medium};
        padding-left: ${theming.spacing.medium};
      }
    `,
    back: css`
      min-height: 0;
      padding: 0;
      border-radius: 0;
      color: ${theming.color.primary};
      background-color: transparent;

      &::before {
        content: "< ";
        text-indent: -6px;
      }
    `,
    filter: css`
      min-height: 34px;
      line-height: 22px;
      border-top-left-radius: 17px;
      border-bottom-left-radius: 17px;
      border-bottom-right-radius: 17px;
      border-top-right-radius: 0;
      background-color: ${p =>
        p.isOpen
          ? theming.color("primaryDark")(p)
          : theming.color("primary")(p)};
      color: ${theming.color.white};
      width: auto;
    `,
    inverted: css`
      background-color: ${theming.color.white};
      color: ${theming.color.primary};
      border-radius: 0;

      &:hover,
      &:focus,
      &:active {
        background-color: ${theming.color.white};
        color: ${theming.color.secondary};
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
      }
    `
  },
  Button.themeProps.button
)
