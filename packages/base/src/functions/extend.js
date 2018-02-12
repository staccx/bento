import styled, { css } from "styled-components"

export default (Component, style) => {
  const styles = css`
    ${style};
  `
  return styled(Component)`
    ${styles};
  `
}
