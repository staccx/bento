import { Schema } from "@staccx/json-schema"
import { theming } from "@staccx/base"
import { css } from "styled-components"

export default theming.createVariants(
  {
    transparent: css`
      opacity: 0;
    `
  },
  Schema.themeProps.form
)
