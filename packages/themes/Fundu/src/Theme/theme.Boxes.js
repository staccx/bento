import { css } from "styled-components"
import { Box, theming } from "@staccx/base"

export const BoxStyling = theming.createVariants(
  {
    actionBox: css``,
    expandLeadContent: css``,
    largeForm: css``,
    paddingVertical: css``,
    illustration: css`
      padding: 0;
      text-align: center;
      margin-bottom: ${theming.spacing.medium};
    `,
    split: css`
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      padding: 0;
    `,
    centeredContent: css`
      text-align: center;
      width: 100%;
    `,
    subtleBox: css`
      background-color: ${theming.color.subtleHover};
    `,
    halves: css`
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: ${theming.spacing.large};
      grid-template-areas: "left right";
      padding: 0;

      @media (max-width: 735px) {
        grid-gap: ${theming.spacing.medium};
      }
      @media (max-width: 710px) {
        grid-template-columns: 100%;
        grid-template-areas: "one";
      }
    `,
    flexHalves: css`
      padding: 0;
      @media (min-width: 711px) {
        display: flex;

        > * {
          width: 50%;
        }
      }
      @media (max-width: 710px) {
        flex-wrap: wrap;
        > * {
          width: 100%;
        }
      }
    `,
    addSigner: css`
      position: relative;
      padding: 0;
    `,
    addSignerBtn: css`
      padding-top: ${theming.spacing.small};
      padding-left: ${theming.spacing.medium};
    `,
    endScreen: css`
      position: relative;
      background-color: ${theming.color.bgGray};

      &::after {
        content: "";
        position: absolute;
        left: 0;
        bottom: 0;
        display: block;
        background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none' viewBox='0 0 1 1'%3e%3cpolygon fill='%23FCFCFC' points='1 0 1 1 0 1'/%3e%3c/svg%3e");
        background-repeat: no-repeat;
        background-size: 100% 100%;
        width: 100%;
        height: calc(7vh - 1px);
        z-index: 0;
      }
    `,
    pickAmounts: css`
      padding: 0;

      > div:first-child {
        padding: ${theming.spacing.medium} ${theming.spacing.large};
      }
    `,
    expandLead: css`
      text-align: center;
    `,
    signDocument: css`
      padding: 0;
      li {
        padding: ${theming.spacing.small} ${theming.spacing.medium};
      }
    `,
    userDefinedAmount: css`
      padding: 0;
      border-top: 1px solid ${theming.color.line};

      input {
        padding-left: ${theming.spacing.large};
      }

      label {
        padding-left: ${theming.spacing.medium};
      }
    `,
    loanDurationContainer: css`
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(110px, 1fr));
      grid-column-gap: 24px;
      grid-row-gap: 24px;
      margin: ${theming.spacing.medium} 0;
      border-top: 2px solid ${theming.color.primary};
      border-bottom: 2px solid ${theming.color.primary};
      align-items: center;
    `,
    loanTerms: css``,
    header: css`
      height: ${theming.spacing("largePlus")};
      border-bottom: 1px solid ${theming.color.line};
      width: 100%;
      display: flex;
      padding-top: 0;
      padding-bottom: 0;
      align-items: center;
    `,
    radioContainer: css`
      display: flex;
    `,
    signerFields: css`
      background-color: ${theming.color.bgGray};
      padding: ${theming.spacing.medium} ${theming.spacing.medium};
      @media (max-width: 450px) {
        > div {
          padding-left: ${theming.spacing.medium} !important;
          padding-right: ${theming.spacing.medium} !important;
        }
        margin-left: -${theming.spacing.medium};
        margin-right: -${theming.spacing.medium};
      }
    `
  },
  Box.themeProps.box
)
