import { css } from "styled-components"
import { SkeletonPulse, theming } from "@staccx/base"

export const SkeletonPulseStyling = theming.createVariants(
  {
    summaryValue: css`
      background-image: linear-gradient(
        -90deg,
        #99ccff1a 0%,
        #99ccff33 50%,
        #99ccff1a 100%
      );
    `
  },
  SkeletonPulse.themeProps.pulse
)
