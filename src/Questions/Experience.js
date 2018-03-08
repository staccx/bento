import React from "react"
import styled from "styled-components"
import { Toggle } from "@staccx/base"
import { inject, observer } from "mobx-react"
import QuestionLead from "../components/QuestionLead"

const content = {
  title: "Do you have experience with funds or investments?",
  answers: [
    {
      id: "8924qdwsacv",
      heading: "I have never invested",
      body: "Your money is perhaps on an high interest account?",
      value: "no"
    },
    {
      id: "wt4iw12",
      heading: "I have invested before",
      body: "You have maybe invested in funds or stocks?",
      value: "yes"
    }
  ]
}

@inject("uiStore")
@observer
class Start extends React.Component {
  render() {
    const { hasExperience, toggleExperience } = this.props.uiStore
    return (
      <div>
        <QuestionLead question={content.title}>{content.lead}</QuestionLead>
        <StyledToggle
          defaultChecked={hasExperience}
          group="testddd"
          id="453346gnkj"
          onChange={toggleExperience}
        >
          I have invested before
        </StyledToggle>
        <FlexAnswer>
          {content.answers.map(answer => (
            <label key={answer.id} htmlFor="453346gnkj">
              {answer.heading}
            </label>
          ))}
        </FlexAnswer>
      </div>
    )
  }
}

const FlexAnswer = styled.div`
  margin-top: ${p => p.theme.spacing.medium};
  display: flex;
  justify-content: center;
  > * {
    padding: ${p => p.theme.spacing.small};
    display: inline-block;
    &:not(:first-child) {
      border-left: 1px solid ${p => p.theme.color.line};
    }
  }
`

const StyledToggle = styled(Toggle)`
  display: flex;
  justify-content: center;
  > div {
    background: #e0e0e0;
    box-shadow: inset 2px 4px 14px rgba(0, 0, 0, 0.1);
    border-radius: 15px;
    width: 200px !important;
    height: 70px !important;
    &::after {
      content: url("data:image/svg+xml;charset=UTF-8,%3csvg width='24' height='24' viewBox='0 0 24 24' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3ctitle%3eVector%3c/title%3e%3cdesc%3eCreated using Figma%3c/desc%3e%3cg id='Canvas' transform='translate(-16240 -15156)'%3e%3cg id='Vector'%3e%3cuse xlink:href='%23path0_fill' transform='translate(16240 15156)' fill='%23FE83AC'/%3e%3c/g%3e%3c/g%3e%3cdefs%3e%3cpath id='path0_fill' d='M 23.4242 20.5796L 20.6573 23.3302C 20.1524 23.8382 19.328 23.8382 18.8179 23.3302L 11.9034 16.4485L 4.99398 23.3302C 4.48389 23.8382 3.65435 23.8382 3.14941 23.3302L 0.382567 20.5796C -0.127522 20.0715 -0.127522 19.2504 0.382567 18.7424L 7.29196 11.8556L 0.382567 4.97394C -0.122369 4.46077 -0.122369 3.63456 0.382567 3.13678L 3.14941 0.381032C 3.65435 -0.127011 4.48389 -0.127011 4.99398 0.381032L 11.9034 7.26783L 18.8179 0.381032C 19.328 -0.127011 20.1575 -0.127011 20.6573 0.381032L 23.4242 3.13164C 23.9343 3.63969 23.9343 4.4659 23.4293 4.97394L 16.5148 11.8556L 23.4242 18.7424C 23.9343 19.2504 23.9343 20.0715 23.4242 20.5796Z'/%3e%3c/defs%3e%3c/svg%3e ") !important;
      background: #ffffff;
      box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.02),
        0px 4px 4px rgba(0, 0, 0, 0.02), 0px 8px 8px rgba(0, 0, 0, 0.03),
        0px 16px 16px rgba(0, 0, 0, 0.03), 0px 32px 32px rgba(0, 0, 0, 0.03),
        0px 64px 64px rgba(0, 0, 0, 0.03);
      border-radius: 13px;
      display: flex !important;
      justify-content: center;
      align-items: center;
    }
  }
  > input:checked + div {
    &::after {
      content: url("data:image/svg+xml;charset=UTF-8,%3csvg width='27' height='26' viewBox='0 0 27 26' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3ctitle%3eVector%3c/title%3e%3cdesc%3eCreated using Figma%3c/desc%3e%3cg id='Canvas' transform='translate(-16619 -15155)'%3e%3cg id='Vector'%3e%3cuse xlink:href='%23path0_fill' transform='translate(16619 15155)' fill='%231CCBFF'/%3e%3c/g%3e%3c/g%3e%3cdefs%3e%3cpath id='path0_fill' d='M 25.7363 1.84701L 23.3714 0.245909C 22.717 -0.195422 21.8205 -0.0260733 21.3825 0.620525L 9.78959 17.6476L 4.46199 12.3414C 3.90553 11.7872 2.99871 11.7872 2.44224 12.3414L 0.417346 14.3582C -0.139115 14.9124 -0.139115 15.8156 0.417346 16.375L 8.60969 24.5344C 9.06825 24.9912 9.78959 25.3401 10.4388 25.3401C 11.088 25.3401 11.7424 24.9347 12.1649 24.324L 26.1176 3.82273C 26.5607 3.17613 26.3907 2.28834 25.7363 1.84701Z'/%3e%3c/defs%3e%3c/svg%3e ") !important;
    }
  }
`

export default Start
