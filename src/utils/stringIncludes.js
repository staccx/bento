/**
 * This check for a substring in a string
 * @param text whole text
 * @param snippet what you want to find
 * @param ignoreCase should we ignore case? default: true
 * @return {boolean}
 */
export const stringIncludes = (text, snippet, ignoreCase = true) => {
  const t = ignoreCase ? text.toUpperCase() : text
  const s = ignoreCase ? snippet.toUpperCase() : snippet
  return t.indexOf(s) !== -1
}
