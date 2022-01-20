import color from "../convenience/color"
import font from "../convenience/font"
import fontFamily from "../convenience/fontFamily"
import fontWeight from "../convenience/fontWeight"

// language=CSS
export default `
  body,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  blockquote,
  p,
  pre,
  dl,
  dd,
  ol,
  ul,
  figure,
  hr,
  fieldset,
  legend {
    margin: 0;
    padding: 0;
  }
  html {
    overflow-y: scroll;
    overflow-x: hidden;
    min-height: 100%;
    box-sizing: border-box;
    background-color: ${color.bg};
    font-family: ${fontFamily.body}, Sans-Serif;
    font-size: 14px;
    color: ${color.text};
    line-height: ${font.lineHeight};
    -ms-text-size-adjust: 100%; /* 2 */
    -webkit-text-size-adjust: 100%; /* 2 */
  }
  a {
    color: ${color.link};
  }
  body {
    min-height: 100vh;
    margin: 0;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: ${fontFamily.heading}, Sans-Serif;
    font-weight: ${fontWeight.bold};
    font-size: 1em;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  ul,
  ol {
    list-style-type: none;
  }

  li > {
    ol,
    ul {
      margin-bottom: 0;
    }
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  fieldset {
    min-width: 0; /* [1] */
    border: 0;
  }

  * {
    &,
    &:before,
    &:after {
      box-sizing: inherit;
    }
  }

  img {
    max-width: 100%;
  }

  button,
  input,
  optgroup,
  select,
  textarea {
    font-family: ${fontFamily.body}, Sans-Serif;
    font-size: 100%; /* 1 */
    line-height: 1.15; /* 1 */
    margin: 0; /* 2 */
  }

  button,
  input {
    /* 1 */
    overflow: visible;
  }

  button,
html [type="button"], /* 1 */
[type="reset"],
[type="submit"] {
    -webkit-appearance: button; /* 2 */
  }

  button::-moz-focus-inner,
  [type="button"]::-moz-focus-inner,
  [type="reset"]::-moz-focus-inner,
  [type="submit"]::-moz-focus-inner {
    border-style: none;
    padding: 0;
  }

  button:-moz-focusring,
  [type="button"]:-moz-focusring,
  [type="reset"]:-moz-focusring,
  [type="submit"]:-moz-focusring {
    outline: 1px dotted ButtonText;
  }

  legend {
    font-weight: ${fontWeight.bold};
    box-sizing: border-box; /* 1 */
    color: inherit; /* 2 */
    display: table; /* 1 */
    max-width: 100%; /* 1 */
    padding: 0; /* 3 */
    white-space: normal; /* 1 */
  }

  progress {
    display: inline-block; /* 1 */
    vertical-align: baseline; /* 2 */
  }

  textarea {
    overflow: auto;
  }

  [type="checkbox"],
  [type="radio"] {
    box-sizing: border-box; /* 1 */
    padding: 0; /* 2 */
  }

  [type="number"]::-webkit-inner-spin-button,
  [type="number"]::-webkit-outer-spin-button {
    height: auto;
  }

  [type="search"] {
    -webkit-appearance: textfield; /* 1 */
    outline-offset: -2px; /* 2 */
  }

  [type="search"]::-webkit-search-cancel-button,
  [type="search"]::-webkit-search-decoration {
    -webkit-appearance: none;
  }

  ::-webkit-file-upload-button {
    -webkit-appearance: button; /* 1 */
    font: inherit; /* 2 */
  }

  hr {
    box-sizing: content-box; /* 1 */
    height: 0; /* 1 */
    overflow: visible; /* 2 */
  }

  pre {
    font-family: monospace, monospace; /* 1 */
    font-size: 1em; /* 2 */
  }

  b,
  strong {
    font-weight: inherit;
  }
  b,
  strong {
    font-weight: ${fontWeight.bold};
  }

  code,
  kbd,
  samp {
    font-family: monospace, monospace; /* 1 */
    font-size: 1em; /* 2 */
  }

  small {
    font-size: 80%;
  }

  sub,
  sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }

  sub {
    bottom: -0.25em;
  }

  sup {
    top: -0.5em;
  }
`
