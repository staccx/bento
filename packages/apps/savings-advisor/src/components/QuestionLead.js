import React from "react"
import styled from "styled-components"
import { theming } from "@staccx/base"

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
  font-size: ${theming.font.h1};
  font-weight: normal;
  text-align: center;
  margin-bottom: ${theming.spacing.large};
  margin-top: ${theming.spacing.huge};
  color: ${theming.color.grayDark};
  @media (max-width: ${theming.wrapper.medium}) {
    margin-top: ${theming.spacing.large};
    font-size: ${theming.font.h2};
  }
`

const Lead = styled.p`
  font-family: ${p => p.theme.font.body};
  font-size: ${theming.font.base};
  color: ${theming.color.wcag};
  font-weight: normal;
  text-align: center;
  margin-bottom: ${theming.spacing.huge};
  max-width: 480px;
  margin-left: auto;
  margin-right: auto;
  line-height: 2;
  @media (max-width: ${theming.wrapper.medium}) {
    margin-bottom: ${theming.spacing.large};
  }
  ${Question} + & {
    margin-top: -${theming.spacing.medium};
  }
`

export default QuestionLead
