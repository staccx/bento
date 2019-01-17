import { theming } from "@staccx/base"
import { css } from "styled-components"

export default theming.createGlobal({
  baseReset: theming.cssResets,
  other: css`
    ::selection {
      background: rgba(255, 126, 104, 0.6);
      color: #3b2c7c;
    }
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      font-weight: 500;
    }
  `
})
