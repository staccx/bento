export default (text, snippet, ignoreCase = true) => {
  const t = ignoreCase ? text.toUpperCase() : text
  const s = ignoreCase ? snippet.toUpperCase() : snippet
  return t.indexOf(s) !== -1
}
