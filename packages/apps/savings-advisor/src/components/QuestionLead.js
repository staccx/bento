import React from "react"
import styled from "styled-components"
import { font, color, spacing, wrapper } from "@staccx/theme"

const QuestionLead = ({ question, children }) => {
  return (
    <React.Fragment>
      <Question>{question}</Question>
      {children && <Lead>{children}</Lead>}
    </React.Fragment>
  )
}

const Question = styled.h1`
  font-family: ${p => p.theme.font.body};
  font-size: ${font.h1};
  font-weight: normal;
  text-align: center;
  margin-bottom: ${spacing.large};
  margin-top: ${spacing.huge};
  color: ${color.grayDark};
  @media (max-width: ${wrapper.medium}) {
    margin-top: ${spacing.large};
    font-size: ${font.h2};
  }
`

const Lead = styled.p`
  font-family: ${p => p.theme.font.body};
  font-size: ${font.base};
  color: ${color.wcag};
  font-weight: normal;
  text-align: center;
  margin-bottom: ${spacing.huge};
  max-width: 480px;
  margin-left: auto;
  margin-right: auto;
  line-height: 2;
  @media (max-width: ${wrapper.medium}) {
    margin-bottom: ${spacing.large};
  }
  ${Question} + & {
    margin-top: -${spacing.medium};
  }
`

export default QuestionLead
