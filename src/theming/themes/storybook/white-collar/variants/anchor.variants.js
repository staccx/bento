import { css } from "styled-components"
import Anchor from "../../../../../components/Anchor/Anchor"
import createVariants from "../../../../utils/createVariants"
import { color, VARIANT_DEFAULT } from "../../../../index"

const anchorVariants = createVariants(
  {
    [VARIANT_DEFAULT]: css`
      color: ${color("link")};

      &:hover,
      &:active,
      &:focus {
        color: ${color("link")};
        text-decoration: underline;
      }
    `
  },
  Anchor.themeProps.anchor
)

export default anchorVariants
