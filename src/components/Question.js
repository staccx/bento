import React from "react"
import styled from "styled-components"
import { rgba } from "polished"
import { CheckGroup, RadioButton, Wrapper } from "@staccx/base"
import QuestionLead from "./QuestionLead"

const Question = ({ content, onChange, selected }) => (
  <Wrapper size="medium">
    <QuestionLead question={content.title}>{content.lead}</QuestionLead>
    <CheckGroup group={"experiencealternatives"} onChange={() => null}>
      {content.answers.map(answer => (
        <AnswerBox
          selected={answer.value === selected}
          key={answer.id}
          htmlFor={answer.id}
        >
          <Image>{answer.icon}</Image>
          <AdvisorRadio
            id={answer.id}
            value={answer.value}
            selected={answer.value === selected}
            name={"experiencealternatives"}
            onChange={() => onChange(answer.value)}
          >
            <Heading>{answer.heading}</Heading>
            <span>{answer.body}</span>
          </AdvisorRadio>
        </AnswerBox>
      ))}
    </CheckGroup>
  </Wrapper>
)

const Heading = styled.h4`
  color: ${p => p.theme.color.primary};
  font-size: ${p => p.theme.font.size.h3};
  margin-bottom: ${p => p.theme.spacing.small};
`

const AnswerBox = styled.label`
  display: flex;
  align-items: center;
  position: relative;
  border-radius: ${p => p.theme.borderRadius};
  margin-bottom: ${p => p.theme.spacing.large};
  padding: 1px;
  transition: box-shadow 0.2s ease;

  &:hover,
  &:active,
  & input:focus ~ {
    label::before {
      border-color: ${p => p.theme.color.secondary} !important;
    }
    ${Heading} {
      color: ${p => p.theme.color.secondary};
    }
  }
`

const AdvisorRadio = styled(RadioButton)`
  width: 75%;
  padding: 0 ${p => p.theme.spacing.huge} 0 0;
  border-radius: 14px;

  > label {
    position: static;
    display: inline-block;
    width: 100%;
    padding-left: ${p => p.theme.spacing.large};

    &::before,
    &::after {
      top: 50%;
      left: auto;
      right: 48px;
      transform: translateY(-50%);
      border-color: ${p => p.theme.color.primary};
      border-width: 2px;
    }

    &::before {
      content: "Select  ";
      text-indent: 32px;
    }

    &::after {
      background-color: ${p => p.theme.color.secondary};
      transform: translate(-4px, -50%) scale(0);
    }
  }

  > input:checked ~ label {
    &::after {
      transform: translate(-4px, -50%) scale(1);
    }
  }

  > input:checked {
    &:focus,
    &:active,
    &:hover {
      & label::before {
        border-color: ${p => p.theme.color.white} !important;
      }
    }
  }
`

const Image = styled.div`
  svg {
    max-width: 100%;
  }
`

export default Question
