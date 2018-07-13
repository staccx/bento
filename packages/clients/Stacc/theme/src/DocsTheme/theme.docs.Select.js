import { css } from "styled-components"
import { registerStyle } from "@staccx/theme"
import { Select } from "@staccx/base"

export const SelectWrapperStyle = registerStyle(
  {
    styleguideSwitchTheme: css`
      height: 100%;
    `
  },
  Select.themeProps.selectWrapper
)

export const SelectedWrapperStyle = registerStyle(
  {
    styleguideSwitchTheme: css`
      height: 100%;
      border-top-width: 0;
      border-bottom-width: 0;
    `
  },
  Select.themeProps.selectedWrapper
)

export const SelectedOptionContainer = registerStyle(
  {
    styleguideSwitchTheme: css`
      height: 100%;
    `
  },
  Select.themeProps.optionContainer
)
