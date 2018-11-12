import { css } from "styled-components"
import { Heading, theming } from "@staccx/base"

const stepHeading = css`
  margin-bottom: 0;
  color: ${theming.color.primary};
  font-size: ${theming.font.h2};
  font-weight: bold;
  line-height: 1.25;
`

export const HeadingStyling = theming.createVariants(
  {
    stepHeading: stepHeading,
    formSection: css`
      color: ${theming.color.primary};
      font-size: ${theming.font.h3};
      margin-top: ${p => (p.flush ? 0 : theming.spacing("medium")(p))};
    `,
    endScreen: stepHeading,
    boxHeading: css`
      font-family: ${theming.fontFamily.body};
      font-size: ${theming.font.base};
      font-weight: 300;
      margin-bottom: ${theming.spacing.tiny};
      color: ${theming.color.primary};
    `,
    company: css`
      font-size: ${theming.font.input};
      color: ${theming.color.primary};
    `
  },
  Heading.themeProps.heading
)
