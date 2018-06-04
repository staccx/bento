import { css } from "styled-components"
import { color, spacing, registerStyle } from "@staccx/theme"
import { BoxStyles } from "@staccx/base"

const tileStyle = css`
  background: ${color.white};
  box-shadow: rgba(0, 0, 75, 0.015) 0px 2px 2px,
    rgba(0, 0, 75, 0.015) 0px 4px 4px, rgba(0, 0, 75, 0.015) 0px 8px 8px,
    rgba(0, 0, 75, 0.015) 0px 16px 16px, rgba(0, 0, 75, 0.015) 0px 32px 32px,
    rgba(0, 0, 75, 0.015) 0px 64px 64px;
  border: 1px solid ${color.line};
  border-radius: 2px;
  -webkit-column-break-inside: avoid;
  break-inside: avoid;
  page-break-inside: avoid;
`

export const BoxStyling = registerStyle(
  {
    actionBox: css`
      ${tileStyle};
      padding: 0;
      margin-bottom: ${spacing.medium};
    `,
    expandLeadContent: css`
      ${tileStyle};
      padding: 0;
      margin-bottom: ${spacing.medium};
    `,
    largeForm: css`
      display: flex;
      justify-content: space-between;
      padding: 0;

      > * {
        flex-grow: 1;
        flex-basis: 50%;

        &:last-child {
          border-left: 1px solid ${color.line};
        }
      }
    `,
    paddingVertical: css`
      padding: 0;
      padding-top: ${spacing.medium};
      padding-bottom: ${spacing.medium};
    `,
    illustration: css`
      padding: 0;
      text-align: center;
      margin-bottom: ${spacing.medium};
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
      background-color: ${color.subtleHover};
    `,
    halves: css`
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: ${spacing.large};
      grid-template-areas: "left right";
      padding: 0;

      @media (max-width: 735px) {
        grid-gap: ${spacing.medium};
      }
      @media (max-width: 710px) {
        grid-template-columns: 100%;
        grid-template-areas: "one";
      }
    `,
    addSigner: css`
      position: relative;
      padding: 0;
    `,
    addSignerBtn: css`
      padding-top: ${spacing.small};
      padding-left: ${spacing.medium};
    `,
    endScreen: css`
      position: relative;
      background-color: ${color.bgGray};

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
        padding: ${spacing.medium} ${spacing.large};
      }
    `,
    expandLead: css`
      padding: 0;
      text-align: center;
      margin-bottom: ${spacing.medium};
    `,
    signDocument: css`
      padding: 0;
      li {
        padding: ${spacing.small} ${spacing.medium};
      }
    `,
    userDefinedAmount: css`
      padding: 0;
      border-top: 1px solid ${color.line};

      input {
        padding-left: ${spacing.large};
      }

      label {
        padding-left: ${spacing.medium};
      }
    `
  },
  BoxStyles.BOX
)
