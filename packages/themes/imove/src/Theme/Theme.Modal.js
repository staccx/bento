import { css } from "styled-components"
import { Modal, theming } from "@staccx/base"

export const ModalContentStyling = theming.createVariants(
  {
    [theming.VARIANT_DEFAULT]: css`
      align-self: flex-start;
    `
  },
  Modal.themeProps.content
)
