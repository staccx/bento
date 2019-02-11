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
    menuList: css`
      button:first-child {
        border-top: 1px solid ${theming.color.line};
      }
    `,
    headerMenu: css`
      grid-area: headerMenu;
      display: inline-grid;
      justify-items: end;
      grid-template-columns: 140px 1fr 1fr 1fr 1fr;
      align-items: center;
      @media (max-width: 660px) {
        justify-items: center;
        grid-template-rows: 1fr 1fr;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-areas:
          "logo logo logout"
          ". . .";
        /* > li {
          width: 100%;
        } */
        > li:first-child {
          grid-area: logo;
          justify-self: start;
        }
        > li:last-child {
          grid-area: logout;
          justify-self: center;
        }
      }
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
    `,
    open: css`
      li:first-child {
        border-top-width: 0;
      }
      li:last-child {
        border-bottom-width: 0;
      }
    `,
    block: css`
      margin-left: ${theming.spacing.medium};
      li {
        list-style-type: disc;
      }
    `
  },
  List.themeProps.list
)
