import { css } from "styled-components"
import { registerStyle, wrapper, spacing, VARIANT_DEFAULT } from "@staccx/theme"
import { ModalStyles } from "@staccx/base"

export default registerStyle(
  {
    [VARIANT_DEFAULT]: css``,
    small: css`
      max-width: ${wrapper.small};
      padding-top: ${spacing.medium};
    `
  },
  ModalStyles.MODAL_CONTENT
)
