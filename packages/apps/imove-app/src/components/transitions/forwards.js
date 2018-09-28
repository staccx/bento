import { injectGlobal, keyframes } from "styled-components"

const transitionClassName = "forwards"
const duration = 600

const moveFromRight = keyframes`
from { transform: translateX(100%); }
`
const moveToRight = keyframes`
to { transform: translateX(-100%); }
`

injectGlobal`
.${transitionClassName}-enter, .${transitionClassName}-exit {
  position: absolute;
  width: 100%;
}
.${transitionClassName}-enter-active {
  animation: ${moveFromRight} ${duration}ms ease both;
  z-index: 2;
}
.${transitionClassName}-exit-active {
  animation: ${moveToRight} ${duration}ms ease both;
  z-index: 1;
}
`

export default { transition: transitionClassName, duration }
