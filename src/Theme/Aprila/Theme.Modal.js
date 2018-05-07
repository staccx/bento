import { css } from "styled-components"
import { transparentize } from "polished"
import {
  registerStyle,
  wrapper,
  spacing,
  VARIANT_DEFAULT,
  color
} from "@staccx/theme"
import { ModalStyles } from "@staccx/base"
import { BounceIn } from "@staccx/animations"

const boxAnimation = css`
  opacity: 0;
  transform: translateY(-12px);
  animation: 0.4s ${BounceIn} cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards 1;
`

export default registerStyle(
  {
    [VARIANT_DEFAULT]: css`
      ${boxAnimation};
    `,
    small: css`
      ${boxAnimation};
      max-width: ${wrapper.small};
      padding-top: ${spacing.medium};
    `
  },
  ModalStyles.MODAL_CONTENT
)

const backdrop = css`
  background-color: ${p => transparentize(0.1, color("primary")(p))};
`
export const ModalBackdropStyle = registerStyle(
  {
    [VARIANT_DEFAULT]: backdrop,
    small: backdrop
  },
  ModalStyles.MODAL_BACKDROP
)
