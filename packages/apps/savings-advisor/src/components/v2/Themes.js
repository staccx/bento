import React from "react"
import styled from "styled-components"
import { CheckGroup, CheckBox, theming } from "@staccx/base"
import QuestionLead from "../QuestionLead"
import { Convert } from "@staccx/i18n"
import { SanityImage } from "@staccx/sanity"

const MAX_SELECTABLE = 3

const Themes = ({ data, setState, themes = {} }) => {
  const onChange = item => {
    setState({
      themes: {
        ...themes,
        [item]: !themes[item]
      }
    })
  }
  const { answers, title, name } = data
  const isChecked = value => themes[value]

  const isDisabled = value => {
    const numSelected = Object.keys(themes).filter(key => themes[key]).length
    return isChecked(value) ? false : numSelected >= MAX_SELECTABLE
  }

  return (
    <div>
      <QuestionLead question={<Convert data={name} />}>
        <Convert data={title} />
      </QuestionLead>

      <CheckWrapper>
        <CheckGroup group={"geo"} onChange={onChange}>
          {answers.map(item => {
            const value = item.value[0]
            return (
              <ImageCheck
                key={item._key}
                value={value.value}
                id={value._key}
                defaultChecked={isChecked(value.value)}
                disabled={isDisabled(value.value)}
              >
                <Text>
                  <Convert data={item.heading} />
                </Text>
                <Img>
                  <SanityImage image={item.icon} />
                </Img>
              </ImageCheck>
            )
          })}
        </CheckGroup>
      </CheckWrapper>
    </div>
  )
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
      top: 0;
      right: 0;
      left: auto;
      width: 100%;
      height: 100%;
      border-color: transparent;
      border-radius: 50%;
      background-color: transparent;
      transform: scale(0);
      transition: transform 0.2s ease-out;
      z-index: 10;
    }

    svg {
      fill: ${theming.color.secondary};
      width: 50%;
      height: 50%;
      left: auto;
      right: 25%;
      top: 25%;
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
      border-color: ${theming.gradient.first("galaxy")};
      background-color: transparent;
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

export default Themes
