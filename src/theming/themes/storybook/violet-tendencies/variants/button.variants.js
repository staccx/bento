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
      box-shadow: 0 0 0 rgba(0, 0, 0, 0.15);
      transition: border 0.2s ease, box-shadow 0.2s ease;

      &:hover,
      &:active,
      &:focus {
        box-shadow: 0 0 0 4px ${color.primary}66;
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
