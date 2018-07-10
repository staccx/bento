import { css } from "styled-components"
import { spacing, registerStyle } from "@staccx/theme"
import { NewBadge } from "@staccx/base"

export const NewBadgeBadgeStyling = registerStyle(
  {
    casesList: css`
      position: static;
      top: auto;
      left: auto;
      bottom: auto;
      width: ${spacing.medium};
      height: ${spacing.medium};
    `
  },
  NewBadge.themeProps.badge
)
