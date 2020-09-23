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
      ...props
    },
    ref
  ) => {
    const logger = useLogging("components.Input", level)
    const [showHelp, showHelpSet] = useState(false)

    const mask = React.useRef(() => resolveMask(mode, logger))

    const [internalValue, internalValueSet] = React.useState(() => {
      const createMask = resolveMask(mode, logger)
      const initialValue = createMask(props)
      return {
        ...initialValue(value)
      }
    })

    React.useEffect(() => {
      const createMask = resolveMask(mode, logger)
      mask.current = createMask(props)
    }, [mode, logger])

    const handleChange = e => {
      if (!mask.current) {
        throw new Error("This component should have a mask")
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
