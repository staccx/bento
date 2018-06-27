import { css } from "styled-components"
import { color, font, spacing, registerStyle, fontFamily } from "@staccx/theme"
import { HeadingStyles, fontSmoothing } from "@staccx/base"

export const HeadingStyling = registerStyle(
  {
    documentation: css`
      font-weight: 400;
      font-family: ${fontFamily.body};
      ${p =>
        p.level === 1 &&
        css`
          color: ${color.primary};
        `};
      ${p =>
        p.level === 2 &&
        css`
          font-size: ${font.h4};
          margin-bottom: ${spacing.tiny};
        `};
    `,
    apiExample: css`
      position: relative;
      margin-bottom: ${spacing.small};
      margin-left: -${spacing.small};
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
        padding: 0 ${spacing.small};
      }

      &::after {
        content: "";
        position: absolute;
        top: 50%;
        left: -${spacing.small};
        width: calc(100% + ${spacing.mediumPlus});
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
    documentationMethodHeading: css`
      color: ${color.wcag};
      font-size: ${font.tiny};
      font-family: ${fontFamily.body};
    `
  },
  HeadingStyles.HEADING
)
