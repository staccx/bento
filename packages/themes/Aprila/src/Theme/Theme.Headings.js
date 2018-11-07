import { css } from "styled-components"
import { Heading, theming } from "@staccx/base"

export default theming.createVariants(
  {
    accountHeading: css`
      font-size: ${theming.font.input};
      font-weight: ${theming.fontWeight.bold};
      color: ${theming.color("accountHeading")};
    `,
    primary: css`
      font-size: ${theming.font.h2};
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
    `
  },
  Heading.themeProps.heading
)
