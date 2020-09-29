import React, { useState } from "react"
import { useLogging } from "hooks"
import {
  HelpIcon,
  HelpText,
  InputLabel,
  InputWrapper,
  NoWrapSpan,
  StyledInput
} from "./Input.styles"
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
    const logger = useLogging("components.Input", level)
    const [showHelp, showHelpSet] = useState(false)

    const maskConfig = React.useMemo(
      () => ({
        ...props,
        ...(locale && { locale })
      }),
      [locale]
    )

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

export default Input
