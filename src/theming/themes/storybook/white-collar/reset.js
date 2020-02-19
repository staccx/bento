import { css } from "styled-components"
import createGlobal from "../../../utils/createGlobal"
import cssResets from "../../../styles/cssResets"
import { color } from "../../../index"

export default createGlobal({
  baseReset: cssResets,
  themeReset: css`
    ::selection {
      background: rgba(14, 43, 61, 0.3);
    }

    html {
      background-color: #fff;
      line-height: 1.6;
    }

    h1,
    h2 {
      line-height: 1.2;
    }

    h3,
    h4,
    h5,
    h6,
    strong {
      font-weight: 600;
    }

    a {
      color: ${color("link")};
    }
  `
})
