import { css } from "styled-components"
import { theming, Alert } from "@staccx/base"

export default theming.createVariants(
  {
    [theming.VARIANT_DEFAULT]: css`
      background-color: transparent;
      color: ${theming.color.warning};
      padding-left: 0;
      padding-top: 6px;
    `
  },
  {
    banner: css`
      background-color: ${theming.color("bgGray")};
      padding-left: 0;
      padding-top: 6px;
    `
  },
  Alert.themeProps.alert
)
