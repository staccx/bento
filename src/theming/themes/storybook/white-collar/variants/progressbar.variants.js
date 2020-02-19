import { css } from "styled-components"
import ProgressBar from "../../../../../components/DataViz/ProgressBar/ProgressBar"
import createVariants from "../../../../utils/createVariants"
import { VARIANT_DEFAULT } from "../../../../index"

const progressBarVariants = createVariants(
  {
    [VARIANT_DEFAULT]: css`
      top: 50%;
      transform: translateY(-50%);
    `
  },
  ProgressBar.themeProps.progress
)

export default progressBarVariants
