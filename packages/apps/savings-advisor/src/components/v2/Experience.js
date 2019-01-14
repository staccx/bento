import React from "react"
import styled from "styled-components"
import { Toggle, theming } from "@staccx/base"
import { Convert } from "@staccx/i18n"
import QuestionLead from "../QuestionLead"

const Experience = ({ data, setState }) => {
  const { title, name, answers } = data

  return (
    <div>
      <QuestionLead question={<Convert data={name} />}>
        <Convert data={title} />
      </QuestionLead>
      <Toggle
        defaultChecked={false}
        group="testddd"
        id="453346gnkj"
        onChange={e => {
          const { checked: hasExperience } = e.target
          setState({ hasExperience })
        }}
        variant={"bigSwitch"}
      >
        I have invested before
      </Toggle>
      <FlexAnswer>
        {answers.map(answer => (
          <label key={answer._key} htmlFor="453346gnkj">
            <Convert data={answer.heading} />
          </label>
        ))}
      </FlexAnswer>
    </div>
  )
}

const FlexAnswer = styled.div`
  margin-top: ${theming.spacing.medium};
  display: flex;
  justify-content: center;
  > * {
    padding: ${theming.spacing.small};
    display: inline-block;
    &:not(:first-child) {
      border-left: 1px solid ${theming.color.line};
    }
  }
`

export default Experience
