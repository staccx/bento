import { css } from "styled-components"
import Alert from "../../../../../components/Alert/Alert"
import createVariants from "../../../../utils/createVariants"
import { color, VARIANT_DEFAULT } from "../../../../index"

const alertVariants = createVariants(
  {
    [VARIANT_DEFAULT]: css`
      background-color: ${color("bgGray")};
    `
  },
  Alert.themeProps.alertInfo
)
export default alertVariants
