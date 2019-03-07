import { css } from "styled-components"
import { Divider, theming } from "@staccx/base"

export const Rule = theming.createVariants(
  {
    [theming.VARIANT_DEFAULT]: css`
      background-color: ${theming.color.line};
    `,
    prominent: css`
      background-color: ${theming.color.secondary};
    `
  },
  Divider.themeProps.rule
)
