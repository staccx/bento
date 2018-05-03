import { wrapper, spacing } from "@staccx/theme"
import { css } from "styled-components"

export default {
  stonehenge: css`
    grid-template-columns: 1fr minmax(320px, 1fr) minmax(320px, 1fr) 1fr;
    grid-template-areas:
      "header  header  header  header"
      ".  main  main  ."
      ".  body  aside  ."
      "footer  footer  footer  footer";
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
