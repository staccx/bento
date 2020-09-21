import React, { Component } from "react"
import PropTypes from "prop-types"
import Prism from "prismjs"
import CodeWrapper from "./CodeWrapper"
import "prismjs/components/prism-markup"
import "prismjs/components/prism-java"
import "prismjs/components/prism-csharp"

/**
 * CodeRenderer can be use to display code snippets to simplify the process of making something new, or just to display code examples.

 The component is used with CodeWrapper, where the CodeWrapper wraps the CodeRenderer component.
*/
class CodeRenderer extends Component {
  render() {
    const { code, language } = this.props
    let grammar = null
    let className = ""

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
        return null
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

const propTypes = {
  /**
   * The string conatining the code
   */
  code: PropTypes.string.isRequired,
  /**
   * The string conatining what type of code to display
   */
  language: PropTypes.oneOf(["markup", "javascript", "java", "csharp"])
    .isRequired
}

CodeRenderer.propTypes = propTypes

export default CodeRenderer
