import { theming } from "@staccx/base"
import { css } from "styled-components"
export default theming.createGlobal({
  themeReset: css`
    ::selection {
      background: rgba(79, 175, 115, 0.3);
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
