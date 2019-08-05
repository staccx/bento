import { css } from "styled-components"
import { Wrapper, theming } from "@staccx/base"

const WrapperVariants = theming.createVariants(
  {
    [theming.VARIANT_DEFAULT]: css`
      padding-left: ${theming.spacing.tiny} !important;
      padding-top: ${theming.spacing.small};
    `
  },
  Wrapper.themeProps.wrapper
)

export default WrapperVariants
