/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useEffect, useRef } from "react"
import { resolveMask } from "./masks"
import { MaskMode, MaskOptions } from "./masks/_types"
// Which types are allowed to set range
// https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/setSelectionRange
const allowedSelectionRangeTypes = ["text", "search", "URL", "tel", "password"]

type Props = {
  options?: MaskOptions
  mode: MaskMode
  onChange?: (event: { value: string; rawValue: string }) => void
  value?: string
  defaultValue?: string
}

export const useInputMask = ({
  options = {},
  mode,
  onChange = () => {},
  value: controlledValue,
  defaultValue
}: Props) => {
  const ref = useRef<HTMLInputElement>(null)
  const caretPosition = useRef(0)
  const timeout = useRef<NodeJS.Timeout>()
  const [value, valueSet] = React.useState<{ value: any; rawValue?: any }>({
    value: controlledValue ?? defaultValue ?? ""
  })

  const updateCaret = useCallback(val => {
    if (ref && ref.current) {
      if (!allowedSelectionRangeTypes.includes(ref.current.type)) {
        return
      }
      const { selectionStart, selectionEnd } = ref.current
      const caret = val || Math.max(selectionStart!, selectionEnd!)
      console.debug("Settings caret position to", caret)
      caretPosition.current = caret
    }
  }, [])

  useEffect(() => {
    if (
      !ref.current ||
      !allowedSelectionRangeTypes.includes(ref.current.type)
    ) {
      return
    }
    if (timeout.current) clearTimeout(timeout.current)
    timeout.current = setTimeout(() => {
      if (document && document.activeElement === ref.current && ref.current) {
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
      if (timeout.current) clearTimeout(timeout.current)
    }
  })

  useEffect(() => {
    updateCaret(1)
  }, [])

  useEffect(() => {
    if (controlledValue !== value?.rawValue) {
      let value = controlledValue
      if (value === null || value === undefined) {
        value = ""
      }
      handleChange({ target: { value } })
    }
  }, [controlledValue])

  useEffect(() => {
    if (defaultValue !== value?.rawValue) {
      let value = defaultValue
      if (value === null || value === undefined) {
        value = ""
      }
      handleChange({ target: { value } })
    }
  }, [defaultValue])

  const createMask = resolveMask(mode)
  const mask = React.useRef<((input: any) => any) | null>(createMask(options))
  React.useEffect(() => {
    const createMask = resolveMask(mode)
    mask.current = createMask(options)
    console.debug("Mode resolved", mask.current?.name)
  }, [mode, options])

  React.useEffect(() => {
    if (options) {
      handleChange({ target: { value: value.value } })
      console.debug("Locale changed to", options)
    }
  }, [options])

  const handleChange = (e: any) => {
    if (!mode) {
      return
    }
    const val = mask.current && mask.current(e.target.value)
    console.debug("Handling change on masked input", val, value)
    if (value?.value) {
      const diff = val.value.length - value.value.length
      console.debug("Difference is", diff)
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

  const handleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
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
    ref,
    onKeyUp: handleKeyUp,
    onChange: handleChange,
    value: value?.value,
    defaultValue
  }
}
