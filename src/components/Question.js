import React, { Component } from "react"
import styled, { keyframes } from "styled-components"
import { rgba } from "polished"
import { CheckGroup, RadioButton, Wrapper } from "@staccx/base"
import QuestionLead from "./QuestionLead"

class Question extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      selectedRow: null
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange = (index, value) => {
    this.setState({
      selectedRow: index
    })
    this.props.onChange(value)
  }

  render() {
    const { content, selected } = this.props
    const { selectedRow } = this.state

    return (
      <Wrapper size="medium">
        <QuestionLead question={content.title}>{content.lead}</QuestionLead>
        <Inner totalRows={content.answers.length} currentRow={selectedRow}>
          {content.answers.map((answer, index) => (
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
                onChange={() => this.handleChange(index, answer.value)}
                group={"experiencealternatives"}
              >
                <Heading>{answer.heading}</Heading>
                <span>{answer.body}</span>
              </AdvisorRadio>
            </AnswerBox>
          ))}
        </Inner>
      </Wrapper>
    )
  }
}

const dot0 = keyframes`30%, 70% { transform: scale(0.6) translate(-52px, -50%); }`
const dot1 = keyframes`29%, 70% { transform: scale(0.5999) translate(-52px, -50%); }`
const dot2 = keyframes`31%, 70% { transform: scale(0.6001) translate(-52px, -50%); }`
const dot3 = keyframes`28%, 70% { transform: scale(0.5998) translate(-52px, -50%); }`
const dot4 = keyframes`32%, 70% { transform: scale(0.6002) translate(-52px, -50%); }`

const Inner = styled.div`
  position: relative;
  display: grid;
  grid-auto-flow: row;
  grid-auto-rows: 150px;

  &:after {
    content: "";
    opacity: ${p => (p.currentRow !== null ? 1 : 0)};
    position: absolute;
    top: calc(${p => p.currentRow / p.totalRows * 100 + "%"} + 75px);
    right: 0;
    display: block;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: rebeccapurple;
    transition: top 0.3s ease-out;
    transform: scale(1) translate(-52px, -50%);
    animation-name: ${p =>
      p.currentRow === 0
        ? dot0
        : p.currentRow === 1
          ? dot1
          : p.currentRow === 2 ? dot2 : p.currentRow === 3 ? dot3 : dot4};
    animation-timing-function: ease-in-out;
    animation-duration: 0.3s;
    animation-fill-mode: forwards;
  }
`

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
      transform: translate(-4px, -50%) scale(0);
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
