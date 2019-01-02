import { css } from "styled-components"
import { List, theming } from "@staccx/base"

export const ListStyling = theming.createVariants(
  {
    menu: css`
      display: flex;
      justify-content: space-around;
      li {
      }
    `,
    menuList: css``,
    headerMenu: css`
      grid-area: headerMenu;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      flex-wrap: wrap;
    `,
    combo: css`
      margin-top: 0;
      padding: 0;
      background-color: ${theming.color("primaryLight")};
      color: ${theming.color.white};
      font-family: "Roboto", sans-serif;
      position: absolute;
      width: 100%;
      z-index: 1;
    `
  },
  List.themeProps.list
)
