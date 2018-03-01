import { injectGlobal } from "styled-components"

const cssResets = (customResets = '') => {
  const resets = `
  body, h1, h2, h3, h4, h5, h6,
  blockquote, p, pre,
  dl, dd, ol, ul,
  figure,
  hr,
  fieldset, legend {
    margin:  0;
    padding: 0;
  }
  html {
    overflow-y: scroll;
    overflow-x: hidden;
    min-height: 100%;
    box-sizing: border-box;
    background-color: #fff;
    font-family: sans-serif;
    font-size: 14px;
    color: #2b2b2b;
  }
  a {
    color: #279AF1;
  }
  body {
    min-height: 100vh;
  }
  h1,h2,h3,h4,h5,h6 {
    font-family: serif;
    font-weight: bold;
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
` + customResets

  injectGlobal`${resets}`
}

export default cssResets
