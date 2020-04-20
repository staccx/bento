const logLevels = {
  TRACE: 0,
  DEBUG: 1,
  INFO: 2,
  WARN: 3,
  ERROR: 4,
  SILENT: 5
}
export const isValidLoglevel = level =>
  logLevels.hasOwnProperty(level.toString().toUpperCase()) ||
  Object.entries(logLevels).some(([, val]) => val === level)

const flipLevel = level => {
  if (!isValidLoglevel(level)) {
    return level
  }

  const key = level.toString().toUpperCase()
  if (logLevels.hasOwnProperty(key)) {
    return logLevels[key]
  }

  return Object.entries(logLevels).find(([, val]) => val === level)[0]
}

export const normalizeLevel = level => {
  if (!isValidLoglevel(level)) {
    throw new Error(`Not a valid level: ${level}`)
  }

  if (Number.isInteger(Number(level))) {
    return 5 - level
  }

  return 5 - flipLevel(level)
}
