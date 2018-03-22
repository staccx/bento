import { css } from "styled-components"

const SliderWrapperStyle = css`
  font-family: ${p => p.theme.font.body};
  font-size: ${p => p.theme.font.size.input};
`

const HiddenLabelStyle = css`
  border: 0 !important;
  clip: rect(0 0 0 0) !important;
  height: 1px !important;
  margin: -1px !important;
  overflow: hidden !important;
  padding: 0 !important;
  position: absolute !important;
  width: 1px !important;
`

const SliderInputStyle = css`
  background-color: transparent;
  border: 0;
  min-height: ${p => p.theme.targetSize.normal};
  margin-bottom: ${p => p.theme.spacing.medium};
  max-width: 100%;
  -moz-appearance: textfield;
  outline: none;

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &:hover,
  &:active,
  &:focus,
  &:-moz-ui-invalid,
  &:invalid {
    outline: none;
    box-shadow: none;
  }

  &:disabled {
    color: ${p => p.theme.color.text};
  }
`

export { SliderWrapperStyle, HiddenLabelStyle, SliderInputStyle }
