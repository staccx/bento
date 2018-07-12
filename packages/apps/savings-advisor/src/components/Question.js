import React, { Component } from "react"
import styled, { keyframes } from "styled-components"
import { RadioButton, Wrapper } from "@staccx/base"
import { font } from "@staccx/theme"
import QuestionLead from "./QuestionLead"
import ShortTerm from "../components/icons/ShortTerm"
import Umbrella from "../components/icons/Umbrella"
import NoGoal from "../components/icons/NoGoal"
import Fortune from "../components/icons/Fortune"
import Pension from "../components/icons/Pension"

const fallbackImages = [
  <ShortTerm />,
  <Umbrella />,
  <NoGoal />,
  <Fortune />,
  <Pension />
]

class Question extends Component {
  handleChange = (index, value) => {
    this.setState({
      selectedRow: index
    })
    this.props.onChange(value)
  }

  constructor(props, context) {
    super(props, context)
    this.state = {
      selectedRow: null
    }
    this.handleChange = this.handleChange.bind(this)
  }

  render() {
    const { content, selected, translate } = this.props
    const { selectedRow } = this.state

    return (
      <Wrapper size="medium" breakout>
        <QuestionLead question={translate(content.title)}>
          {translate(content.lead)}
        </QuestionLead>
        <Inner totalRows={content.answers.length} currentRow={selectedRow}>
          {content.answers.map((answer, index) => {
            const value = answer.value[0]
            return (
              <AnswerBox
                selected={value === selected}
                key={answer._key}
                htmlFor={answer._key}
              >
                <Image>{answer.icon || fallbackImages[index]}</Image>
                <AdvisorRadio
                  id={answer._key}
                  value={value}
                  selected={value === selected}
                  name={"experiencealternatives"}
                  onChange={() => this.handleChange(index, value)}
                  group={"experiencealternatives"}
                  selectText={"Select "}
                >
                  <Heading>{translate(answer.heading)}</Heading>
                  <span>{translate(answer.body)}</span>
                </AdvisorRadio>
              </AnswerBox>
            )
          })}
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
    top: calc(${p => (p.currentRow / p.totalRows) * 100 + "%"} + 75px);
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
          : p.currentRow === 2
            ? dot2
            : p.currentRow === 3
              ? dot3
              : dot4};
    animation-timing-function: ease-in-out;
    animation-duration: 0.3s;
    animation-fill-mode: forwards;
  }

  @media (max-width: ${p => p.theme.wrapper.medium}) {
    grid-auto-rows: 200px;

    &:after {
      top: calc(${p => (p.currentRow / p.totalRows) * 100 + "%"} + 24px);
    }
  }
`

const Heading = styled.h4`
  color: ${p => p.theme.color.primary};
  font-size: ${font.h3};
  margin-bottom: ${p => p.theme.spacing.small};
`

const AnswerBox = styled.label`
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

  @media (min-width: ${p => p.theme.wrapper.medium}) {
    display: flex;
    align-items: center;
  }
`

const AdvisorRadio = styled(RadioButton)`
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

    @media (max-width: ${p => p.theme.wrapper.medium}) {
      padding: 0;

      &::before,
      &::after {
        top: 24px;
      }
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

  @media (min-width: ${p => p.theme.wrapper.medium}) {
    width: 75%;
    padding: 0 ${p => p.theme.spacing.huge} 0 0;
  }
`

const Image = styled.div`
  svg {
    max-width: 100%;

    @media (max-width: ${p => p.theme.wrapper.medium}) {
      width: 48px;
    }
  }
`

export default Question
