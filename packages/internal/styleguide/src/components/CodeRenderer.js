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
  background-color: ${color.bgGray};

  .token {
    // Affects all code
  }

  .comment {
  }

  .keyword {
  }

  .operator {
  }

  .function {
    color: #45f23c;
  }

  .string {
  }

  .punctuation {
  }

  .keyword {
  }

  .number {
  }
`

CodeRenderer.propTypes = {
  body: PropTypes.object,
  headers: PropTypes.object,
  lang: PropTypes.string,
  method: PropTypes.string,
  path: PropTypes.string,
  queryParams: PropTypes.object,
  summary: PropTypes.string,
  token: PropTypes.string
}

export default CodeRenderer

CodeRenderer.defaultProps = {
  body: { id: 0 },
  headers: null,
  lang: languages.nodeRequest,
  method: "GET",
  path: "https://cloud.stacc.com/api",
  queryParams: { id: 0 },
  summary: "Returns the list of all funds in the universe.",
  token: "eyJ0eXAiOiJKV1MiLCJhbGciOiJIUzI1NiJ9"
}
