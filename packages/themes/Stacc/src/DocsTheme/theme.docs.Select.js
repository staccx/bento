import { css } from "styled-components"
import { Select, theming } from "@staccx/base"

export const SelectWrapperStyle = theming.createVariants(
  {
    styleguideSwitchTheme: css`
      height: 100%;
    `
  },
  Select.themeProps.selectWrapper
)

export const SelectedWrapperStyle = theming.createVariants(
  {
    styleguideSwitchTheme: css`
      height: 100%;
      border-top-width: 0;
      border-bottom-width: 0;
    `
  },
  Select.themeProps.selectedWrapper
)

export const SelectedOptionContainer = theming.createVariants(
  {
    styleguideSwitchTheme: css`
      height: 100%;
    `
  },
  Select.themeProps.optionContainer
)
