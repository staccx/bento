import { css } from "styled-components"
import { registerStyle, wrapper } from "@staccx/theme"
import { Wrapper } from "@staccx/base"

export default registerStyle(
  {
    bib: css`
      max-width: ${wrapper.small};
    `
  },
  Wrapper.themeProps.wrapper
)
