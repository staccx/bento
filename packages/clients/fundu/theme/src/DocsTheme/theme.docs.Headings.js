import { css } from "styled-components"
import {
  color,
  font,
  spacing,
  registerStyle,
  fontFamily,
  fontWeight
} from "@staccx/theme"
import { HeadingStyles, fontSmoothing } from "@staccx/base"

export const HeadingStyling = registerStyle(
  {
    documentation: css`
      font-weight: 400;
      font-family: ${fontFamily.body};
      ${p =>
        p.level === 1 &&
        css`
          text-transform: capitalize;
          color: ${color.primary};
        `};
      ${p =>
        p.level === 2 &&
        css`
          font-size: ${font.h4};
          margin-bottom: ${spacing.tiny};
        `};

      ${p =>
        p.level === 3 &&
        css`
          margin-bottom: ${spacing.tiny};
        `};
    `,
    apiExample: css`
      position: relative;
      margin-bottom: ${spacing.small};
      margin-left: 0;
      background-color: ${color("codeBackground")};
      font-family: ${fontFamily.body};
      font-size: ${font.tiny};
      text-transform: uppercase;
      color: ${color.bg};
      ${fontSmoothing};

      > span {
        position: relative;
        z-index: 5;
        display: inline-block;
        background-color: ${color("codeBackground")};
        padding-right: ${spacing.small};
      }

      &::after {
        content: "";
        position: absolute;
        top: 50%;
        left: 0;
        width: 100%;
        height: 1px;
        background-color: ${color("codeComment")};
      }
    `,
    documentationShortcutHeading: css`
      font-weight: 400;
      font-family: ${fontFamily.body};
      font-size: ${font.h4};
      color: ${color.primary};
      line-height: 1.5;
    `,
    documentationAttrs: css`
      padding-bottom: ${spacing.tiny};
      border-bottom: 1px solid ${color.line};
      color: ${color.text};
      font-size: ${font.base};
      font-family: ${fontFamily.body};
      font-weight: ${fontWeight.bold};
    `,
    documentationAttrType: css`
      color: ${color.text};
      font-size: ${font.base};
      font-family: ${fontFamily.body};
      font-weight: ${fontWeight.bold};
    `,
    documentationAttrResponse: css`
      color: ${color.text};
      font-family: ${fontFamily.body};
      font-weight: ${fontWeight.bold};
      font-size: ${font.base};
    `
  },
  HeadingStyles.HEADING
)
