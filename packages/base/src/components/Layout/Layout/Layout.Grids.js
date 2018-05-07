import { wrapper, spacing } from "@staccx/theme"
import { css } from "styled-components"

export default {
  stonehenge: css`
    grid-template-columns: 0.5fr minmax(320px, 410px) minmax(320px, 410px) 0.5fr;
    grid-template-rows: auto auto auto 1fr;
    grid-template-areas:
      "header  header  header  header"
      ".  main  main  ."
      ".  body  aside  ."
      "footer  footer  footer  footer";

    @media screen and (max-width: 1010px) {
      grid-template-columns: 12px 1fr 12px;
      grid-template-rows: auto auto auto auto;
      grid-template-areas:
        ".  header  ."
        ".  main  ."
        ".  body  ."
        ".  aside  ."
        ".  footer  .";
      grid-column-gap: 0;
    }
  `,
  columnNarrow: css`
    grid-template-columns: 1fr ${wrapper.small} 1fr;
    grid-template-areas:
      ".  header  ."
      ".  main  ."
      ".  body  ."
      ".  aside  ."
      ".  footer  .";
    grid-auto-flow: column;
  `,
  rows: css`
    grid-auto-flow: row;
  `
}
