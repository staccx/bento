import React from "react"
import styled from "styled-components"

const Fraction = ({ value, max, maxComponent, ValueComponent }) => {
  return (
    <div>
      {[...Array(max)].map((element, i) => <span key={i}>{element}</span>)}
    </div>
  )
}

export default Fraction
