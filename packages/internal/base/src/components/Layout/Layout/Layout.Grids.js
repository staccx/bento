import { wrapper } from "@staccx/theme"
import { css } from "styled-components"

export default {
  stonehenge: css`
    grid-template-columns: 0.5fr minmax(320px, 450px) minmax(320px, 450px) 0.5fr;
    grid-template-rows: auto auto auto 1fr;
    grid-template-areas:
      "header  header  header  header"
      ".  main  main  ."
      ".  body  aside  ."
      "footer  footer  footer  footer";
    @media only screen and (max-width: 730px) {
      grid-template-columns: 12px 1fr 12px;
      grid-template-rows: auto auto auto auto;
      grid-template-areas:
        ". header ."
        ". main ."
        ". body ."
        ". aside ."
        ". footer .";
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
    @media only screen and (max-width: 500px) {
      grid-template-columns: 12px 1fr 12px;
      grid-template-rows: auto auto auto auto;
      grid-column-gap: 0;
    }
  `,
  fiftyFifty: css`
    display: grid;
    grid-template-columns: 1fr 1fr;
    @media only screen and (max-width: 730px) {
      grid-template-columns: 1fr;
    }
  `,
  rows: css`
    grid-auto-flow: row;
  `,
  form: css`
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  `,
  centered: css`
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 12px;
    grid-template-areas:
      ". main main ."
      ". main main .";
    height: 100vh;
    > * {
      grid-area: main;
      align-self: center;
      justify-self: center;
    }
  `,
  dashboard: css`
    grid-template-columns: 340px 1fr;
    grid-gap: 0;
    min-height: 100vh;
    grid-template-areas: "sidebar main";
  `
}
