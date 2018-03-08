import React from "react"
import styled from "styled-components"

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
  font-size: ${p => p.theme.font.size.h1};
  font-weight: normal;
  text-align: center;
  margin-bottom: ${p => p.theme.spacing.large};
  margin-top: ${p => p.theme.spacing.huge};
  color: ${p => p.theme.color.grayDark};
  @media (max-width: ${p => p.theme.wrapper.medium}) {
    margin-top: ${p => p.theme.spacing.large};
    font-size: ${p => p.theme.font.size.h2};
  }
`

const Lead = styled.p`
  font-family: ${p => p.theme.font.body};
  font-size: ${p => p.theme.font.size.base};
  color: ${p => p.theme.color.wcag};
  font-weight: normal;
  text-align: center;
  margin-bottom: ${p => p.theme.spacing.huge};
  max-width: 480px;
  margin-left: auto;
  margin-right: auto;
  line-height: 2;
  @media (max-width: ${p => p.theme.wrapper.medium}) {
    margin-bottom: ${p => p.theme.spacing.large};
  }
  ${Question} + & {
    margin-top: -${p => p.theme.spacing.medium};
  }
`

export default QuestionLead
