import { css } from "styled-components"
import {
  registerStyle,
  color,
  spacing,
  targetSize,
  VARIANT_DEFAULT,
  font
} from "@staccx/theme"
import { Box, fontSmoothing } from "@staccx/base"

export const BoxStyling = registerStyle(
  {
    [VARIANT_DEFAULT]: css`
      background-color: ${color.white};
    `,
    defaultHero: css`
      color: ${color.white};
      background-color: ${color.black};
      padding-top: ${spacing.large};
      padding-left: 0;
      padding-right: 0;
      padding-bottom: ${spacing.mediumPlus};
      a {
        color: ${color.white};
        text-decoration: underline;
      }
    `,
    caseHero: css`
      background-color: ${color.secondary};
      color: ${color.text};
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
      margin-top: ${targetSize.normal};
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
      border: 1px solid ${color.line};
      margin-bottom: ${spacing.small};
    `,
    chat: css`
      background: white;
      height: 100%;
      border: 1px solid ${color.line};
      position: relative;
      padding: 0;
    `,
    file: css`
      background-color: ${color.white};
      padding: ${spacing.tiny} 0 ${spacing.tiny} ${spacing.tiny};
      font-size: ${font.small};
      border-bottom: 1px solid ${color.line};
      display: grid;
      grid-template-columns: 24px 1fr auto;
      grid-column-gap: ${spacing.small};
      align-items: center;
      ${fontSmoothing};
    `
  },
  Box.themeProps.box
)
