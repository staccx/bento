import { css } from "styled-components"
import { CopyToClipboardComponent, theming } from "@staccx/base"

export const CopyToClipboardComponentStyling = theming.createVariants(
  {
    [theming.VARIANT_DEFAULT]: css`
      background-color: ${theming.color.white};
      display: flex;
      justify-content: space-between;
      padding: ${theming.spacing.small} ${theming.spacing.small}
        ${theming.spacing.small} 0;
      height: ${theming.targetSize.normal};
      border: 1px solid ${theming.color("devportalLine")};
      border-left-width: 0;
      border-right-width: 0;
      cursor: pointer;
      width: 100%;
      position: relative;
      &:hover,
      &:focus,
      &:active {
        border-color: ${theming.color.primary};
        outline: none;
      }
      &::after {
        content: "Copied";
        position: absolute;
        top: calc(100% + 6px);
        right: 0;
        background: ${theming.color.primary};
        color: ${theming.color.white};
        display: inline-block;
        padding: ${theming.spacing.tiny};
        border-radius: ${theming.borderRadius};
        opacity: 0;
        transition: opacity 5s cubic-bezier(1, 0.03, 0.99, 0.3);
      }

      &:focus:active {
        &::after {
          opacity: 1;
          transition: opacity 0.4s cubic-bezier(0, 1.07, 0.07, 0.99);
          z-index: 100;
        }
      }
      & + & {
        border-top-width: 0;
      }
    `
  },
  CopyToClipboardComponent.themeProps.wrapper
)
