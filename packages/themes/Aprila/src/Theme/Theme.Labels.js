import { css } from "styled-components"
import { theming, Label } from "@staccx/base"

export const LabelStyling = theming.createVariants(
  {
    schemaDescription: css`
      background-color: red;
    `
  },
  Label.themeProps.label
)
