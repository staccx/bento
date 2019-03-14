import { Label, theming } from "@staccx/base"
import { css } from "styled-components"

export default [
  theming.createVariants(
    {
      cool: css`
        color: cornflowerblue;
      `
    },
    Label.themeProps.label
  )
]
