import { css } from "styled-components"
import { Anchor, theming } from "@staccx/base"

const baseStyling = css`
  /* default focus-styling a la nordeafinans.no: */
  :focus {
    outline: -webkit-focus-ring-color auto 5px;
  }
`

export const AnchorStyling = theming.createVariants(
  {
    [theming.VARIANT_DEFAULT]: css`
      ${baseStyling};
    `,
    animateHover: css`
      ${baseStyling};
      transition: transform 500ms ease;
      :hover,
      :focus {
        transform: translateX(10px);
        color: ${theming.color.text};
      }
    `,
    searchSuggestionItem: css`
      display: block;

      &:hover,
      &:focus {
        background-color: ${theming.color("bg3")};
        color: ${theming.color("link")};
      }
    `
  },
  Anchor.themeProps.anchor
)
