import { css } from "styled-components"
import Button from "../../../../../components/Button/Button"
import createVariants from "../../../../utils/createVariants"
import { color, VARIANT_DEFAULT } from "../../../../index"

const btnVariants = createVariants(
  {
    [VARIANT_DEFAULT]: css`
      border-radius: 50px;
    `,
    secondary: css`
      color: ${color("primary")};
      background-color: transparent;
      border: 1px solid ${color("positive")};
      border-radius: 50px;
    `
  },
  Button.themeProps.button
)

export default btnVariants
