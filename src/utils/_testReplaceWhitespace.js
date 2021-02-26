export const replaceWhiteSpaceForMatcher = value =>
  value ? value.replace(/\s/g, "\u00a0") : value
