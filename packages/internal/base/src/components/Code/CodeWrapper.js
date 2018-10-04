import styled from "styled-components"
import { color, themify } from "@staccx/theme"
import themePropTypes from "../../constants/themePropTypes"

const themeProps = {
  wrapper: {
    name: "code-renderer-wrapper",
    description: "code renderer wrapper style",
    type: themePropTypes.style
  }
}

const CodeWrapper = styled.pre`
  min-width: 300px;
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

  .tag {
    color: ${color("codeHTMLTag")};
  }

  .attr-value {
    color: ${color("codeHTMLAttrValue")};
  }

  .attr-name {
    color: ${color("codeHTMLAttrName")};
  }
  . ${themify(themeProps.wrapper.name)};
`

CodeWrapper.themeProps = themeProps

export default CodeWrapper
