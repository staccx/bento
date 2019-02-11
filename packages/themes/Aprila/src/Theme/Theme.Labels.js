import { css } from "styled-components"
import { theming, Label } from "@staccx/base"

export const LabelStyling = theming.createVariants(
  {
    schemaDescription: css`
      background-color: red;
    `,
    description: css`
      padding-bottom: 0;
    `
  },
  Label.themeProps.label
)
