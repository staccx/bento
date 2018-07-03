import { css } from "styled-components"
import { color, spacing, registerStyle } from "@staccx/theme"
import { Alert } from "@staccx/base"

export const AlertStyling = registerStyle(
  {
    error: css`
      background-color: ${color.warning};
      color: ${color.white};
      padding: ${spacing.small} ${spacing.medium};
      position: relative;
      &::after {
        content: "";
        width: 0;
        height: 0;
        border-left: 12px solid transparent;
        border-right: 12px solid transparent;
        border-bottom: 12px solid ${color.warning};
        top: -12px;
        left: 24px;
        position: absolute;
      }
    `
  },
  Alert.themeProps.alertWarning
)
