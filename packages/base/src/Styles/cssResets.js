import { color, fontFamily } from "@staccx/theme"

export const reset = `
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
    background-color: ${color.bg};
    font-family: ${fontFamily.body};
    font-size: 14px;
    color: ${color.text};
  }
  a {
    color: ${color.link};
  }
  body {
    min-height: 100vh;
  }
  h1,h2,h3,h4,h5,h6 {
    font-family: ${fontFamily.heading};
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
`
