import React, {
  forwardRef,
  useCallback,
  useEffect,
  useRef,
  useState
} from "react"
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

// Which types are allowed to set range
// https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/setSelectionRange
const allowedSelectionRangeTypes = ["text", "search", "URL", "tel", "password"]

let timeout = null
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
    const { locale: contextLocale } = useLocale()
    const inputRef = useRef(ref)
    const currentLocale = useRef(locale)
    const logger = useLogging("components.Input", level)
    const [showHelp, showHelpSet] = useState(false)
    const [start, setStart] = useState(0)
    const [end, setEnd] = useState(0)

    const updateCaret = useCallback(
      val => {
        if (!allowedSelectionRangeTypes.includes(type)) {
          return
        }
        if (inputRef && inputRef.current) {
          const { selectionStart, selectionEnd } = inputRef.current
          setStart(val || selectionStart)
          setEnd(val || selectionEnd)
        }
      },
      [type]
    )

    useEffect(() => {
      if (!allowedSelectionRangeTypes.includes(type)) {
        return
      }
      if (inputRef && inputRef.current) {
        clearTimeout(timeout)
        timeout = setTimeout(() => {
          inputRef.current.setSelectionRange(start, end)
        })
      }
    })

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
      logger.debug("Mode resolved", mask.current?.name)
    }, [mode, logger, maskConfig])

    React.useEffect(() => {
      if (locale && currentLocale.current !== locale) {
        handleChange({ target: { value: internalValue.value } })
        currentLocale.current = locale
        logger.debug("Locale changed to", locale)
      }
    }, [locale])

    React.useEffect(() => {
      if (value !== internalValue.value) {
        if (!mask.current) {
          logger.debug("Changing value from props on normal input to", value)
          internalValueSet({ value })
        } else {
          const val = mask.current(value)
          logger.debug("Changing value from props on masked input to", val)
          internalValueSet({
            ...val
          })
        }
      }
    }, [value])

    const handleChange = e => {
      if (!mask.current) {
        updateCaret()
        logger.debug("Handling change on normal input", e.target.value)
        onChange && onChange(e)
        return
      }
      const val = mask.current(e.target.value)
      logger.debug("Handling change on masked input", val, internalValue)
      const diff = val.value.length - internalValue.value.length
      updateCaret(diff > 0 ? start + diff : null)
      if (val && onChange) {
        onChange({
          ...e,
          ...val
        })
      }
      internalValueSet({
        ...val
      })
    }

    const handleKeyUp = e => {
      switch (e.key) {
        case "ArrowLeft":
        case "ArrowRight":
          updateCaret()
          break
        default:
          break
      }
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
          ref={inputRef}
          defaultValue={defaultValue}
          type={type}
          {...props}
          onKeyUp={handleKeyUp}
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
