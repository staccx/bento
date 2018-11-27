import { css } from "styled-components"
import { ProgressBar, theming } from "@staccx/base"

export const ProgressBarBgStyling = theming.createVariants(
  {
    [theming.VARIANT_DEFAULT]: css`
      border: none;
      height: 20px;
    `
  },
  ProgressBar.themeProps.background.name
)

export const ProgressBarBarStyling = theming.createVariants(
  {
    [theming.VARIANT_DEFAULT]: css`
      background-color: ${theming.color("secondaryLight")};
    `
  },
  ProgressBar.themeProps.bar.name
)
