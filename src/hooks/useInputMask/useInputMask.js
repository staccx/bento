import React, { useCallback, useEffect, useRef } from "react"
import { resolveMask } from "./masks"
import { useLogging } from "../useLogging"
// Which types are allowed to set range
// https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/setSelectionRange
const allowedSelectionRangeTypes = ["text", "search", "URL", "tel", "password"]

export const useInputMask = ({
  ref,
  locale,
  type,
  mode,
  onChange,
  controlledValue,
  defaultValue,
  ...otherProps
}) => {
  const logger = useLogging("useInputMask", 5)
  const caretPosition = useRef(0)
  const timeout = useRef(null)
  const [value, valueSet] = React.useState({
    value: controlledValue ?? defaultValue
  })

  const updateCaret = useCallback(
    val => {
      if (!allowedSelectionRangeTypes.includes(type)) {
        return
      }
      if (ref && ref.current) {
        const { selectionStart, selectionEnd } = ref.current
        const caret = val || Math.max(selectionStart, selectionEnd)
        logger.debug("Settings caret position to", caret)
        caretPosition.current = caret
      }
    },
    [type]
  )

  useEffect(() => {
    if (!mode) {
      return
    }
    if (!allowedSelectionRangeTypes.includes(type)) {
      return
    }
    clearTimeout(timeout.current)
    timeout.current = setTimeout(() => {
      if (ref && ref.current) {
        const { selectionStart } = ref.current

        if (selectionStart !== caretPosition.current) {
          ref.current.setSelectionRange(
            caretPosition.current,
            caretPosition.current
          )
        }
      }
    })

    return () => {
      clearTimeout(timeout.current)
    }
  })

  useEffect(() => {
    if (!mode) {
      return
    }
    updateCaret(1)
  }, [])

  useEffect(() => {
    if (controlledValue !== value?.value) {
      handleChange({ target: { value: controlledValue } })
    }
  }, [controlledValue])

  const mask = React.useRef(value => {
    const createMask = resolveMask(mode, logger)
    return createMask({
      locale
    })
  })

  React.useEffect(() => {
    if (!mode) {
      return
    }
    const createMask = resolveMask(mode, logger)
    mask.current = createMask({ locale })
    logger.debug("Mode resolved", mask.current?.name)
  }, [mode, logger, locale])

  React.useEffect(() => {
    if (!mode) {
      return
    }
    if (locale) {
      handleChange({ target: value })
      logger.debug("Locale changed to", locale)
    }
  }, [locale])

  const handleChange = e => {
    if (!mode) {
      return
    }
    const val = mask.current(e.target.value)
    logger.debug("Handling change on masked input", val, value)
    if (value?.value) {
      const diff = val.value.length - value.value.length
      logger.debug("Difference is", diff)
      updateCaret(Math.abs(diff) > 1 ? caretPosition.current + diff : null)
    } else {
      updateCaret(null)
    }
    if (val?.value !== value?.value) {
      onChange && onChange(val)
      valueSet({
        ...val
      })
    }
  }

  const handleKeyUp = e => {
    switch (e.key) {
      case "ArrowLeft":
      case "ArrowRight":
        updateCaret(null)
        break
      case "ArrowUp":
        updateCaret(0)
        break
      case "ArrowDown":
        updateCaret(value?.value?.length ?? caretPosition.current)
        break
      default:
        break
    }
  }

  return {
    type,
    ...(mode && {
      onKeyUp: handleKeyUp,
      onChange: handleChange,
      value: value?.value
    }),
    defaultValue,
    ...otherProps
  }
}
