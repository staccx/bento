import { css } from "styled-components"
import { SplitListItem, theming } from "@staccx/base"

export default theming.createVariants(
  {
    accountInfoListItem: css`
      padding: 10px 0;
      border-color: ${theming.color("accountInfoBorder")};
      color: ${theming.color.wcag};
      ${p =>
        p.emphasize &&
        css`
          font-weight: ${theming.fontWeight.bold};
        `};
    `
  },
  SplitListItem.themeProps.listItem
)
