import { css } from "styled-components"
import { color, spacing, registerStyle, VARIANT_DEFAULT } from "@staccx/theme"
import { BoxStyles } from "@staccx/base"

const subtleBox = css`
  padding: ${spacing.small};
  border-radius: 0;
  background-color: ${color.bgGray};
`

export const BoxStyling = registerStyle(
  {
    [VARIANT_DEFAULT]: css`
      border-radius: 0;
    `,
    section: css`
      border-radius: 0;
      border-bottom: 1px solid ${color.line};
    `,
    actionBox: css`
      padding: 0;
    `,
    actionBoxContent: css`
      padding: ${spacing.medium} 0 0 0;
    `,
    expandLeadContent: css`
      padding: 0;
      background-color: ${color("bgBlue")};

      td {
        border-color: ${color("bgBlueDark")};
      }
    `,
    largeForm: css`
      padding: 0;
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
    subtleBox: subtleBox,
    signerFields: subtleBox,
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
      margin: ${spacing.medium} 0 ${spacing.small};
      padding: 0;
    `,
    addSignerBtn: css`
      padding-top: ${spacing.small};
      padding-left: 0;
    `,
    pickAmounts: css`
      padding: ${spacing.medium} 0 0;
    `,
    offerTable: css`
      border-top: 3px solid ${color.primary};
      border-bottom: 3px solid ${color.primary};
      padding: 0 0 ${spacing.small};
      border-radius: 0;
    `,
    expandLead: css`
      padding: 0;
      margin: ${spacing.medium} 0;
    `,
    signDocument: css`
      padding: 0;
    `,
    userDefinedAmount: css`
      padding: ${spacing.medium};
      background-color: ${color("bgBlue")};
    `
  },
  BoxStyles.BOX
)
