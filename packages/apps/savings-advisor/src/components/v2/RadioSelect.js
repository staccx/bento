import React from "react"
import styled, { keyframes } from "styled-components"
import { RadioButton, Wrapper, theming, State } from "@staccx/base"
import { Convert } from "@staccx/i18n"
import ShortTerm from "../icons/ShortTerm"
import Umbrella from "../icons/Umbrella"
import NoGoal from "../icons/NoGoal"
import Fortune from "../icons/Fortune"
import Pension from "../icons/Pension"
import QuestionLead from "../QuestionLead"

const fallbackImages = [
  <ShortTerm />,
  <Umbrella />,
  <NoGoal />,
  <Fortune />,
  <Pension />
]

const RadioSelect = ({ data, onChange, groupName }) => {
  const { answers, title, name } = data

  return (
    <State>
      {({ set, selected, selectedRow = 0 }) => {
        return (
          <Wrapper size="medium" breakout>
            <QuestionLead question={<Convert data={title} />}>
              <Convert data={name} />
            </QuestionLead>
            <Inner totalRows={answers.length} currentRow={selectedRow}>
              {answers.map((answer, index) => {
                const value = answer.value[0]
                const selected = selectedRow === index
                return (
                  <AnswerBox
                    selected={selected}
                    key={answer._key}
                    htmlFor={answer._key}
                  >
                    <Image>{answer.icon || fallbackImages[index]}</Image>
                    <AdvisorRadio
                      id={answer._key}
                      value={value}
                      selected={selected}
                      name={groupName}
                      onChange={() => {
                        set({ selected: value, selectedRow: index })
                        onChange(value)
                      }}
                      group={groupName}
                      selectText={"Select "}
                    >
                      <Heading>
                        <Convert
                          data={answer.heading}
                          name={"purpose.answers.heading"}
                        />
                      </Heading>
                      <span>
                        <Convert
                          data={answer.body}
                          name={"purpose.answers.body"}
                        />
                      </span>
                    </AdvisorRadio>
                  </AnswerBox>
                )
              })}
            </Inner>
          </Wrapper>
        )
      }}
    </State>
  )
}

const dot0 = keyframes`30%, 70% { transform: scale(1.6) translate(-52px, -50%); }`
const dot1 = keyframes`29%, 70% { transform: scale(1.5999) translate(-52px, -50%); }`
const dot2 = keyframes`31%, 70% { transform: scale(1.6001) translate(-52px, -50%); }`
const dot3 = keyframes`28%, 70% { transform: scale(1.5998) translate(-52px, -50%); }`
const dot4 = keyframes`32%, 70% { transform: scale(1.6002) translate(-52px, -50%); }`

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
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: ${theming.color.secondary};
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

  @media (max-width: ${theming.wrapper.medium}) {
    grid-auto-rows: 200px;

    &:after {
      top: calc(${p => (p.currentRow / p.totalRows) * 100 + "%"} + 24px);
    }
  }
`

const Heading = styled.h4`
  color: ${theming.color.primary};
  font-size: ${theming.font.h3};
  margin-bottom: ${theming.spacing.small};
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
      border-color: ${theming.color.secondary} !important;
    }
    ${Heading} {
      color: ${theming.color.secondary};
    }
  }

  @media (min-width: ${theming.wrapper.medium}) {
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
    padding-left: ${theming.spacing.large};

    &::before,
    &::after {
      top: 50%;
      left: auto;
      right: 48px;
      transform: translateY(-50%);
      border-color: ${theming.color.primary};
      border-width: 2px;
    }

    &::before {
      content: "Select  ";
      text-indent: 32px;
    }

    &::after {
      background-color: ${theming.color.secondary};
      transform: translate(-4px, -50%) scale(0);
    }

    @media (max-width: ${theming.wrapper.medium}) {
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
        border-color: ${theming.color.white} !important;
      }
    }
  }

  @media (min-width: ${theming.wrapper.medium}) {
    width: 75%;
    padding: 0 ${theming.spacing.huge} 0 0;
  }
`

const Image = styled.div`
  svg {
    max-width: 100%;

    @media (max-width: ${theming.wrapper.medium}) {
      width: 48px;
    }
  }
`

export default RadioSelect
