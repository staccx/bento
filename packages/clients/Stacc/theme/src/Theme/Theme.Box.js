import { css } from "styled-components"
import { Box, theming } from "@staccx/base"

const defaultBox = css`
  background: ${theming.color.white};
  box-shadow: 0px 16px 16px rgba(0, 0, 75, 0.002),
    0px 8px 8px rgba(0, 0, 75, 0.001), 0px 4px 7px rgba(0, 0, 75, 0.021),
    0px 2px 2px rgba(0, 0, 75, 0.021), 0px 32px 22px rgba(0, 0, 75, 0.021),
    0px 44px 64px rgba(0, 0, 75, 0.0101);
  border-radius: 3px;
`

export default theming.createVariants(
  {
    [theming.VARIANT_DEFAULT]: defaultBox,
    transparent: css`
      background-color: transparent;
    `,
    contact: css`
      background: ${theming.color.bgGray};
      border: 2px solid ${theming.color.primary};
      border-radius: ${theming.borderRadius};
      padding-top: ${theming.spacing.large};
      padding-bottom: ${theming.spacing.large};
    `
  },
  Box.themeProps.box
)
