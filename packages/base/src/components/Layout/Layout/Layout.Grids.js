import { wrapper } from '@staccx/theme'
import { css } from 'styled-components'

const layoutStyle = layout => {
  switch (layout) {
    case "stonehenge":
      return css`
        grid-template-columns: 1fr minmax(320px, 1fr) minmax(320px, 1fr) 1fr;
        grid-template-areas:
          "header  header  header  header"
          ".  main  main  ."
          ".  body  aside  ."
          "footer  footer  footer  footer";
      `
    case "columnNarrow":
      return css`
        grid-template-columns: 1fr ${wrapper.small} 1fr;
        grid-template-areas:
          ".  header  ."
          ".  main  ."
          ".  body  ."
          ".  aside  ."
          ".  footer  .";
        grid-auto-flow: column;
      `
    default:
      break
  }
}