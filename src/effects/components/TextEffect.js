import React from "react"
import styled from "styled-components"
import Letters, { childrenToString } from "./Letters"
import { useTextEffect } from "../useTextEffect"
import PropTypes from "prop-types"

const TextEffect = ({
  effectKey,
  effects,
  lettersProps = {},
  wrapperProps = {},
  timelineConfig = {},
  LetterComponent = TextEffectLetter,
  WrapperComponent = TextEffectWrapper,
  children,
  renderAsSingleChildAfterComplete = false
}) => {
  const { completed } = useTextEffect({
    effects,
    timelineConfig
  })

  return (
    <WrapperComponent {...wrapperProps}>
      {completed &&
        (renderAsSingleChildAfterComplete
          ? childrenToString(children).join("")
          : children)}
      {!completed && (
        <Letters
          {...lettersProps}
          effectKey={effectKey}
          Component={LetterComponent}
        >
          {children}
        </Letters>
      )}
    </WrapperComponent>
  )
}

TextEffect.propTypes = {
  /**
   * Must be a string
   */
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
    .isRequired
}

export const TextEffectLetter = styled.span`
  display: inline-block;
  line-height: 1rem;
  white-space: pre;
`

export const TextEffectWrapper = styled.span`
  position: relative;
  display: inline-block;
  padding-top: 0.2rem;
  padding-right: 0.05em;
  padding-bottom: 0.15em;
  overflow: hidden;
`

export default TextEffect
