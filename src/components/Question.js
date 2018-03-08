import React from "react"
import styled from "styled-components"
import { rgba } from "polished"
import { CheckGroup, RadioButton } from "@staccx/base"
import QuestionLead from "./QuestionLead"

const Question = ({ content, onChange, selected }) => (
  <div>
    <QuestionLead question={content.title}>{content.lead}</QuestionLead>
    <CheckGroup group={"experiencealternatives"}>
      {content.answers.map(answer => (
        <AnswerBox
          selected={answer.value === selected}
          key={answer.id}
          htmlFor={answer.id}
        >
          <AdvisorRadio
            id={answer.id}
            value={answer.value}
            selected={answer.value === selected}
            name={"experiencealternatives"}
            onChange={() => onChange(answer.value)}
          >
            <strong>{answer.heading}</strong> <br />
            <span>{answer.body}</span>
          </AdvisorRadio>
        </AnswerBox>
      ))}
    </CheckGroup>
  </div>
)

const AnswerBox = styled.label`
  display: block;
  position: relative;
  border-radius: ${p => p.theme.borderRadius};
  margin-bottom: ${p => p.theme.spacing.medium};
  padding: 1px;
  overflow: hidden;
  background-image: linear-gradient(
    to right,
    ${p => p.theme.gradient.laser[0]} 0%,
    ${p => p.theme.gradient.laser[1]} 100%
  );
  box-shadow: ${p =>
    p.selected
      ? `0 4px 12px rgba(0,0,0, 0.15)`
      : `
        0 4px 12px ` +
        rgba(p.theme.gradient.laser[0], 0.08) +
        `,
        0 -1px 8px ` +
        rgba(p.theme.gradient.galaxy[1], 0.1) +
        `
  `};
  transition: box-shadow 0.2s ease;

  &:hover,
  &:active,
  &:focus {
    box-shadow: ${p =>
      p.selected
        ? `0 4px 12px rgba(0,0,0, 0.15)`
        : `
          0 4px 16px ` +
          rgba(p.theme.gradient.laser[0], 0.18) +
          `,
          0 -1px 12px ` +
          rgba(p.theme.gradient.galaxy[1], 0.2) +
          `
    `};
  }

  &:hover,
  & input:focus ~ {
    label::before {
      border-color: ${p => p.theme.color.secondary} !important;
    }
  }
`

const AdvisorRadio = styled(RadioButton)`
  padding: 0;
  border-radius: 14px;
  color: ${p => (p.selected ? p.theme.color.white : p.theme.color.text)};
  background-color: ${p => p.theme.color.white};
  background-image: linear-gradient(to right, white 0%, white 100%);

  ${p =>
    p.selected
      ? `
      background-image: linear-gradient(
        to right,
        ` +
        p.theme.gradient.laser[0] +
        ` 0%,
        ` +
        p.theme.gradient.laser[1] +
        ` 100%
      );
      border-image-slice: 1;`
      : ``};

  > label {
    position: static;
    display: inline-block;
    width: 100%;
    padding: ${p => p.theme.spacing.large};
    padding-left: ${p => p.theme.spacing.largePlus};

    &::before,
    &::after {
      top: 50%;
      left: 24px;
      transform: translateY(-50%);
      border-color: ${p => p.theme.color.primary};
      border-width: 2px;
    }

    &::after {
      background-color: ${p => p.theme.color.secondary};
      transform: translate(4px, -50%) scale(0);
    }
  }

  > input:checked ~ label {
    &::before {
      border-color: ${p => p.theme.color.white};
    }

    &::after {
      transform: translate(4px, -50%) scale(1);
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

export default Question
