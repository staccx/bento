import React, { useState } from "react"
import PropTypes from "prop-types"
import { useLogging } from "hooks"
import { validLogLevels } from "utils/loglevelUtils"
import {
  HelpIcon,
  HelpText,
  InputLabel,
  InputWrapper,
  NoWrapSpan,
  StyledInput
} from "./Input.styles"
import { useI18n } from "i18n"
import { resolveMask } from "./masks"

const Input = React.forwardRef(
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
    const { language } = useI18n()
    const logger = useLogging("components.Input", level)
    const [showHelp, showHelpSet] = useState(false)

    const maskConfig = React.useMemo(() => {
      return {
        ...props,
        ...(language && { locale: language }),
        ...(locale && { locale })
      }
    }, [locale, language])

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
        return {
          value: e.target.value
        }
      }
      const value = mask.current(e.target.value)
      if (value && onChange) {
        onChange({
          ...value
        })
      }
      internalValueSet({
        ...value
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
  label: PropTypes.string,
  /**
   * Define this is you want ? next to the label
   */
  helpText: PropTypes.string,
  placeholder: PropTypes.string,
  defaultValue: PropTypes.string,
  onChange: PropTypes.func,
  mode: PropTypes.oneOf([
    "account",
    "creditcard",
    "currency",
    "nationalid",
    "phone",
    "postal",
    "postalcode"
  ]),
  value: PropTypes.string,
  level: PropTypes.oneOf([...validLogLevels]),
  locale: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      alpha2: PropTypes.string
    })
  ])
}

export default Input