import { css } from "styled-components"
import { registerStyle, wrapper, spacing, VARIANT_DEFAULT } from "@staccx/theme"
import { ModalStyles } from "@staccx/base"
import { ScaleInY } from "@staccx/animations"

export default registerStyle(
  {
    [VARIANT_DEFAULT]: css`
      transform: scaleY(0);
      animation: 0.2s ${ScaleInY} ease-out forwards 1;
    `,
    small: css`
      max-width: ${wrapper.small};
      padding-top: ${spacing.medium};
    `
  },
  ModalStyles.MODAL_CONTENT
)
