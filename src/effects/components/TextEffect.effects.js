// Found these and wanted to create something similar https://tobiasahlin.com/moving-letters

import styled from "styled-components"
import { TextEffectLetter } from "./TextEffect"

const ScaleLetter = styled(TextEffectLetter)`
  transform-origin: 50% 100%;
`

export const scaleElastic = ({
  duration = 1500,
  elasticity = 600,
  delay = 50
} = {}) => ({
  effectKey: "scaleElastic",
  effects: [
    {
      targets: ".scale-elastic-letter",
      scale: [0, 1],
      duration,
      elasticity,
      delay: (el, i) => delay * (i + 1)
    }
  ],
  lettersProps: {
    className: "scale-elastic-letter"
  },
  LetterComponent: ScaleLetter
})

export const bounceUp = ({ duration = 1500, delay = 50 } = {}) => ({
  effectKey: "bounceUp",
  effects: [
    {
      targets: ".bounce-up-letter",
      translateY: ["1.1rem", 0],
      translateZ: 0,
      duration,
      delay: (el, i) => delay * i
    }
  ],
  lettersProps: {
    className: "bounce-up-letter"
  }
})

export const outNow = ({
  scale = [20, 1],
  opacity = [0, 1],
  duration = 400,
  delay = 800
} = {}) => ({
  effectKey: "outnow",
  effects: [
    {
      targets: ".outnow",
      scale,
      opacity,
      easing: "easeOutCirc",
      duration: duration,
      delay: (el, i) => delay * i
    }
  ],
  lettersProps: {
    className: "outnow"
  }
})

export const stretchIn = ({
  scale = [20, 1],
  opacity = [0, 1],
  duration = 400,
  delay = 800
} = {}) => ({
  effectKey: "stretchIn",
  effects: [
    {
      targets: ".stretchIn",
      translateX: [40, 0],
      translateZ: 0,
      opacity: [0, 1],
      easing: "easeOutExpo",
      duration: 1200,
      delay: (el, i) => 500 + 30 * i
    }
  ],
  lettersProps: {
    className: "stretchIn"
  }
})

export const hi = ({
  hiDuration = 1000,
  bangDuration = 1000,
  rotateZ = [45, 360],
  hiOffset = "-=550",
  bangOffset = "-=1000",
  delay = 500
} = {}) => ({
  effectKey: "hi",
  effects: [
    {
      targets: ".letters .hi",
      scale: [0, 1],
      duration: hiDuration,
      offset: hiOffset
    },
    {
      targets: ".letters .bang",
      scale: [0, 1],
      rotateZ: rotateZ,
      duration: bangDuration,
      offset: bangOffset,
      delay
    }
  ],
  lettersProps: {
    className: ["hi", "bang"]
  },
  renderAsSingleChildAfterComplete: true
})
