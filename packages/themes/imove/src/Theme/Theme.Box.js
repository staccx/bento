import { css } from "styled-components"
import { Box, theming } from "@staccx/base"

export default theming.createVariants(
  {
    [theming.VARIANT_DEFAULT]: css``,
    menu: css`
      position: relative;
      z-index: 10;
      padding: ${theming.spacing.small} ${theming.spacing.medium};
      width: 100%;

      @media screen and (max-width: 768px) {
        background: ${theming.color.white};
        position: fixed;
        left: 0;
        bottom: 0;
        box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.15);
        z-index: 100;
      }
    `,
    myCarHeader: css`
      background-color: ${theming.color("bgGray")};
      position: relative;
      width: 100vw;
      left: 50%;
      right: 50%;
      margin-left: -50vw;
      margin-right: -50vw;
      margin-bottom: ${theming.spacing.huge};
    `,
    carWrapper: css`
      padding: 0;
      margin-bottom: ${theming.spacing.large};
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
      padding: ${theming.spacing.large} ${theming.spacing.medium}
        ${theming.spacing.medium};
      background-color: ${theming.color.primary};
      color: ${theming.color.white};
      border-radius: 22px;
      border-top-right-radius: 0;

      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      label {
        color: ${theming.color.white};
      }

      @media screen and (min-width: 768px) {
        border-radius: 0;
      }
    `,
    filterContainer: css`
      position: relative;
      z-index: 51;
      width: auto;
      background-color: ${theming.color.primary};
      color: ${theming.color.white};
      border-radius: 22px;
      border-top-right-radius: 0;

      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      label {
        color: ${theming.color.white};
      }

      @media screen and (min-width: 768px) {
        width: 100%;
        border-radius: 0;
      }
    `,
    filterOuter: css`
      position: relative;
      display: flex;
      justify-content: flex-end;

      @media screen and (min-width: 768px) {
        justify-content: center;
      }
    `,
    subtleLeft: css`
      padding: 0;
      flex-basis: 60%;

      @media screen and (max-width: 768px) {
        margin-left: -${theming.spacing.medium};
        padding: ${theming.spacing.mediumPlus} ${theming.spacing.mediumPlus};
        background-color: ${theming.color("bgGray")};
        color: ${theming.color.text};
        border-top-right-radius: 22px;
        border-bottom-right-radius: 22px;
      }
    `,
    splash: css`
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      background-color: rgba(0, 0, 0, 0.5);
    `,
    postCodeInput: css`
      position: relative;
      display: flex;
      justify-content: space-between;
      color: ${theming.color.white};
      border-bottom: 1px solid ${theming.color.white};

      :focus-within {
        border-color: ${theming.color("white")};
      }

      > div {
        flex-basis: calc(100% - 54px);

        > div {
          width: 100%;
        }
      }
    `,
    waitingListInput: css`
      position: relative;
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      border-bottom: 1px solid ${theming.color.primary};

      :focus-within {
        border-color: ${theming.color("darkBlue")};
      }

      > div {
        flex-basis: calc(100% - 54px);

        > div {
          width: 100%;
        }
      }
    `,
    bottomButtons: css`
      > * {
        &:not-last-child {
          display: inline-block;
          margin-right: ${theming.spacing.medium};
        }
      }
    `
  },
  Box.themeProps.box
)
