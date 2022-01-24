/**
 * This check for a substring in a string
 */
export const stringIncludes = (
  /** whole text */
  text: string,
  /** what you want to find */
  snippet: string,
  /** should we ignore case? */
  ignoreCase: boolean = true
): boolean => {
  const t = ignoreCase ? text.toUpperCase() : text
  const s = ignoreCase ? snippet.toUpperCase() : snippet
  return t.indexOf(s) !== -1
}
