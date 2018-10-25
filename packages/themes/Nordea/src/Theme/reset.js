import { css } from "styled-components"
import { theming } from "@staccx/base"

export default theming.createGlobal({
  baseReset: theming.cssResets,
  fonts: css`
    @font-face {
      font-family: "NordeaSansSmall";
      src: url("/fonts/NordeaSansSmall-Regular.woff") format("woff");
      font-weight: 400;
    }
    @font-face {
      font-family: "NordeaSansSmall";
      src: url("/fonts/NordeaSansSmall-Bold.woff") format("woff");
      font-weight: 700;
    }

    a {
      color: #0000a0;
      text-decoration: none;
    }
  `
})
