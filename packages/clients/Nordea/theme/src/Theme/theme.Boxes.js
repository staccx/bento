import { css } from "styled-components"
import {
  registerStyle,
  color,
  spacing,
  targetSize,
  VARIANT_DEFAULT
} from "@staccx/theme"
import { Box } from "@staccx/base"

export const BoxStyling = registerStyle(
  {
    [VARIANT_DEFAULT]: css`
      background-color: ${color.white};
    `,
    defaultHero: css`
      background-color: ${color.secondary};
      padding-top: ${spacing.large};
      padding-left: 0;
      padding-right: 0;
      padding-bottom: ${spacing.mediumPlus};
    `,
    caseHero: css`
      background-color: ${color.secondary};
      height: 100%;
    `,
    mainSearch: css`
      position: relative;
      padding: 0;
      display: block;
      flex-grow: 1;
    `,
    salesSearch: css`
      padding: 0;
      margin-top: calc(-${targetSize.normal} / 2);
      display: flex;
      margin-bottom: ${spacing.large};
    `,
    subtle: css`
      background-color: ${color.white};
      padding-left: 0;
      padding-right: 0;
    `,
    contact: css`
      background-color: ${color.white};
      margin-bottom: ${spacing.small};
    `,
    chat: css`
      background: white;
      height: 100%;
    `
  },
  Box.themeProps.box
)
