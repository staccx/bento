import { css } from "styled-components"
import { CopyToClipboardComponent, theming } from "@staccx/base"

export const CopyToClipboardComponentStyling = theming.createVariants(
  {
    [theming.VARIANT_DEFAULT]: css`
      background-color: ${theming.color.bgGray};
      display: flex;
      justify-content: space-between;
      padding: ${theming.spacing.small};
      height: ${theming.targetSize.normal};
      border-radius: ${theming.borderRadius};
      border: 1px solid ${theming.color("devportalLine")};
      cursor: pointer;
      width: 100%;
      position: relative;
      &:hover,
      &:focus,
      &:active {
        border-color: ${theming.color.primary};
        outline: none;
      }
      &:focus:active {
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
        }
      }
    `
  },
  CopyToClipboardComponent.themeProps.wrapper
)
