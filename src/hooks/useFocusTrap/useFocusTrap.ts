import React from "react"
import { createFocusTrap } from "focus-trap"

const defaultOptions = {
  clickOutsideDeactivates: true
}

/**
 * useFocusTrap is a hook that allows you to "trap" focus within a DOM node. Send the ref of a containerElement
 */
// TODO: allow containerElement to be string or function?
export const useFocusTrap = (
  containerElement,
  { initialFocusElement = null, activateOnReady = true } = {},
  trapOptions = {}
) => {
  const focusTrap = React.useRef(null)
  const [ready, readySet] = React.useState(false)
  React.useEffect(() => {
    if (containerElement && containerElement.current) {
      const userOptions = {
        ...defaultOptions,
        ...trapOptions,
        ...(initialFocusElement && {
          initialFocus: initialFocusElement?.current
        })
      }
      focusTrap.current = createFocusTrap(containerElement.current, userOptions)
      if (activateOnReady) {
        activate()
      }
      readySet(true)
    }
    return deactivate
  }, [containerElement])

  const activate = () => focusTrap?.current?.activate()
  const deactivate = () => focusTrap?.current?.deactivate()

  return { ready, activate, deactivate, focusTrap }
}
