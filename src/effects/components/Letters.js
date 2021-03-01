import React, { useMemo } from "react"
import styled from "styled-components"

export const childrenToString = (component, counter = 0) => {
  if (Array.isArray(component)) {
    return component.map(childrenToString)
  }
  if (typeof component === "string") {
    return component
  }

  const props = component.props
  if (props?.children) {
    counter += 2
    return childrenToString(props.children, counter)
  }
  return ""
}

const Letters = ({
  children,
  className = null,
  effectKey,
  Component = Letter
}) => {
  const words = useMemo(() => {
    const wordOrWords = childrenToString(children)
    if (!Array.isArray(wordOrWords)) {
      return wordOrWords.split("")
    }
    return wordOrWords
  }, [children])

  return words.map((word, index) => (
    <WordRender
      Component={Component}
      effectKey={effectKey}
      className={
        Array.isArray(className)
          ? className[index % className.length]
          : className
      }
      key={`${word}-${effectKey}-${index}`}
    >
      {word}
    </WordRender>
  ))
}

const WordRender = ({ children, className = null, effectKey, Component }) => {
  return React.Children.map(children, (letter, index) =>
    // avoid rendering whitespace in terms of animation
    /^\s*$/.test(letter) ? (
      " "
    ) : (
      <Component key={effectKey + index} className={className}>
        {letter}
      </Component>
    )
  )
}

const Letter = styled.span`
  //line-height: 1rem;
`

export default Letters
