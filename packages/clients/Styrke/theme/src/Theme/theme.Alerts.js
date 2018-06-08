import { css } from "styled-components"
import { color, spacing, registerStyle } from "@staccx/theme"
import { AlertStyles } from "@staccx/base"

export const AlertStyling = registerStyle(
  {
    error: css`
      background-color: ${color.warning};
      color: ${color.white};
      padding: ${spacing.small};
      position: relative;
      margin-top: 3px;

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
  AlertStyles.ALERT_WARNING
)
