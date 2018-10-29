import { css, keyframes } from "styled-components"
import { theming } from "@staccx/base"

const transitionClassName = "slideRight"
const duration = 600

const moveFromRight = keyframes`
from { transform: translateX(100%); }
`
const moveToRight = keyframes`
to { transform: translateX(-100%); }
`

export const slideRightStyle = theming.createGlobal({
  slideRight: css`
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
})

export default { transition: transitionClassName, duration }
