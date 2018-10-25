import { css, keyframes } from "styled-components"
import { theming } from "@staccx/base"

const transitionClassName = "slideLeft"
const duration = 600

const moveFromLeft = keyframes`
from { transform: translateX(-100%); }
`
const moveToLeft = keyframes`
to { transform: translateX(100%); }
`

export const slideLeftStyle = theming.createGlobal({
  slideLeft: css`
    .${transitionClassName}-enter, .${transitionClassName}-exit {
      position: absolute;
      width: 100%;
    }
    .${transitionClassName}-enter-active {
      animation: ${moveFromLeft} ${duration}ms ease both;
      z-index: 2;
    }
    .${transitionClassName}-exit-active {
      animation: ${moveToLeft} ${duration}ms ease both;
      z-index: 1;
    }
  `
})

export default { transition: transitionClassName, duration }
