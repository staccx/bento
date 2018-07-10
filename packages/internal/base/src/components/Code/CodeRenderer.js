import React, { Component } from "react"
import PropTypes from "prop-types"
import Prism from "prismjs"
import CodeWrapper from "./CodeWrapper"
import "prismjs/components/prism-markup"

class CodeRenderer extends Component {
  render() {
    const { code, language } = this.props
    let grammar = null
    let className = ""

    console.log("prism", Prism.languages)
    switch (language) {
      case "markup": {
        className = "language-markup"
        grammar = Prism.languages.html
        break
      }

      case "javascript": {
        className = "language-js"
        grammar = Prism.languages.javascript
        break
      }

      case "java": {
        className = "language-java"
        grammar = Prism.languages.java
        break
      }

      case "csharp": {
        className = "language-csharp"
        grammar = Prism.languages.csharp
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
  language: PropTypes.oneOf(["markup", "javascript", "java", "csharp"])
}

export default CodeRenderer
