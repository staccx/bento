import { css } from "styled-components"
import { theming } from "@staccx/base"

export default theming.createGlobal({
  baseReset: theming.cssResets,
  fonts: css`
    @font-face {
      font-family: "NordeaSansSmall";
      src: url("/fonts/NordeaSansSmallWeb-Regular.woff2") format("woff2"),
        url("/fonts/NordeaSansSmallWeb-Regular.woff2") format("woff");
      font-weight: 400;
    }
    @font-face {
      font-family: "NordeaSansSmall";
      src: url("/fonts/NordeaSansSmallWeb-Bold.woff2") format("woff2"),
        url("/fonts/NordeaSansSmallWeb-Bold.woff2") format("woff");
      font-weight: 700;
    }

    @font-face {
      font-family: "NordeaSansLarge";
      src: url("/fonts/NordeaSansLargeWeb-Bold.woff2") format("woff2"),
        url("/fonts/NordeaSansLargeWeb-Bold.woff2") format("woff");
      font-weight: 700;
    }

    @font-face {
      font-family: "NordeaSansLarge";
      src: url("/fonts/NordeaSansLargeWeb-Regular.woff2") format("woff2"),
        url("/fonts/NordeaSansLargeWeb-Regular.woff2") format("woff");
      font-weight: 400;
    }

    a {
      color: #0000a0;
      text-decoration: none;
    }
  `
})
