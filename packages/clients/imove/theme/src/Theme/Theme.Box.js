import { css } from "styled-components"
import { registerStyle, VARIANT_DEFAULT, color, spacing } from "@staccx/theme"
import { Box } from "@staccx/base"

export default registerStyle(
  {
    [VARIANT_DEFAULT]: css``,
    menu: css`
      background: ${color.white};
      position: fixed;
      left: 0;
      bottom: 0;
      width: 100%;
      padding-top: ${spacing.small};
      padding-bottom: ${spacing.small};
      box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.15);
      z-index: 100;
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
      margin-bottom: -120px;
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
      background-color: ${color.primary};
      color: ${color.white};
      border-radius: 0;
      margin-top: -${spacing.medium};

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
      margin-left: -${spacing.medium};
      padding: ${spacing.small} ${spacing.medium};
      background-color: ${color("bgGray")};
      color: ${color.text};
    `
  },
  Box.themeProps.box
)
