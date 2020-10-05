import styled, { css } from "styled-components"
import {
  applyVariants,
  borderRadius,
  color,
  font,
  fontFamily,
  spacing,
  targetSize
} from "../../../theming"
import themeProps from "./Input.themeProps"
import { FadeIn } from "../../../animations"
import Label from "../Label/Label"
import ThemeComponent from "../../Theme/ThemeComponent/ThemeComponent"
import React from "react"
import QuestionMark from "../../Icons/QuestionMark/QuestionMark"

const HelpButton = styled.button`
  -webkit-appearance: none;
  border: initial;
  padding: 0;
  cursor: pointer;
  line-height: 0;
  ${applyVariants(themeProps.helpButton)};
`
const HelpBox = ({ onClick }) => (
  <HelpButton onClick={onClick} type="button">
    <QuestionMark />
  </HelpButton>
)
const IconComponent = ({ ...props }) => (
  <ThemeComponent
    tagName={themeProps.iconComponent.name}
    fallback={HelpBox}
    {...props}
  />
)

export const HelpIcon = styled(IconComponent)`
  ${applyVariants(themeProps.icon.name)};
`

export const NoWrapSpan = styled.span`
  white-space: nowrap;
`

export const HelpText = styled.div`
  display: ${p => (p.isVisible ? "block" : "none")};
  opacity: 0;
  animation: ${FadeIn} 0.4s ease-out 1 forwards;
  ${applyVariants(themeProps.helpText)};
`

export const InputLabel = styled(Label)`
  ${applyVariants(themeProps.label)};
`

export const InputWrapper = styled.div`
  display: block;
  margin-bottom: 0;
  position: relative;
  ${applyVariants(themeProps.wrapper)};
`

export const inputCss = css`
  display: block;
  width: 100%;
  min-height: ${targetSize.normal};
  margin: 0 auto;
  border: 1px solid ${color.line};
  border-radius: ${borderRadius};
  padding-left: ${spacing.small};
  padding-right: ${spacing.small};
  font-family: ${fontFamily.body};
  font-size: ${font.input};
  transition: border-color 0.2s ease-out;
  -webkit-appearance: none;
  appearance: none;
  -moz-appearance: textfield;

  &::-webkit-input-placeholder {
    /* WebKit browsers */
    color: ${color.line};
  }
  &:-moz-placeholder {
    /* Mozilla Firefox 4 to 18 */
    color: ${color.line};
  }
  &::-moz-placeholder {
    /* Mozilla Firefox 19+ */
    color: ${color.line};
  }
  &:-ms-input-placeholder {
    /* Internet Explorer 10+ */
    color: ${color.line};
  }
  &:-webkit-autofill {
    background-color: ${color.bg};
  }

  &:hover,
  &:focus,
  &:active {
    outline: none;
    background-color: ${color("subtleHover")};
  }

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  ${p => p.additionalCSS || null};
  ${applyVariants(themeProps.input)};
`

export const StyledInput = styled.input`
  ${inputCss};
`
