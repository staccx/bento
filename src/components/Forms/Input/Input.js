/**
 * @class Input
 */

import React, { useRef, useState } from "react"
import PropTypes from "prop-types"
import styled, { css } from "styled-components"
import Cleave from "cleave.js/react"
import Label from "../Label/Label"
import {
  applyVariants,
  borderRadius,
  color,
  commonPropTypes,
  font,
  fontFamily,
  spacing,
  targetSize
} from "../../../theming"
import ThemeComponent from "../../Theme/ThemeComponent/ThemeComponent"
import QuestionMark from "../../Icons/QuestionMark/QuestionMark"
import { FadeIn } from "../../../animations"
import themeProps from "./Input.themeProps"
import { componentCreateFactory } from "../../../theming/utils/createVariantsFunctionFactory"

const HelpBox = ({ onClick }) => (
  <HelpButton onClick={onClick} type="button">
    <QuestionMark />
  </HelpButton>
)

const Input = React.forwardRef(
  (
    {
      options,
      onChange,
      autoFocus,
      className,
      disabled,
      id,
      name,
      onBlur,
      onFocus,
      onKeyDown,
      placeholder,
      type,
      value,
      label,
      mask,
      variant,
      autoComplete,
      helpText,
      defaultValue,
      ...otherProps
    },
    ref
  ) => {
    const [showHelp, setShowHelp] = useState(false)
    const inputRef = useRef(ref)

    return (
      <InputWrapper className={className} variant={variant}>
        {label && (
          <InputLabel variant={variant} htmlFor={id}>
            {label}
            {helpText && (
              <NoWrapSpan>
                &nbsp;
                <HelpIcon onClick={() => setShowHelp(!showHelp)} />
              </NoWrapSpan>
            )}
          </InputLabel>
        )}
        {helpText && <HelpText isVisible={showHelp}>{helpText}</HelpText>}

        <InputComponent
          autoFocus={autoFocus}
          value={value}
          disabled={disabled}
          id={id}
          name={name}
          onFocus={onFocus}
          onBlur={onBlur}
          onChange={onChange}
          onKeyDown={onKeyDown}
          placeholder={placeholder}
          variant={variant}
          type={type}
          ref={inputRef}
          defaultValue={defaultValue}
          autoComplete={autoComplete}
          options={options}
          {...otherProps}
        />
      </InputWrapper>
    )
  }
)

const IconComponent = ({ ...props }) => (
  <ThemeComponent
    tagName={themeProps.iconComponent.name}
    fallback={HelpBox}
    {...props}
  />
)

const HelpButton = styled.button`
  -webkit-appearance: none;
  border: initial;
  padding: 0;
  cursor: pointer;
  line-height: 0;
  ${applyVariants(themeProps.helpButton)};
`

const HelpIcon = styled(IconComponent)`
  ${applyVariants(themeProps.icon.name)};
`

const NoWrapSpan = styled.span`
  white-space: nowrap;
`

const HelpText = styled.div`
  display: ${p => (p.isVisible ? "block" : "none")};
  opacity: 0;
  animation: ${FadeIn} 0.4s ease-out 1 forwards;
  ${applyVariants(themeProps.helpText)};
`

const InputLabel = styled(Label)`
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

const InputComponent = styled(Cleave)`
  ${inputCss};
`

export const InputPropTypes = {
  /**
   * Set this to set focus to field on render
   */
  autoFocus: PropTypes.bool,
  callback: PropTypes.func,
  /**
   * Disabled prop deactiovates functionality
   * @export
   */
  disabled: PropTypes.bool,
  hidden: PropTypes.bool,
  id: PropTypes.string,
  name: PropTypes.string,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onKeyDown: PropTypes.func,
  placeholder: PropTypes.string,
  style: PropTypes.object,
  type: PropTypes.oneOf([
    "text",
    "email",
    "number",
    "tel",
    "url",
    "search",
    "date",
    "file",
    "password"
  ]),
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  label: PropTypes.string,
  className: PropTypes.string,
  helpText: commonPropTypes.children,
  mask: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.func,
    PropTypes.bool,
    PropTypes.shape({
      mask: PropTypes.oneOfType([PropTypes.array, PropTypes.func]),
      pipe: PropTypes.func
    })
  ])
}

Input.propTypes = InputPropTypes

export const InputDefaultProps = {
  autoFocus: null,
  callback: null,
  disabled: false,
  hidden: false,
  name: null,
  onBlur: null,
  onChange: null,
  onKeyDown: null,
  placeholder: null,
  style: null,
  type: "text",
  value: undefined,
  label: "",
  mask: null,
  helpText: ""
}
Input.themeProps = themeProps
Input.createVariants = componentCreateFactory(Input)

Input.defaultProps = InputDefaultProps
/** @component */
export default Input
