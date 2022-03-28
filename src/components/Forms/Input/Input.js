import React, { forwardRef, useEffect, useRef, useState } from "react"
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
import { useCombinedRefs } from "../../../hooks/useCombinedRefs/useCombinedRefs"
import MaskedInput from "./Input.Masked"

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
      maskOptions = {},
      ...props
    },
    ref
  ) => {
    const [showHelp, showHelpSet] = useState(false)

    const innerRef = useRef(null)
    const inputRef = useCombinedRefs(ref, innerRef)

    useEffect(() => {
      if (defaultValue === undefined || !innerRef.current || mode) {
        return
      }
      if (defaultValue !== innerRef?.current?.value) {
        innerRef.current.value = defaultValue
      }
    }, [defaultValue, innerRef])

    if (mode) {
      return (
        <MaskedInput
          ref={ref}
          className={className}
          variant={variant}
          id={id}
          label={label}
          helpText={helpText}
          placeholder={placeholder}
          defaultValue={defaultValue}
          onChange={onChange}
          mode={mode}
          value={value}
          level={level}
          locale={locale}
          type={type}
          maskOptions={maskOptions}
          {...(props.value ||
            (defaultValue && { value: props.value || defaultValue }))}
          {...props}
        />
      )
    }
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
          ref={inputRef}
          className={className}
          variant={variant}
          id={id}
          placeholder={placeholder}
          defaultValue={defaultValue}
          onChange={onChange}
          value={value}
          type={type}
          {...props}
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
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
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

Input.inputModes = {
  email: {
    inputMode: "email",
    type: "text",
    autoComplete: "email"
  },
  numeric: {
    inputMode: "numeric",
    pattern: /[0-9]*/,
    type: "text"
  }
}

export default Input
