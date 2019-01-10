import React from "react"
import { css } from "styled-components"
import { theming, Layout } from "@staccx/base"
export default theming.createVariants(
  {
    navigation: css`
      grid-template-areas: ". previous next .";
      grid-auto-flow: row;
      grid-template-columns: 1fr repeat(2, 0.25fr) 1fr;
    `
  },
  Layout.themeProps.container
)
