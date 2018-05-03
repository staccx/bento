import { css } from "styled-components"
import { registerStyle, color } from "@staccx/theme"
import { BoxStyles } from "@staccx/base"

export default registerStyle(
  {
    modalLeft: css`
      background-color: ${color.bgGray};
      text-align: center;
    `,
    modalRight: css`
      background-color: ${color.white};
      text-align: center;
    `
  },
  BoxStyles.BOX
)
