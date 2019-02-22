import { theming } from "@staccx/base"
import { css } from "styled-components"
export default theming.createGlobal({
  baseReset: theming.cssResets,
  themeReset: css`
    ::selection {
      background: rgba(29, 135, 105, 0.8);
      color: #fff;
    }

    html {
      background-color: #fff;
      font-size: 16px;
      line-height: 1.6;
    }

    h1,
    h2 {
      line-height: 1.2;
    }
  `
})
