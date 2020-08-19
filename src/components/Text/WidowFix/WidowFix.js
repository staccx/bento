import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { commonPropTypes } from "../../../theming/index"

/**
 * This component determines how long the final word will have to be to be allowed to go to a new line.
 * If the final word is shorter than the threshold, it will also bring the second last word with it
 * down to the new line.
 */
const WidowFix = ({ children, threshold = 7 }) => {
  return React.Children.map(children, (child, i) => {
    if (typeof child === "string") {
      const wordArray = child.split(/\s/)
      const firstPart = wordArray.slice(0, -2).join(" ") + " "
      const lastWord = wordArray.slice(-1)[0]
      const twoLastWords = wordArray.slice(-2).join(" ")

      return (
        <>
          {lastWord.length < threshold ? (
            <>
              {firstPart}
              <NoBreak>{twoLastWords}</NoBreak>
            </>
          ) : (
            <>{child}</>
          )}
        </>
      )
    } else {
      console.warn("Children must be a string.")
    }
  })
}

const NoBreak = styled.span`
  display: inline-block;
  backgroun-color: red;
`

WidowFix.defaultProps = {
  threshold: 7
}

WidowFix.propTypes = {
  children: commonPropTypes.children.isRequired,
  /**
   * Determines minimum how many carrecters will go to a new line
   */
  threshold: PropTypes.number
}

export default WidowFix
