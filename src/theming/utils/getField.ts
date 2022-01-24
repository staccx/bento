import get from "lodash.get"

/**
 * Finds a theme value
 * @param fielduse dot notation e.g font.family.heading
 * @returns {function({theme?: *}): *}
 */
export function getField(
  field: string | string[],
  fallback: string | null = null
) {
  return ({ theme }: { theme: any }) => get(theme, field, fallback)
}
