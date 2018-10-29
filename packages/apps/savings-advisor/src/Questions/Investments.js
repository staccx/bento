import React, { Component } from "react"
import styled from "styled-components"
import { inject, observer } from "mobx-react"
import { CheckGroup, CheckBox, theming } from "@staccx/base"
import QuestionLead from "../components/QuestionLead"

const MAX_SELECTABLE = 3

@inject("apiStore", "uiStore")
@observer
class Investments extends Component {
  render() {
    const { translate, cmsTheme, getImage } = this.props.uiStore
    const { optionList, toggleOption } = this.props.apiStore

    const isChecked = value => optionList.indexOf(value) !== -1

    const isDisabled = value => {
      return isChecked(value) ? false : optionList.length >= MAX_SELECTABLE
    }

    return (
      <div>
        <QuestionLead question={translate(cmsTheme.title)}>
          {translate(cmsTheme.lead)}
        </QuestionLead>

        <CheckWrapper>
          <CheckGroup group={"geo"} onChange={toggleOption}>
            {cmsTheme.answers.map(item => {
              const value = item.value[0]
              return (
                <ImageCheck
                  key={item._key}
                  value={value}
                  id={value}
                  defaultChecked={isChecked(value)}
                  disabled={isDisabled(value)}
                >
                  <Text>{translate(item.heading)}</Text>
                  <Img>
                    <img src={getImage(item.icon)} alt="" />
                  </Img>
                </ImageCheck>
              )
            })}
          </CheckGroup>
        </CheckWrapper>
      </div>
    )
  }
}

const Img = styled.div`
  position: relative;
  border-radius: 50%;
  overflow: hidden;

  img {
    display: block;
  }

  &::after {
    content: "";
    position: absolute;
    top: 0%;
    left: 0%;
    display: block;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.35);
    z-index: 1;
    transition: background 0.2s ease;
  }
`

const ImageCheck = styled(CheckBox)`
  & ~ label {
    position: relative;
    padding: 0;
    color: ${theming.color.white};
    transition: opacity 0.2s ease-in;

    &::before {
      right: 0;
      left: auto;
      width: ${theming.targetSize.normal};
      height: ${theming.targetSize.normal};
      border-color: transparent;
      border-radius: 50%;
      background-color: transparent;
      transform: scale(0);
      transition: transform 0.2s ease-out;
      z-index: 10;
    }

    svg {
      fill: ${theming.color.white};
      width: 24px;
      height: 24px;
      left: auto;
      right: 9px;
      top: 9px;
      z-index: 11;
    }

    &:hover,
    &:active,
    &:focus {
      &::before {
        border-color: transparent;
        background-color: transparent;
      }
    }
  }

  &:not(:disabled) ~ label {
    &:hover,
    &:active,
    &:focus {
      ${Img} {
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        &::after {
          background-color: rgba(0, 0, 0, 0.05);
        }
      }
    }
  }

  &:checked ~ label {
    &::before {
      border-color: ${theming.getProp("gradient", "galaxyStart")};
      background-color: ${theming.getProp("gradient", "galaxyEnd")};
      transform: scale(1);
    }
  }

  &:disabled ~ label {
    opacity: 0.5;
    cursor: default;
  }
`

const Text = styled.span`
  position: absolute;
  left: 50%;
  top: 50%;
  color: ${theming.color.white};
  text-align: center;
  text-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
  transform: translate(-50%, -50%);
  z-index: 5;
  @media (max-width: ${theming.wrapper.small}) {
    font-size: ${theming.font.tiny};
  }
`

const CheckWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, auto);
  grid-column-gap: ${theming.spacing.medium};
  justify-content: center;
  @media (max-width: ${theming.wrapper.small}) {
    grid-template-columns: repeat(2, auto);
  }
`

export default Investments
