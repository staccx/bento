import { css } from "styled-components"
import Alert from "../../../../../components/Alert/Alert"
import createVariants from "../../../../utils/createVariants"
import { color, VARIANT_DEFAULT } from "../../../../index"

const alertVariants = createVariants(
  {
    [VARIANT_DEFAULT]: css`
      color: ${color("white")};
      &:hover,
      &:active,
      &:focus {
        color: ${color("white")};
      }
    `,
    box: css`
      background-color: ${color("primary")};
      color: ${color("white")};
      height: 100px;
      width: 200px;
    `,
    rounded: css`
      height: 200px;
      width: 200px;
      border-radius: 100px;
      text-align: center;
      padding-top: 75px;
    `
  },
  Alert.themeProps.alert
)

export default alertVariants
