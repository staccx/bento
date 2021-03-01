import React, { useState } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Letters from "./Letters"
import { useAnime } from "../useAnime"

const TextElastic = ({
  children,
  delayBetween = 45,
  duration = 1500,
  elasticity = 500
}) => {
  const [completed, completedSet] = useState(false)
  useAnime({
    targets: ".elastic-wrapper .elastic-letter",
    scale: [0, 1],
    duration,
    elasticity,
    delay: (el, i) => delayBetween * (i + 1),
    complete: () => completedSet(true)
  })

  return (
    <Wrapper className={"elastic-wrapper"}>
      {completed && children}
      {!completed && (
        <Letters className={"elastic-letter"} Component={Letter}>
          {children}
        </Letters>
      )}
    </Wrapper>
  )
}

TextElastic.propTypes = {
  /**
   * Must be a string
   */
  children: PropTypes.string.isRequired,
  /**
   * Stagger time between each letter
   */
  delayBetween: PropTypes.number,
  /**
   * Total duration of the animation
   */
  duration: PropTypes.number,
  /**
   * How "bouncy" should it be
   */
  elasticity: PropTypes.number
}

const Letter = styled.span`
  transform-origin: 50% 100%;
  display: inline-block;
  line-height: 1em;
  white-space: pre;
`

const Wrapper = styled.span`
  position: relative;
  display: inline-block;
  padding-top: 0.2em;
  padding-right: 0.05em;
  padding-bottom: 0.1em;
  overflow: hidden;
`

export default TextElastic
