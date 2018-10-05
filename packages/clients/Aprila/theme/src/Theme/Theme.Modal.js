import { css } from "styled-components"
import { transparentize } from "polished"
import { Modal, theming } from "@staccx/base"
import { BounceIn } from "@staccx/animations"

const boxAnimation = css`
  opacity: 0;
  transform: translateY(-12px);
  animation: 0.4s ${BounceIn} cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards 1;
`

export default theming.createVariants(
  {
    [theming.VARIANT_DEFAULT]: css`
      ${boxAnimation};
    `,
    small: css`
      ${boxAnimation};
      max-width: ${theming.wrapper.small};
      padding-top: ${theming.spacing.medium};
    `
  },
  Modal.themeProps.content
)

const backdrop = css`
  background-color: ${p => transparentize(0.1, theming.color("primary")(p))};
`
export const ModalBackdropStyle = theming.createVariants(
  {
    [theming.VARIANT_DEFAULT]: backdrop,
    small: backdrop
  },
  Modal.themeProps.backdrop
)
