import { css } from "styled-components"
import { Button, theming } from "@staccx/base"
import { lighten } from "polished"

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

export default theming.createVariants(
  {
    secondary: css`
      background-color: ${theming.color.secondary};
      color: ${theming.color.primary};
      &:hover,
      &:focus,
      &:active {
        background-color: ${p => lighten(0.2, theming.color("secondary")(p))};
        color: ${theming.color.primary};
      }
    `,
    expand: css`
      display: block;
      width: 100%;
      margin: 0;
      background-color: transparent;
      color: ${theming.color.secondary};

      &:hover,
      &:focus,
      &:active {
        background-color: transparent;
        color: ${theming.color.text};
      }
    `,
    invisible: invisibleButton,
    menuItem: css`
      padding: 0;
      background-color: transparent;
      width: 100%;
      text-align: center;
      color: ${theming.color.primary};
      font-size: ${theming.font.h4};
      border-radius: 0;

      &:hover,
      &:focus,
      &:active {
        background-color: transparent;
        color: ${p => lighten(0.05, theming.color("primary")(p))};

        svg {
          fill: ${theming.color.secondary};
        }
      }

      svg {
        display: block;
        margin: 0 auto;
      }
    `,
    accountInfo: css`
      border: 2px solid ${theming.color.secondary};
      color: ${theming.color.secondary};
      position: absolute;
      top: 0;
      right: -64px;
      background-color: transparent;
      width: ${theming.targetSize.small};
      height: ${theming.targetSize.small};
      min-height: ${theming.targetSize.small};
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
    `
  },
  Button.themeProps.button
)
