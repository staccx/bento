import { css } from "styled-components"
import { Button, theming } from "@staccx/base"

const baseStyling = css`
  border-radius: ${theming.targetSize.normal};
  background-color: ${theming.color("b5")};
  &:hover,
  &:focus,
  &:active {
    background-color: ${theming.color("text")};
  }
`

export const ButtonStyling = theming.createVariants(
  {
    [theming.VARIANT_DEFAULT]: css`
      ${baseStyling};
    `,
    taskList: css`
      ${baseStyling};
      display: flex;
      min-height: 0;
      padding: 0 ${theming.spacing.small};
      font-weight: ${theming.fontWeight.normal};
      > span:not(:only-child) {
        padding-right: ${theming.spacing.tiny};
      }
    `,
    chat: css`
      background-color: ${theming.color.white};
      padding-left: ${theming.spacing.small};
      padding-right: ${theming.spacing.small};
      color: ${theming.color("g2")};

      > svg {
        vertical-align: middle;
      }

      &:hover,
      &:focus,
      &:active {
        background-color: ${theming.color.white};
        color: ${theming.color.primary};
      }
    `,
    icon: css`
      background: transparent;
      padding-left: ${theming.spacing.tiny};
      padding-right: ${theming.spacing.tiny};
      color: ${theming.color.primary};
      font-weight: ${theming.fontWeight.normal};
      svg {
        fill: ${theming.color("g2")};
      }
      &:hover,
      &:focus,
      &:active {
        background: transparent;
        color: ${theming.color.primary};
        svg {
          fill: ${theming.color("g3")};
        }
      }
    `,
    subtle: css`
      border-radius: ${theming.targetSize.normal};
      padding: 0 ${theming.spacing.small};
      min-height: ${theming.spacing.medium};
      background-color: transparent;
      color: ${theming.color("b4")};
      &:hover,
      &:focus,
      &:active {
        color: ${theming.color("b4")};
        background-color: ${theming.color("bg")};
      }
    `,
    back: css`
      display: flex;
      align-items: center;
      background-color: transparent;
      color: ${theming.color("b4")};
      padding: 0;
      min-height: ${theming.spacing.medium};

      svg {
        margin-right: ${theming.spacing.tiny};
      }
      &:hover,
      &:active,
      &:focus {
        color: ${theming.color("text")};
        color: ${theming.color("b4")};
        background-color: transparent;
        text-decoration: underline;
      }
    `,
    hamburger: css`
      display: flex;
      min-height: 52px;
      background-color: transparent;
      svg {
        margin-right: ${theming.spacing.tiny};
      }
      @media only screen and (min-width: 540px) {
        display: none;
      }
    `,
    closeMobileMenu: css`
      background-color: transparent;
      display: flex;
      position: absolute;
      top: ${theming.spacing.small};
      right: ${theming.spacing.small};
      svg {
        margin-right: ${theming.spacing.tiny};
      }
    `,
    tabs: css`
      border-radius: 0;
      background-color: transparent;
      color: ${theming.color.primary};
      margin-left: 0;
      margin-right: 0;
      padding: ${theming.spacing.tiny} ${theming.spacing.tiny};
      ${p =>
        p.isCurrent &&
        `
      border-bottom: 2px solid ${theming.color("primary")(p)};
      `};

      &:hover,
      &:active,
      &:focus {
        color: ${theming.color.primary};
        background-color: transparent;
        border-bottom: 2px solid ${theming.color("primary")};
      }
    `,
    emoji: css`
      background-color: transparent;
      padding: 0;
      font-size: 24px;

      &:hover,
      &:active,
      &:focus {
        background-color: transparent;
      }

      &:nth-child(even) {
        margin: 0 ${theming.spacing.tiny};
      }
    `,
    closeNews: css`
      background-color: ${theming.color("bg1")};
      border-radius: ${theming.targetSize.normal};
      min-height: ${theming.targetSize.small};
      color: ${theming.color.primary};
      line-height: inherit;
    `,
    white: css`
      border-radius: ${theming.targetSize.normal};
      padding: 0 ${theming.spacing.small};
      min-height: ${theming.spacing.medium};
      background-color: ${theming.color.white};
      color: ${theming.color("b4")};
      &:hover,
      &:focus,
      &:active {
        color: ${theming.color("b4")};
        background-color: ${theming.color("bg")};
      }
    `,
    search: css`
      position: absolute;
      top: 50%;
      right: 0;
      background-color: transparent;
      border-top-right-radius: 50px;
      border-bottom-right-radius: 50px;
      padding-left: ${theming.spacing.medium};
      padding-right: ${theming.spacing.medium};
      color: ${theming.color.primary};
      transform: translateY(-50%);

      > svg {
        vertical-align: middle;
      }

      &:hover,
      &:focus,
      &:active {
        background-color: ${theming.color("b1")};
        color: ${theming.color.primary};
      }
    `,
    goto: css`
      display: flex;
      justify-content: space-evenly;
      background-color: ${theming.color("primaryLight")};
      color: ${theming.color.primary};
      border-radius: 50px;
      min-height: ${theming.targetSize.small};

      > :last-child {
        margin-left: ${theming.spacing.tiny};
      }

      &:hover,
      &:active,
      &:focus {
        background-color: ${theming.color("b1")};
        color: ${theming.color.primary};
      }
    `,
    filter: css`
      &,
      :hover,
      :focus {
        background-color: ${p =>
          !p.isOpen ? theming.color.white : theming.color("b2")};
        border: 1px solid ${theming.color("g1")};
        color: ${p => (!p.isOpen ? theming.color("g4") : theming.color.white)};
        min-height: 28px;
        line-height: 1;
        border-radius: 50px;
        padding: ${theming.spacing.tiny} ${theming.spacing.small};
        font-weight: normal;

        &:focus {
          border-color: ${theming.color("b1")};
          box-shadow: 0 0 0 3px ${theming.color("b1")};
        }
      }
    `,
    filterAction: css`
      background-color: transparent;
      border: 0;
      color: ${p => (p.primary ? theming.color("b2") : theming.color.wcag)};
      padding: 0;
      line-height: ${theming.targetSize.small};
      min-height: ${theming.targetSize.small};

      &:hover,
      &:active,
      &:focus {
        background-color: transparent;
        border: 0;
        color: ${theming.color.primary};
      }
    `,
    caseTab: css`
      background-color: transparent;
      padding: 0;
      color: ${theming.color.primary};
      border-bottom: ${p => (p.isActive ? "3px solid currentColor" : "none")};
      min-height: 26px;

      &:hover,
      &:active,
      &:focus {
        color: ${theming.color("b3")};
        background-color: transparent;
      }

      @media (max-width: 489px) {
        :hover,
        :active {
          color: ${theming.color.primary};
        }
      }
    `,
    caseListItem: css`
      display: flex;
      width: 100%;
      padding: ${theming.spacing.small};
      border: none;
      box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.1);
      background-color: ${theming.color("veryLightGray")};
      justify-content: space-between;
      align-items: stretch;
      font-size: ${theming.font.base};
      font-weight: normal;
      color: ${theming.color.text};
      line-height: initial;

      :hover,
      :focus {
        background-color: ${theming.color("veryLightGray")};
        ${p =>
          !p.disabled &&
          css`
            color: ${theming.color.text};
          `}
      }

      @media (min-width: 720px) {
        padding: ${theming.spacing.medium};
      }

      @media (max-width: 719px) {
        position: relative;
        flex-wrap: wrap;
        padding-left: 48px;
        padding-right: 32px;
      }

      @media (max-width: 359px) {
        padding-right: ${theming.spacing.small};
      }
    `
  },
  Button.themeProps.button
)
