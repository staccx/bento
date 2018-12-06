import { css } from "styled-components"
import { Wrapper, theming } from "@staccx/base"

export const WrapperStyling = theming.createVariants(
  {
    bodyCopy: css`
      ul {
        list-style-type: disc;
        padding-left: 1.3em;
      }
      &,
      & * {
        text-align: left;
      }
      ul {
      }
    `,
    offerTable: css`
      max-width: ${theming.wrapper("form")};
    `
  },
  Wrapper.themeProps.wrapper
)
