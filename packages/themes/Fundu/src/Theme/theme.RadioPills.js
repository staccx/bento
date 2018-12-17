import { css } from "styled-components"
import { RadioPill, theming } from "@staccx/base"

/* label */

export const RadioPillContainerStyling = theming.createVariants(
  {
    pageSelect: css`
      text-align: left;
    `
  },
  RadioPill.themeProps.container
)
