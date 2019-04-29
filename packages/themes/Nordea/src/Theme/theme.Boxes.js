import { css } from "styled-components"
import { Box, fontSmoothing, theming } from "@staccx/base"

export const BoxStyling = theming.createVariants(
  {
    [theming.VARIANT_DEFAULT]: css`
      background-color: ${theming.color.white};
    `,
    defaultHero: css`
      background-color: ${theming.color.secondary};
      padding-top: ${theming.spacing.large};
      padding-left: 0;
      padding-right: 0;
      padding-bottom: ${theming.spacing.mediumPlus};
    `,
    statsFloor: css`
      background-color: ${theming.color.secondary};
      padding-top: ${theming.spacing.large};
      padding-left: 0;
      padding-right: 0;
      padding-bottom: ${theming.spacing("largePlus")};
    `,
    newsHero: css`
      background-color: ${theming.color.white};
      padding-top: ${theming.spacing.large};
      padding-left: 0;
      padding-right: 0;
      padding-bottom: ${theming.spacing.mediumPlus};
    `,
    caseHero: css`
      background-color: ${theming.color.secondary};
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
      margin-top: calc(-${theming.targetSize.normal} / 2);
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
      display: flex;
      justify-content: space-between;
      align-items: center;
    `,
    chat: css`
      background: white;
      height: 100%;
      position: relative;
      padding: 0;
    `,
    file: css`
      background-color: ${theming.color.white};
      padding: ${theming.spacing.tiny} ${theming.spacing.tiny}
        ${theming.spacing.tiny} ${theming.spacing.medium};
      font-size: ${theming.font.small};
      border-bottom: 1px solid ${theming.color.bg};
      display: grid;
      grid-template-columns: 24px 1fr auto;
      grid-column-gap: ${theming.spacing.small};
      align-items: center;
      ${fontSmoothing};
    `,
    overviewPortal: css`
      background-color: ${theming.color("bg1")};
      padding-left: 0;
      padding-right: 0;
      padding-top: ${theming.spacing.large};
      padding-bottom: ${theming.spacing.large};
    `,
    carConfigHero: css`
      background-color: ${theming.color.secondary};
      padding-top: ${theming.spacing.large};
      padding-left: 0;
      padding-right: 0;
      padding-bottom: ${theming.spacing.huge};
    `,
    newCase: css`
      background-color: ${theming.color("bg1")};
      padding-left: 0;
      padding-right: 0;
    `,
    filter: css`
      position: absolute;
      background-color: ${theming.color.white};
      border: 1px solid ${theming.color("g1")};
      border-radius: 14px;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.14);
      padding: ${theming.spacing.medium};
      min-width: 296px;
      transform: translateY(${theming.spacing.tiny});
    `,
    statsContainer: css`
      background-color: ${theming.color("b1")};
    `
  },
  Box.themeProps.box
)
