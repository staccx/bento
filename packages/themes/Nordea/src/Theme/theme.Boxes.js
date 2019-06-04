import { css, keyframes } from "styled-components"
import { Box, fontSmoothing, theming } from "@staccx/base"

const fadeInLarge = keyframes`
  from {
    opacity: 0;
    transform:  translate(-50%, 90%);

  }

  to {
    opacity: 1;
    transform:  translate(-50%, 100%);
  }
`

const fadeInMedium = keyframes`
  from {
    opacity: 0;
    transform:  translate(-100%, 90%);

  }

  to {
    opacity: 1;
    transform:  translate(-100%, 100%);
  }
`

const popInFromBottom = keyframes`
from {
  transform:  translate(0, 90%);

}

to {
  transform:  translate(0,0);
}
`

const fadeOut = keyframes`
from {
  opacity: 1;
  transform:  translate(0,0);
}

to {
  opacity: 0;
  transform:  translate(0,60%);
}
`

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
    `,
    layoutBox: css`
      color: ${theming.color.text};
      background-color: ${theming.color.white};
      box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.1);

      /* Small-screen Dissolve */
      @media (max-width: 489px) {
        padding: ${p =>
          p.smallScreenDissolve
            ? "0"
            : p.size === "flush"
            ? "0"
            : theming.spacing.medium};
        background-color: ${p => p.smallScreenDissolve && "transparent"};
        box-shadow: ${p => p.smallScreenDissolve && "none"};
      }
    `,
    notificationMsgs: css`
      position: absolute;
      width: 460px;
      bottom: 0;
      left: 50%;
      transform: translate(-50%, 100%);
      color: ${theming.color.text};
      background-color: ${theming.color.white};
      box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.1);
      z-index: 500;
      max-height: 390px;
      overflow-y: scroll;
      overscroll-behavior: contain;

      &::-webkit-scrollbar-track {
        background-color: ${theming.color.white};
      }

      &::-webkit-scrollbar {
        width: 6px;
        background-color: ${theming.color.white};
      }

      &::-webkit-scrollbar-thumb {
        background-color: ${theming.color("bg3")};
      }

      @media (min-width: 580px) {
        right: 0;
        transform: translate(-100%, 100%);
        animation: ${fadeInMedium} 0.2s ease-out forwards;
      }

      @media (min-width: 1520px) {
        left: 50%;
        transform: translate(-50%, 100%);
        animation: ${fadeInLarge} 0.2s ease-out forwards;
      }
    `,
    uploadNotificationOuter: css`
      position: fixed;
      bottom: 0;
      left: 0;
      width: 100%;
      z-index: 901;
      background-color: ${theming.color.white};
      box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.1);
      animation: ${popInFromBottom} 0.4s ease-out forwards;

      ${p =>
        p.animateOut &&
        css`
          animation: ${fadeOut} 0.4s ease-out forwards;
        `}
    `,
    uploadNotificationInner: css`
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: ${theming.spacing.medium};
      color: ${theming.color.wcag};
    `
  },
  Box.themeProps.box
)
