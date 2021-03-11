import { useTheme } from "styled-components"
import useDeepCompareEffect from "use-deep-compare-effect"
import { useEffect, useRef } from "react"
import { useMutationObserver } from "../useMutationObserver/useMutationObserver"

/**
 * Will load webfotns
 * @param webfonts - optional. will pick from theme if undefined
 * @param autoload - should we load on changed? default: true
 */
export const useWebFonts = (
  webfonts = null,
  autoload = true,
  shouldUnloadOnUnmount = true
) => {
  const theme = useTheme()
  const loadedFonts = useRef([])

  const load = () => {
    // Make sure we empty what we have added first
    unload()
    const w = typeof window === "undefined" ? null : window
    if ((webfonts || theme.webfonts) && w) {
      const WebFont = require("webfontloader")
      WebFont.load(webfonts || theme.webfonts)
    }
  }

  const unload = () => {
    loadedFonts.current.forEach(node => {
      node.remove()
    })
    loadedFonts.current = []
  }

  useMutationObserver(
    document,
    {
      addedNodes: true,
      subtree: true,
      childList: true
    },
    mutationList => {
      mutationList.forEach(record => {
        record?.addedNodes?.forEach(node => {
          if (node && node?.tagName?.toLowerCase() === "link") {
            loadedFonts.current.push(node)
          }
        })
      })
    }
  )

  useEffect(() => {}, [])

  useDeepCompareEffect(() => {
    if (autoload) {
      load()
    }
    return () => {
      if (shouldUnloadOnUnmount) {
        unload()
      }
    }
  }, [webfonts, theme.webfonts])

  return {
    unload,
    load
  }
}
