import { css } from "styled-components"
import { RadioPill, theming } from "@staccx/base"

/* label */

export const RadioPillContainerStyling = theming.createVariants(
  {
    breadcrumbSelect: css`
      text-align: left;
    `
  },
  RadioPill.themeProps.container
)
