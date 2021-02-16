import React, { forwardRef, useRef, useState } from "react"
import PropTypes from "prop-types"
import { componentCreateFactory } from "../../../theming/utils/createVariantsFunctionFactory"
import {
  HelpIcon,
  HelpText,
  InputLabel,
  InputWrapper,
  NoWrapSpan,
  StyledInput
} from "./Input.styles"
import themeProps from "./Input.themeProps"
import { useInputMask } from "../../../hooks/useInputMask/useInputMask"
import { useCombinedRefs } from "../../../hooks/useCombinedRefs/useCombinedRefs"

const Input = forwardRef(
  (
    {
      className,
      variant,
      id,
      label,
      helpText,
      placeholder,
      defaultValue,
      onChange,
      mode,
      value,
      level,
      locale,
      type,
      ...props
    },
    ref
  ) => {
    const [showHelp, showHelpSet] = useState(false)

    const innerRef = useRef(null)
    const inputRef = useCombinedRefs(ref, innerRef)

    const inputProps = useInputMask({
      ref: inputRef,
      locale,
      type,
      mode,
      defaultValue,
      controlledValue: value,
      onChange,
      ...props
    })

    return (
      <InputWrapper className={className} variant={variant}>
        {label && (
          <InputLabel variant={variant} htmlFor={id}>
            {label}
            {helpText && (
              <NoWrapSpan>
                &nbsp;
                <HelpIcon onClick={() => showHelpSet(!showHelp)} />
              </NoWrapSpan>
            )}
          </InputLabel>
        )}
        {helpText && <HelpText isVisible={showHelp}>{helpText}</HelpText>}

        <StyledInput
          id={id}
          onChange={onChange}
          placeholder={placeholder}
          variant={variant}
          ref={inputRef}
          defaultValue={defaultValue}
          type={type}
          {...inputProps}
        />
      </InputWrapper>
    )
  }
)

Input.propTypes = {
  className: PropTypes.string,
  variant: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.object
  ]),
  id: PropTypes.string.isRequired,
  name: PropTypes.string,
  label: PropTypes.string,
  /**
   * Define this is you want ? next to the label
   */
  helpText: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  defaultValue: PropTypes.oneOf([PropTypes.string, PropTypes.number]),
  /**
   * Callback when content changes. Contains {value, rawValue} and other meta from masks
   */
  onChange: PropTypes.func,
  mode: PropTypes.oneOf([
    "account",
    "creditcard",
    "currency",
    "nationalid",
    "phone",
    "postal",
    "postalcode",
    "custom"
  ]),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /**
   * Logger level. Higher is more detail
   */
  level: PropTypes.oneOf([0, 1, 2, 3, 4, 5]),
  locale: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      alpha2: PropTypes.string
    })
  ]),
  /**
   * Use with custom mode. To block out text
   */
  blocks: PropTypes.arrayOf(PropTypes.number),
  /**
   * Max length of inputted string (raw value)
   */
  maxLength: PropTypes.number,
  pattern: PropTypes.instanceOf(RegExp)
}
Input.displayName = "Input"
Input.themeProps = themeProps
Input.createVariants = componentCreateFactory(Input)

Input.defaultProps = {
  type: "text"
}

export default Input
