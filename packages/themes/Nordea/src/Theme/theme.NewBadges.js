import { css } from "styled-components"
import { NewBadge, theming } from "@staccx/base"

export const NewBadgeBadgeStyling = theming.createVariants(
  {
    casesList: css`
      position: static;
      top: auto;
      left: auto;
      bottom: auto;
      width: ${theming.spacing.medium};
      height: ${theming.spacing.medium};
    `
  },
  NewBadge.themeProps.badge
)
