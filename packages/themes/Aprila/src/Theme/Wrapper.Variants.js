import { theming, Wrapper } from "@staccx/base"
import { css } from "styled-components"

const wrapperVariants = theming.createVariants(
  {
    form: css`
      padding-left: ${theming.spacing.large};
      padding-right: ${theming.spacing.large};
      list-style-type: disc;
    `
  },
  Wrapper.themeProps.wrapper
)

export default wrapperVariants
