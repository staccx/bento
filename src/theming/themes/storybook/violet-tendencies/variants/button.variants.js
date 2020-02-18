import { css } from "styled-components"
import Button from "../../../../../components/Button/Button"
import createVariants from "../../../../utils/createVariants"
import { color, VARIANT_DEFAULT } from "../../../../index"

const btnVariants = createVariants(
  {
    [VARIANT_DEFAULT]: css`
      background-color: ${color("secondary")};

      &:hover,
      &:active,
      &:focus {
        background-color: ${color("secondary")};
        box-shadow: 0 4px 18px rgba(0, 0, 0, 0.15);
      }
    `,
    primary: css`
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);

      &:hover,
      &:active,
      &:focus {
        box-shadow: 0 4px 18px rgba(0, 0, 0, 0.15);
      }
    `,
    secondary: css`
      color: ${color("primary")};
      background-color: ${color("primaryLight")};
    `
  },
  Button.themeProps.button
)

export default btnVariants
