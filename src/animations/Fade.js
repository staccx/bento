import { keyframes, css } from "styled-components"

export const FadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`

const fadeInFromTopKeyframe = (y = "-0.5rem") => keyframes`
  from {
    opacity: 0;
    transform: translateY(${y});
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`

const fadeInFromTop = (y = "-0.5rem") => css`
  opacity: 0;
  transform: translateY(${y});
  animation: ${fadeInFromTopKeyframe({ y })} 0.4s ease-out forwards 1;
`

// Usage (applies both keyframe + css: 
// ${fadeInFromTop()};
// ${fadeInFromTop('100%')};
