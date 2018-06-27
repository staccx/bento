import React, { Component } from "react"
import PropTypes from "prop-types"
import Prism from "prismjs"
import CodeWrapper from "./CodeWrapper"

class CodeRenderer extends Component {
  render() {
    const { code, language } = this.props

    let grammar = null
    let className = ""
    switch (language) {
      case "javascript": {
        className = "language-js"
        grammar = Prism.languages.javascript
        break
      }
      default:
        break
    }

    const html = {
      __html: Prism.highlight(code, grammar, language)
    }
    return (
      <CodeWrapper className={className}>
        <code className={className} dangerouslySetInnerHTML={html} />
      </CodeWrapper>
    )
  }
}

CodeRenderer.propTypes = {
  code: PropTypes.string,
  language: PropTypes.oneOf(["javascript"])
}

export default CodeRenderer

CodeRenderer.defaultProps = {
  language: "javascript"
}
