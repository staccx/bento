import { css } from "styled-components"
import { registerStyle, VARIANT_DEFAULT, color, spacing } from "@staccx/theme"
import { Box } from "@staccx/base"

export default registerStyle(
  {
    [VARIANT_DEFAULT]: css``,
    menu: css`
      position: relative;
      z-index: 10;
      padding-top: ${spacing.small};
      padding-bottom: ${spacing.small};
      width: 100%;
      @media screen and (max-width: 768px) {
        background: ${color.white};
        position: fixed;
        left: 0;
        bottom: 0;
        box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.15);
        z-index: 100;
      }
    `,
    myCarHeader: css`
      background-color: ${color("bgGray")};
      position: relative;
      width: 100vw;
      left: 50%;
      right: 50%;
      margin-left: -50vw;
      margin-right: -50vw;
      margin-bottom: ${spacing.huge};
    `,
    carWrapper: css`
      padding: 0;
      margin-bottom: ${spacing.large};
      text-align: center;
    `,
    center: css`
      text-align: center;
      padding: 0;
      svg {
        margin: auto;
      }
    `,
    filter: css`
      position: absolute;
      width: 100%;
      left: 0;
      background-color: ${color.primary};
      color: ${color.white};
      border-radius: 0;

      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      label {
        color: ${color.white};
      }
    `,
    subtleLeft: css`
      padding: 0;
      flex-basis: 60%;

      @media screen and (max-width: 768px) {
        margin-left: -${spacing.medium};
        padding: ${spacing.small} ${spacing.medium};
        background-color: ${color("bgGray")};
        color: ${color.text};
      }
    `
  },
  Box.themeProps.box
)
