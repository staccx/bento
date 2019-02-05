import { theming, Select } from "@staccx/base"
import { css } from "styled-components"

export default theming.createVariants(
  {
    [theming.VARIANT_DEFAULT]: css`
      font-family: "Roboto", sans-serif;
      position: relative;
    `
  },
  Select.themeProps.defaultOptionWrapper
)
