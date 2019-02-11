import { css } from "styled-components"
import { Heading, theming } from "@staccx/base"

export default theming.createVariants(
  {
    accountHeading: css`
      font-size: ${theming.font.input};
      font-weight: ${theming.fontWeight.bold};
      color: ${theming.color("accountHeading")};
    `,
    accountSubheading: css`
      font-size: ${theming.font.h2};
      font-weight: ${theming.fontWeight.normal};
      color: ${theming.color.primary};
      margin-bottom: ${theming.spacing.tiny};
    `,
    primary: css`
      font-size: ${theming.font.h2};
    `,
    accountHeadingText: css`
      font-size: ${theming.font.input};
      font-weight: normal;
    `,
    withdrawSubtitle: css`
      font-size: ${theming.font.h6};
      text-align: left;
      color: ${theming.color.wcag};
      font-weight: normal;
      margin-bottom: ${theming.spacing.medium};
    `,
    subHeading: css`
      color: ${theming.color.primary};
      font-size: ${theming.font.h3};
    `,
    annualStatmentHeading: css`
      font-size: ${theming.font.base};
      color: ${theming.color.primary};
    `,
    schemaHeading: css`
      margin-top: 0;
      margin-bottom: ${theming.spacing.tiny};
      color: ${theming.color.primary};
      font-weight: ${p =>
        p.level === 1 && `${theming.fontWeight("normal")(p)}`};
      margin-top: ${p => p.level === 3 && `${theming.spacing("medium")(p)}`};
    `
  },
  Heading.themeProps.heading
)
