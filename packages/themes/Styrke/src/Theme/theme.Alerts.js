import { css } from "styled-components"
import { Alert, theming } from "@staccx/base"

export const AlertStyling = theming.createVariants(
  {
    error: css`
      background-color: ${theming.color.warning};
      color: ${theming.color.white};
      padding: ${theming.spacing.small};
      position: relative;
      margin-top: 3px;

      &::after {
        content: "";
        width: 0;
        height: 0;
        border-left: 12px solid transparent;
        border-right: 12px solid transparent;
        border-bottom: 12px solid ${theming.color.warning};
        top: -12px;
        left: 24px;
        position: absolute;
      }
    `
  },
  Alert.themeProps.alertWarning
)
