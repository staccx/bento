import { theming } from "@staccx/base"

export default theming.createGlobal({
  themeReset: `
::selection {
  background: rgba(230, 80, 63, 0.3);
  color: #000;
}

html {
  background-color: #fff;
  font-size: 18px;
  line-height: 1.6;
}

h1, h2 {
  color: #2b2b2b;
  font-weight: 700;
  line-height: 1.2;
}

h3,h4,h5,h6,strong {
  color: #2b2b2b;
  font-weight: 600;
}
`
})
