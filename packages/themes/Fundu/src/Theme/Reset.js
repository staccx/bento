import { css } from "styled-components"
import { theming } from "@staccx/base"

export default theming.createGlobal({
  baseReset: theming.cssResets,
  other: css`
    input:-webkit-autofill {
      background-color: ${theming.color.bg} !important;
    }
  `
})
