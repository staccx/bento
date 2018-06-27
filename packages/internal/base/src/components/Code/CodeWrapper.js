import styled from "styled-components"
import { color } from "@staccx/theme"

export default styled.pre`
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
