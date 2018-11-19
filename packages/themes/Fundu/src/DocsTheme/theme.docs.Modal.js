import { css } from "styled-components"
import { Modal, theming } from "@staccx/base"

export const ModalStyling = theming.createVariants(
  {
    [theming.VARIANT_DEFAULT]: css`
      text-align: center;
      max-width: 400px;
    `
  },
  Modal.themeProps.content
)
