import { css } from "styled-components"
import { RadioPill, theming } from "@staccx/base"

/* label */

export const RadioPillContainerStyling = theming.createVariants(
  {
    pageSelect: css`
      text-align: left;
      margin-left: calc(-1 * ${theming.spacing.small});
    `
  },
  RadioPill.themeProps.container
)
