import { css } from "styled-components"
import { Expand, theming } from "@staccx/base"

const expandBtnStyling = css`
  cursor: pointer;
  padding: ${theming.spacing.small} ${theming.spacing.medium};
  :focus {
    outline: 5px auto -webkit-focus-ring-color;
  }
`

export const ExpandBtnStyling = theming.createVariants(
  {
    [theming.VARIANT_DEFAULT]: css`
      ${expandBtnStyling};
    `,
    objectInfoBox: css``
  },
  Expand.themeProps.button.name
)

const expandItemStyling = css`
  padding: ${theming.spacing.small} ${theming.spacing.medium};
`

export const ExpandItemStyling = theming.createVariants(
  {
    [theming.VARIANT_DEFAULT]: css`
      ${expandItemStyling};
    `,
    objectInfoBox: css``
  },
  Expand.themeProps.item.name
)

const expandIconStyling = css`
  right: ${theming.spacing.medium};
`

export const ExpandIconStyling = theming.createVariants(
  {
    [theming.VARIANT_DEFAULT]: css`
      ${expandIconStyling};
    `,
    objectInfoBox: css``
  },
  Expand.themeProps.icon.name
)
