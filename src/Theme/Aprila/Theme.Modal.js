import { css } from "styled-components"
import { registerStyle, wrapper, spacing } from "@staccx/theme"
import { ModalStyles } from "@staccx/base"

export default registerStyle(
  {
    small: css`
      max-width: ${wrapper.small};
      padding-top: ${spacing.medium};
    `
  },
  ModalStyles.MODAL_CONTENT
)
