import { css } from "styled-components"
import {
  registerStyle,
  color,
  spacing,
  targetSize,
  fontWeight
} from "@staccx/theme"
import { Button } from "@staccx/base"

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

export default registerStyle(
  {
    invisible: invisibleButton,
    expand: css`
      display: block;
      width: 100%;
      margin: 0;
      background-color: transparent;
      color: ${color.primary};

      &:hover,
      &:focus,
      &:active {
        background-color: transparent;
        color: ${color.text};
      }
    `,
    menuItem: css`
      display: flex;
      padding-left: ${spacing.small};
      background-color: transparent;
      width: 100%;
      text-align: left;
      color: ${color.text};
      border-bottom: 1px solid ${color.line};
      border-radius: 0;

      &:hover,
      &:focus,
      &:active {
        background-color: ${color.subtleHover};
        color: ${color.text};
      }
    `,
    modalLeftButton: css`
      background-color: ${color.white};
      color: ${color.primary};
    `,
    accountInfo: css`
      position: relative;
      border: 2px solid ${color.primary};
      color: ${color.primary};
      position: absolute;
      top: -${spacing.small};
      right: -${spacing.small};
      background-color: transparent;
      width: ${spacing.medium};
      height: ${spacing.medium};
      min-height: ${spacing.medium};
      line-height: ${targetSize.small};
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
      color: ${color.black};
      border-bottom: 1px solid ${color.line};
      text-align: left;
      font-weight: ${fontWeight.normal};
      position: relative;
      > svg {
        position: absolute;
        right: 12px;
        fill: ${color.line};
      }
      &:hover,
      &:focus,
      &:active {
        background-color: ${color.subtleHover};
        color: ${color.black};
      }
    `,
    styleless: css`
      &,
      &:hover,
      &:active,
      &:focus {
        padding: 0;
        background-color: transparent;
        border-width: 0;
        width: 100%;
      }
    `,
    accountBox: css`
      background: ${color.white};
      padding: ${spacing.small} ${spacing.medium};
      box-shadow: 0px 16px 16px rgba(0, 0, 75, 0.002),
        0px 8px 8px rgba(0, 0, 75, 0.001), 0px 4px 7px rgba(0, 0, 75, 0.021),
        0px 2px 2px rgba(0, 0, 75, 0.021), 0px 32px 22px rgba(0, 0, 75, 0.021),
        0px 44px 64px rgba(0, 0, 75, 0.0101);
      border-radius: 3px;
      text-align: left;
      transition: box-shadow 0.2s ease-out;
      &:hover,
      &:focus,
      &:active {
        background: ${color.white};
        box-shadow: 0px 18px 18px rgba(0, 0, 75, 0.004),
          0px 10px 10px rgba(0, 0, 75, 0.003), 0px 6px 9px rgba(0, 0, 75, 0.023),
          0px 4px 4px rgba(0, 0, 75, 0.023), 0px 34px 24px rgba(0, 0, 75, 0.023),
          0px 46px 66px rgba(0, 0, 75, 0.0103);
      }
    `
  },
  Button.themeProps.button
)
