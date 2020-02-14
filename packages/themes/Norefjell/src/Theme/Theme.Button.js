import { css } from "styled-components"
import { Button, theming } from "@staccx/base"

const invisibleButton = css`
  padding: 0;
  margin: 0;
  background-color: transparent;
  color: currentColor;
  height: auto;
  min-height: 0;
  line-height: 1;

  &:hover,
  &:focus,
  &:active {
    color: currentColor;
    background-color: transparent;
  }
`

const Account = css`
  background: ${theming.color.white};
  padding: ${theming.spacing.small} ${theming.spacing.medium};
  box-shadow: 0px 16px 16px rgba(0, 0, 75, 0.002),
    0px 8px 8px rgba(0, 0, 75, 0.001), 0px 4px 7px rgba(0, 0, 75, 0.021),
    0px 2px 2px rgba(0, 0, 75, 0.021), 0px 32px 22px rgba(0, 0, 75, 0.021),
    0px 44px 64px rgba(0, 0, 75, 0.0101);
  border-radius: 3px;
  width: 100%;
  text-align: left;
  transition: box-shadow 0.2s ease-out;
  &:hover,
  &:focus,
  &:active {
    background: ${theming.color.white};
    box-shadow: 0px 18px 18px rgba(0, 0, 75, 0.004),
      0px 10px 10px rgba(0, 0, 75, 0.003), 0px 6px 9px rgba(0, 0, 75, 0.023),
      0px 4px 4px rgba(0, 0, 75, 0.023), 0px 34px 24px rgba(0, 0, 75, 0.023),
      0px 46px 66px rgba(0, 0, 75, 0.0103);
  }
`

const styleless = css`
  &,
  &:hover,
  &:active,
  &:focus {
    padding: 0;
    background-color: transparent;
    border-width: 0;
    width: 100%;
  }
`

export default theming.createVariants(
  {
    [theming.VARIANT_DEFAULT]: css`
      background-color: ${theming.color("mainButton")};
      border-radius: 3px;
    `,
    invisible: invisibleButton,
    expand: css`
      display: block;
      width: 100%;
      margin: 0;
      background-color: transparent;
      color: ${theming.color.primary};

      &:hover,
      &:focus,
      &:active {
        background-color: transparent;
        color: ${theming.color.text};
      }
    `,
    menuItem: css`
      display: flex;
      padding-left: ${theming.spacing.small};
      background-color: transparent;
      width: 100%;
      text-align: left;
      color: ${theming.color.text};
      border-bottom: 1px solid ${theming.color.line};
      border-radius: 0;

      &:hover,
      &:focus,
      &:active {
        background-color: ${theming.color.subtleHover};
        color: ${theming.color.text};
      }
    `,
    modalLeftButton: css`
      background-color: ${theming.color.white};
      color: ${theming.color.primary};
    `,
    accountInfo: css`
      position: relative;
      border: 2px solid ${theming.color.primary};
      color: ${theming.color.primary};
      position: absolute;
      top: -${theming.spacing.small};
      right: -${theming.spacing.small};
      background-color: transparent;
      width: ${theming.spacing.medium};
      height: ${theming.spacing.medium};
      min-height: ${theming.spacing.medium};
      line-height: ${theming.targetSize.small};
      border-radius: 50%;
      padding: 0;

      > svg {
        position: absolute;
        top: 50;
        left: 50;
        width: 14px;
        height: 14px;
        fill: currentColor;
        transform: translate(-50%, -50%);
      }
    `,
    bibMenuElement: css`
      display: flex;
      background-color: transparent;
      justify-content: space-between;
      width: 100%;
      color: ${theming.color.wcag};
      border-bottom: 1px solid ${theming.color.line};
      text-align: left;
      font-weight: ${theming.fontWeight.normal};
      position: relative;
      padding-top: ${theming.spacing.small};
      padding-bottom: ${theming.spacing.small};
      line-height: 1.2;
      > svg {
        position: absolute;
        right: 12px;
        fill: ${theming.color.line};
      }
      &:hover,
      &:focus,
      &:active {
        background-color: ${theming.color.bg};
        color: ${theming.color.black};
      }
    `,
    styleless: css`
      ${styleless};
    `,
    logo: css`
      ${styleless};
    `,
    accountBox: css`
      ${Account};
    `,
    loanBox: css`
      ${Account};
    `,
    tag: css`
      background-color: ${p =>
        p.selected ? theming.color("accountFilter") : theming.color("line")};
      color: ${p => (p.selected ? theming.color.white : theming.color.text)};
      padding: ${theming.spacing.tiny} ${theming.spacing.small};
      border-radius: ${theming.spacing.medium};
      min-height: ${theming.spacing.medium};
      height: ${theming.spacing.medium};
      line-height: 0;
    `,
    invoiceDownload: css`
      background-color: ${theming.color.secondary};
      color: ${theming.color.white};
      border-radius: 3px;
      svg {
        width: ${theming.spacing.medium};
        fill: ${theming.color.white};
      }
      &:hover {
        background-color: ${theming.color.bg};
        color: ${theming.color.primary};
        svg {
          fill: ${theming.color.primary};
        }
      }
    `,
    back: css`
      &,
      &:hover,
      &:active,
      &:focus {
        padding: 0;
        background-color: transparent;
        border-width: 0;
        color: ${theming.color.secondary};
        height: 32px;
        min-height: 32px;
        svg {
          margin-right: ${theming.spacing.tiny};
        }
      }
      &:hover,
      &:focus {
        color: ${theming.color.primary};
      }
    `,
    contractList: css`
      background: transparent;
      color: ${theming.color.text};
      text-align: left;
      width: 100%;
      display: flex;
      padding-left: 0;
      padding-right: 0;
      &::after {
        content: url("data:image/svg+xml;charset=UTF-8,%3csvg width='8' height='12' viewBox='0 0 8 12' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M4.79292 6L0.637773 1.61701C0.452511 1.42169 0.454402 1.10918 0.641553 0.913857L1.38449 0.146247C1.57542 -0.0490732 1.88167 -0.0490732 2.07071 0.1482L7.35822 5.64647C7.45274 5.74413 7.5 5.87109 7.5 6C7.5 6.12891 7.45274 6.25587 7.35822 6.35353L2.07071 11.8518C1.88167 12.0491 1.57542 12.0491 1.38449 11.8538L0.641553 11.0861C0.454402 10.8908 0.452511 10.5783 0.637773 10.383L4.79292 6Z' fill='%232EB6BE'/%3e%3c/svg%3e ");
      }
      svg {
        fill: ${theming.color.secondary};
      }
      &:hover,
      &:focus,
      &:active {
        background: transparent;
        color: ${theming.color.text};
        svg {
          fill: ${theming.color.primary};
        }
      }
    `
  },
  Button.themeProps.button
)