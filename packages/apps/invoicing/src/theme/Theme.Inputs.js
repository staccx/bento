import { css } from "styled-components"
import { Input, theming } from "@staccx/base"

export const InputStyling = theming.createVariants(
  {
    invoiceLine: css`
      border-color: transparent;

      ${p =>
        p.first
          ? null
          : `
      text-align: right;
      `};
    `
  },
  Input.themeProps.input
)
