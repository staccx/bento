import React, { useState, forwardRef } from "react"
import PropTypes from "prop-types"
import { useLogging } from "../../../hooks"
import { componentCreateFactory } from "../../../theming/utils/createVariantsFunctionFactory"
import {
  HelpIcon,
  HelpText,
  InputLabel,
  InputWrapper,
  NoWrapSpan,
  StyledInput
} from "./Input.styles"
import { resolveMask } from "./masks"
import themeProps from "./Input.themeProps"
import { useLocale } from "../../../locale"

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
      ...props
    },
    ref
  ) => {
    const { locale: contextLocale } = useLocale()

    const logger = useLogging("components.Input", level)
    const [showHelp, showHelpSet] = useState(false)

    const maskConfig = React.useMemo(() => {
      return {
        ...props,
        ...(contextLocale && { locale: contextLocale }),
        ...(locale && { locale })
      }
    }, [locale, contextLocale])

    const mask = React.useRef(() => {
      const createMask = resolveMask(mode, logger)
      return createMask(maskConfig)
    })

    const [internalValue, internalValueSet] = React.useState(() => {
      const initialValue = mask.current(props)
      return {
        ...(initialValue && { ...initialValue(value) }),
        ...(!initialValue && { value })
      }
    })

    React.useEffect(() => {
      const createMask = resolveMask(mode, logger)
      mask.current = createMask(maskConfig)
    }, [mode, logger, maskConfig])

    React.useEffect(() => {
      handleChange({ target: { value: internalValue.rawValue } })
    }, [locale])

    const handleChange = e => {
      if (!mask.current) {
        onChange &&
          onChange({
            value: e.target.value
          })
        return
      }
      const val = mask.current(e.target.value)
      if (val && onChange) {
        onChange({
          ...val
        })
      }
      internalValueSet({
        ...val
      })
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
          id={id}
          onChange={handleChange}
          placeholder={placeholder}
          variant={variant}
          ref={ref}
          defaultValue={defaultValue}
          {...props}
          value={internalValue.value}
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
  defaultValue: PropTypes.string,
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
  value: PropTypes.string,
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
