import React from "react"
import loglevel from "loglevel"
import { normalizeLevel } from "../utils/loglevelUtils"

export const useLogging = (loggerName, level) => {
  const logger = React.useRef(loglevel.getLogger(loggerName))

  React.useEffect(() => {
    logger.current = loglevel.getLogger(loggerName)
  }, [loggerName])

  React.useEffect(() => {
    if (logger.current && level?.toString()) {
      logger.current.setLevel(normalizeLevel(level))
    }
  }, [logger, level])

  return logger.current
}
