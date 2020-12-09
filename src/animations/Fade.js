import { keyframes } from "styled-components"

export const FadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`

export const FadeInFromTop = keyframes`
  from {
    opacity: 0;
    transform: translateY(-1rem);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`
