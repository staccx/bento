import { css } from "styled-components"
import { Wrapper, theming } from "@staccx/base"

export default theming.createVariants(
  {
    bib: css`
      max-width: ${theming.wrapper.small};
    `
  },
  Wrapper.themeProps.wrapper
)
