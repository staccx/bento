import { css } from "styled-components"
import {
  registerStyle,
  VARIANT_DEFAULT
} from "@staccx/theme"
import { Modal } from "@staccx/base"
import { opacity } from "@staccx/color"

export const ModalContentStyling = registerStyle(
  {
    [VARIANT_DEFAULT]: css`
      align-self: flex-start;
  },
  Modal.themeProps.content
)
