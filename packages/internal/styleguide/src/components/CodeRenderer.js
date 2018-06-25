import React, { Component } from "react"
import PropTypes from "prop-types"
import Prism from "prismjs"
import styled from "styled-components"
import { color } from "@staccx/theme"
import * as languages from "./code-generation"
// import "prismjs/themes/prism-tomorrow.css"

class CodeRenderer extends Component {
  render() {
    const { generate, language, grammar, className } = this.props.lang

    console.log()
    console.log(grammar, language)
    const html = {
      __html: Prism.highlight(generate(this.props), grammar, language)
    }
    console.log(html)
    return (
      <CodeWrapper className={className}>
        <code className={className} dangerouslySetInnerHTML={html} />
      </CodeWrapper>
    )
  }
}

const CodeWrapper = styled.pre`
  background-color: ${color("codeBackground")};
  color: ${color("codeForeground")};
  .token {
    // Affects all code
    color: ${color("codeForeground")};
  }

  .comment {
    color: ${color("codeComment")};
  }

  .keyword {
    color: ${color("codeKeyword")};
  }

  .operator {
    color: ${color("codeOperator")};
  }

  .function {
    color: ${color("codeFunction")};
  }

  .string {
    color: ${color("codeString")};
  }

  .punctuation {
    color: ${color("codePunctuation")};
  }

  .number {
    color: ${color("codeNumber")};
  }

  .class-name {
    color: ${color("codeClass")};
  }
`

CodeRenderer.propTypes = {
  body: PropTypes.object,
  headers: PropTypes.object,
  lang: PropTypes.shape({
    generate: PropTypes.func,
    grammar: PropTypes.object,
    language: PropTypes.string,
    className: PropTypes.string
  }),
  method: PropTypes.string,
  path: PropTypes.string,
  queryParams: PropTypes.object,
  summary: PropTypes.string,
  token: PropTypes.string
}

export default CodeRenderer

CodeRenderer.defaultProps = {
  body: { id: 0, name: '"Stupendouos"' },
  headers: {
    Authorization: "Bearer ey123123",
    "Content-Type": '"application/x-www-form-urlencoded"'
  },
  lang: languages.restSharp,
  method: "GET",
  path: "https://cloud.stacc.com/api",
  queryParams: { id: 0, name: "Stupendouos" },
  summary: "Returns the list of all funds in the universe.",
  token: "eyJ0eXAiOiJKV1MiLCJhbGciOiJIUzI1NiJ9"
}
