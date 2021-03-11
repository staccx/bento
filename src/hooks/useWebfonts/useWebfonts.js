import { useTheme } from "styled-components"
import useDeepCompareEffect from "use-deep-compare-effect"
import { useRef } from "react"
import { useMutationObserver } from "../useMutationObserver/useMutationObserver"
import { useLogging } from "../useLogging"

/**
 * Will load webfotns
 * @param webfonts - optional. will pick from theme if undefined
 */
export const useWebFonts = (webfonts = null, autoload = true) => {
  const theme = useTheme()
  const logger = useLogging("useWebFonts", 1)
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
    logger.debug(loadedFonts.current)
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
          console.log(node)
          if (node && node?.tagName?.toLowerCase() === "link") {
            logger.debug("Added node", node)
            loadedFonts.current.push(node)
          }
        })
      })
    }
  )

  useDeepCompareEffect(() => {
    if (autoload) {
      load()
    }

    logger.debug(loadedFonts.current)
  }, [webfonts, theme.webfonts])

  return {
    unload,
    load
  }
}
