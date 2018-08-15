import { css } from "styled-components"
import { registerStyle } from "@staccx/theme"
import { Input } from "@staccx/base"

export const InputStyling = registerStyle(
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
