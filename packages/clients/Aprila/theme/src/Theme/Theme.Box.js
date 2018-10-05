import { css } from "styled-components"
import { Box, fontSmoothing, theming } from "@staccx/base"

export const BoxStyling = theming.createVariants(
  {
    adBox: css`
      background: ${theming.color.primary};
      color: ${theming.color.white};
      border-radius: 8px;
      ${fontSmoothing};
    `,
    accountBox: css`
      background: ${theming.color.primary};
      color: ${theming.color.white};
      border-radius: 0;
      padding: 0;
      min-height: 25vh;
      display: flex;
      flex-direction: row;
      align-items: center;
      ${fontSmoothing};
    `,
    dashboardBox: css`
      background: ${theming.color.bgGray};
      color: ${theming.color.text};
      border-radius: 8px;
    `,
    headerContainer: css`
      background: ${theming.color.primary};
      padding: 0;
      border-radius: 0;
    `,
    modalLeft: css`
      background-color: ${theming.color.bgGray};
      text-align: center;
    `,
    modalRight: css`
      background-color: ${theming.color.white};
      text-align: center;
    `,
    accountInfo: css`
      position: absolute;
      bottom: -${theming.spacing.medium};
      left: 0;
      width: calc(100vw - ${theming.spacing.medium} - ${theming.spacing.small});
      max-width: 420px;
      padding: ${theming.spacing.medium};
      background-color: ${theming.color("secondaryLight")};
      color: ${theming.color.primary};
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
        border-color: transparent transparent ${theming.color("secondaryLight")}
          transparent;
        transform: translate(-50%, -100%);
      }
    `
  },
  Box.themeProps.box
)
