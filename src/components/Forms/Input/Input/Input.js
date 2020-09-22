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
import { createMaskFactory } from "./Input.utils"

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
    const [maskFactory, maskFactorySet] = React.useState(() =>
      createMaskFactory(mode, logger)
    )
    const mask = React.useRef(() => null)
    const [internalValue, internalValueSet] = React.useState(() => {
      const factory = createMaskFactory(mode, logger)
      const m = factory.createMask(props)
      return {
        ...(value && { rawValue: value || "" }),
        ...(m?.mask ? { value: m.mask(value || "") } : { value: value || "" })
      }
    })

    React.useEffect(() => {
      maskFactorySet(createMaskFactory(mode, logger))
    }, [mode, logger])

    React.useEffect(() => {
      if (maskFactory) {
        mask.current = maskFactory.createMask(props)
      }
    }, [maskFactory])

    const handleChange = e => {
      if (!mask.current) {
        throw new Error("This component should have a mask")
      }
      const rawValue = mask.current.replace(e.target.value)
      const value = mask.current.mask(rawValue)
      if (value && onChange) {
        onChange({
          value,
          rawValue
        })
      }
      internalValueSet({
        value,
        rawValue
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
          {...maskFactory?.inputProps}
        />
      </InputWrapper>
    )
  }
)

export default Input
