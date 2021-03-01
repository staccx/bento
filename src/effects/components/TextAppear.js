import React from "react"
import styled, { css } from "styled-components"
import Letters from "./Letters"
import { useTextEffect } from "../useTextEffect"
import { TextEffectWrapper } from "./TextEffect"

const TextAppear = ({ children }) => {
  const { completed } = useTextEffect({
    effects: [
      {
        targets: ".letter",
        scale: [0.3, 1],
        opacity: [0, 1],
        translateZ: 0,
        easing: "easeOutExpo",
        duration: 600,
        delay: (el, i) => 70 * (i + 1)
      },
      {
        targets: ".line",
        scaleX: [0, 1],
        opacity: [0.5, 1],
        easing: "easeOutExpo",
        duration: 700,
        offset: "-=875",
        delay: (el, i, l) => 80 * (l - i)
      }
    ]
  })

  return (
    <TextEffectWrapper>
      <Line top className={"line"} />
      {completed && children}
      {!completed && (
        <Letters effectKey={"text-appear"} className={"letter"}>
          {children}
        </Letters>
      )}
      <Line bottom className={"line"} />
    </TextEffectWrapper>
  )
}

const Line = styled.span`
  opacity: 0;
  position: absolute;
  left: 0;
  height: 3px;
  width: 100%;
  background-color: currentColor;
  transform-origin: 0 0;
  ${p =>
    p.top &&
    css`
      top: 0;
    `}
  ${p =>
    p.bottom &&
    css`
      bottom: 0;
    `}
`

export default TextAppear
