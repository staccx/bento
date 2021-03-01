import React from "react"
import styled from "styled-components"

const Letters = ({ children, className, Component = Letter }) => {
  return React.Children.map(children, letters =>
    letters.split("").map((letter, index) => (
      <Component key={letter + index} className={className}>
        {letter}
      </Component>
    ))
  )
}

const Letter = styled.span`
  //line-height: 1rem;
`

export default Letters
