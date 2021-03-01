import React, { useEffect, useRef, useState } from "react"
import styled, { css } from "styled-components"
import { useAnimeTimeline } from "../useAnimeTimeline"
import Letters from "./Letters"

const TextAppear = ({ children }) => {
  const [completed, completedSet] = useState(false)
  const group = useRef(null)
  const timeline = useAnimeTimeline({})

  useEffect(() => {
    if (group) {
      timeline.current
        .add({
          targets: ".letter",
          scale: [0.3, 1],
          opacity: [0, 1],
          translateZ: 0,
          easing: "easeOutExpo",
          duration: 600,
          delay: (el, i) => 70 * (i + 1)
        })
        .add({
          targets: ".line",
          scaleX: [0, 1],
          opacity: [0.5, 1],
          easing: "easeOutExpo",
          duration: 700,
          offset: "-=875",
          delay: (el, i, l) => 80 * (l - i),
          complete: function(anim) {
            completedSet(true)
          }
        })
    }
  }, [group])

  return (
    <Wrapper className={"animation-wrapper"}>
      <Line top className={"line"} />
      <span ref={group}>
        {completed && children}
        {!completed && <Letters className={"letter"}>{children}</Letters>}
      </span>
      <Line bottom className={"line"} />
    </Wrapper>
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

const Wrapper = styled.span`
  opacity: 1;
  position: relative;
  display: inline-block;
  padding-top: 0.1em;
  padding-right: 0.05em;
  padding-bottom: 0.15em;
`

export default TextAppear
