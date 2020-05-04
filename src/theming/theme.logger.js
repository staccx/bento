import loglevel from "loglevel"
import { normalizeLevel } from "../utils/loglevelUtils"

export const themeLogger = loglevel.getLogger("theme")
export const setLogLevel = level => {
  themeLogger.setLevel(normalizeLevel(level))
}
themeLogger.setDefaultLevel(normalizeLevel(0))
themeLogger.info("Set default loglevel")
