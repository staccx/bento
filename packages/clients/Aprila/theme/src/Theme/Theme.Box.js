import { css } from "styled-components"
import { color, spacing, registerStyle } from "@staccx/theme"
import { Box, fontSmoothing } from "@staccx/base"

export const BoxStyling = registerStyle(
  {
    adBox: css`
      background: ${color.primary};
      color: ${color.white};
      border-radius: 8px;
      ${fontSmoothing};
    `,
    accountBox: css`
      background: ${color.primary};
      color: ${color.white};
      border-radius: 0;
      padding: 0;
      min-height: 25vh;
      display: flex;
      flex-direction: row;
      align-items: center;
      ${fontSmoothing};
    `,
    dashboardBox: css`
      background: ${color.bgGray};
      color: ${color.text};
      border-radius: 8px;
    `,
    headerContainer: css`
      background: ${color.primary};
      padding: 0;
      border-radius: 0;
    `,
    modalLeft: css`
      background-color: ${color.bgGray};
      text-align: center;
    `,
    modalRight: css`
      background-color: ${color.white};
      text-align: center;
    `,
    accountInfo: css`
      position: absolute;
      bottom: -${spacing.medium};
      left: 0;
      width: calc(100vw - ${spacing.medium} - ${spacing.small});
      max-width: 420px;
      padding: ${spacing.medium};
      background-color: ${color("secondaryLight")};
      color: ${color.primary};
      transform: translateY(100%);
      z-index: 50;

      &:before {
        content: "";
        position: absolute;
        top: 0;
        left: 50%;
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 0 12px 12px 12px;
        border-color: transparent transparent ${color("secondaryLight")}
          transparent;
        transform: translate(-50%, -100%);
      }
    `
  },
  Box.themeProps.box
)
