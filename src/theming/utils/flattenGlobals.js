import { css } from "styled-components"
/**
 * Flatten global styles
 * @return {array}
 */
export default theme => {
  if (!theme.hasOwnProperty("global")) {
    console.warn("No global styles present")
    return ``
  }
  return Object.keys(theme.global).reduce(
    (acc, curr) => [
      ...acc,
      css`
        ${theme.global[curr]};
      `
    ],
    []
  )
}
