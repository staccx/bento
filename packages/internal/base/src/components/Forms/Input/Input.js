/**
 * @class Input
 */

import React, { useEffect, useRef, useState } from "react"
import PropTypes from "prop-types"
import styled, { css } from "styled-components"
import Cleave from "cleave.js"
import Label from "../Label/Label"
import {
  commonPropTypes,
  themePropTypes
} from "../../../constants/themeContants"
import {
  applyVariants,
  borderRadius,
  color,
  font,
  fontFamily,
  spacing,
  targetSize
} from "../../../theming"
import ThemeComponent from "../../Theme/ThemeComponent"
import QuestionMark from "../../Icons/QuestionMark"
import { FadeIn } from "@staccx/animations"

const HelpBox = ({ onClick }) => (
  <HelpButton onClick={onClick} type={"button"}>
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
    const cleave = useRef(null)

    const setRawValue = rawValue => {
      if (!cleave.current) {
        console.warn("setRawValue not supported for non cleave inputs")
        return
      }

      cleave.current.setRawValue(rawValue)
    }

    useEffect(() => {
      if (options) {
        cleave.current = new Cleave(ref.current, {
          ...options,
          onValueChanged: onChange
        })
        if (defaultValue) {
          setRawValue(defaultValue)
        }
      }
    }, [])

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

        <InputNoMask
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
          ref={ref}
          autoComplete={autoComplete}
          {...otherProps}
        />
      </InputWrapper>
    )
  }
)

Input.themeProps = {
  iconComponent: {
    name: "INPUT_HELP_ICON_COMPONENT",
    description: "Icon shown. Defaults to Caret",
    type: themePropTypes.component
  },
  icon: {
    name: "INPUT_HELP_ICON_STYLE",
    description: "Icon style",
    type: themePropTypes.style
  },
  input: {
    name: "INPUT",
    description: "Input style",
    type: themePropTypes.style
  },
  wrapper: {
    name: "INPUT_WRAPPER",
    description: "Wrapper style",
    type: themePropTypes.style
  },
  label: {
    name: "INPUT_LABEL",
    description: "Label style",
    type: themePropTypes.style
  },
  helpText: {
    name: "INPUT_HELPTEXT",
    description: "Helptext style",
    type: themePropTypes.style
  },
  helpButton: {
    name: "BUTTON_HELP",
    description: "Help button style",
    type: themePropTypes.style
  }
}

const IconComponent = ({ ...props }) => (
  <ThemeComponent
    tagName={Input.themeProps.iconComponent.name}
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
  ${applyVariants(Input.themeProps.helpButton)};
`

const HelpIcon = styled(IconComponent)`
  ${applyVariants(Input.themeProps.icon.name)};
`

const NoWrapSpan = styled.span`
  white-space: nowrap;
`

const HelpText = styled.div`
  display: ${p => (p.isVisible ? "block" : "none")};
  opacity: 0;
  animation: ${FadeIn} 0.4s ease-out 1 forwards;
  ${applyVariants(Input.themeProps.helpText)};
`

const InputLabel = styled(Label)`
  ${applyVariants(Input.themeProps.label)};
`

export const InputWrapper = styled.div`
  display: block;
  margin-bottom: 0;
  position: relative;
  ${applyVariants(Input.themeProps.wrapper)};
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
  ${applyVariants(Input.themeProps.input)};
`

const InputNoMask = styled.input`
  ${inputCss};
`

export const InputPropTypes = {
  autoFocus: PropTypes.bool,
  callback: PropTypes.func,
  /**
   * Disabled prop
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
    "date"
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

Input.defaultProps = InputDefaultProps
/** @component */
export default Input
