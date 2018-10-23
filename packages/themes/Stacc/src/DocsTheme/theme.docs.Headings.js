import { css } from "styled-components"
import { Heading, fontSmoothing, theming } from "@staccx/base"

export const HeadingStyling = theming.createVariants(
  {
    documentation: css`
      font-weight: 400;
      font-family: ${theming.fontFamily.body};
      ${p =>
        p.level === 1 &&
        css`
          text-transform: capitalize;
          color: ${theming.color.primary};
        `};
      ${p =>
        p.level === 2 &&
        css`
          font-size: ${theming.font.h4};
          margin-bottom: ${theming.spacing.tiny};
        `};

      ${p =>
        p.level === 3 &&
        css`
          margin-bottom: ${theming.spacing.tiny};
        `};
    `,
    apiExample: css`
      position: relative;
      margin-bottom: ${theming.spacing.small};
      margin-left: 0;
      background-color: ${theming.color("codeBackground")};
      font-family: ${theming.fontFamily.body};
      font-size: ${theming.font.tiny};
      text-transform: uppercase;
      color: ${theming.color.bg};
      ${fontSmoothing};

      > span {
        position: relative;
        z-index: 5;
        display: inline-block;
        background-color: ${theming.color("codeBackground")};
        padding-right: ${theming.spacing.small};
      }

      &::after {
        content: "";
        position: absolute;
        top: 50%;
        left: 0;
        width: 100%;
        height: 1px;
        background-color: ${theming.color("codeComment")};
      }
    `,
    documentationShortcutHeading: css`
      font-weight: 400;
      font-family: ${theming.fontFamily.body};
      font-size: ${theming.font.h4};
      color: ${theming.color.primary};
      line-height: 1.5;
    `,
    documentationAttrs: css`
      color: ${theming.color.text};
      font-size: ${theming.font.base};
      font-family: ${theming.fontFamily.body};
      font-weight: ${theming.fontWeight.bold};
    `,
    documentationAttrType: css`
      color: ${theming.color.text};
      font-size: ${theming.font.base};
      font-family: ${theming.fontFamily.body};
      font-weight: ${theming.fontWeight.bold};
    `,
    documentationAttrResponse: css`
      color: ${theming.color.text};
      font-family: ${theming.fontFamily.body};
      font-weight: ${theming.fontWeight.bold};
      font-size: ${theming.font.base};
    `,
    menuHeading: css`
      color: ${theming.color.primary};
      font-size: ${theming.font.base};
      margin-top: ${theming.spacing.tiny};
      font-family: ${theming.fontFamily("mono")};
    `
  },
  Heading.themeProps.heading
)
