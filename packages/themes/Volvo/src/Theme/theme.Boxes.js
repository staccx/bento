import { css } from "styled-components"
import { Box, fontSmoothing, theming } from "@staccx/base"

export const BoxStyling = theming.createVariants(
  {
    [theming.VARIANT_DEFAULT]: css`
      background-color: ${theming.color.white};
    `,
    defaultHero: css`
      color: ${theming.color.white};
      background-color: ${theming.color.black};
      padding-top: ${theming.spacing.large};
      padding-left: 0;
      padding-right: 0;
      padding-bottom: ${theming.spacing.mediumPlus};
      a {
        color: ${theming.color.white};
        text-decoration: underline;
      }
    `,
    caseHero: css`
      background-color: ${theming.color.secondary};
      color: ${theming.color.text};
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
      margin-top: ${theming.targetSize.normal};
      display: flex;
      margin-bottom: ${theming.spacing.large};
    `,
    subtle: css`
      background-color: ${theming.color.white};
      padding-left: 0;
      padding-right: 0;
    `,
    contact: css`
      background-color: ${theming.color.white};
      border: 1px solid ${theming.color.line};
      margin-bottom: ${theming.spacing.small};
    `,
    chat: css`
      background: white;
      height: 100%;
      border: 1px solid ${theming.color.line};
      position: relative;
      padding: 0;
    `,
    file: css`
      background-color: ${theming.color.white};
      padding: ${theming.spacing.tiny} 0 ${theming.spacing.tiny}
        ${theming.spacing.tiny};
      font-size: ${theming.font.small};
      border-bottom: 1px solid ${theming.color.line};
      display: grid;
      grid-template-columns: 24px 1fr auto;
      grid-column-gap: ${theming.spacing.small};
      align-items: center;
      ${theming.fontSmoothing};
    `
  },
  Box.themeProps.box
)
