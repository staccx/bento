import React from "react"
import styled, { css } from "styled-components"
import { hideVisually, ThemeComponent, theming } from "@staccx/base"

const CasesProgress = ({ progress, max, inverted }) => {
  const progressArray = [...Array(max)].map((e, index) => index < progress)

  return (
    <Outer inverted={inverted}>
      {progressArray.map((dot, index) => {
        return index === progress - 1 ? (
          <Current key={index}>
            <IconWrapper large>
              <ThemeComponent tagName="Dot" />
            </IconWrapper>
          </Current>
        ) : dot ? (
          <Completed key={index}>
            <IconWrapper>
              <ThemeComponent tagName="Checkmark" />
            </IconWrapper>
          </Completed>
        ) : (
          <Next inverted={inverted} key={index} />
        )
      })}
      <HiddenText>Her står status på saken for skjermlesere</HiddenText>
    </Outer>
  )
}

const Outer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  width: 100px;

  &::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    height: 2px;
    transform: translateY(-50%);
    background-color: ${p =>
      p.inverted ? theming.color("white") : theming.color("concrete")};
    z-index: 1;
  }
`

const dotStyle = css`
  position: relative;
  height: 16px;
  width: 16px;
  border-radius: 50%;
  z-index: 2;
`

const Completed = styled.div`
  background-color: ${theming.color("a3")};
  ${dotStyle};
`

const Current = styled.div`
  background-color: ${theming.color("a2")};
  ${dotStyle};
`

const Next = styled.div`
  background-color: ${p =>
    p.inverted ? theming.color("white") : theming.color("concrete")};
  ${dotStyle};
`

const IconWrapper = styled.div`
  padding: ${p => (p.large ? "1px" : "3px")};
  svg {
    display: block;
    width: 100%;
    height: auto;
    fill: ${theming.color.white};
  }
`

const HiddenText = styled.span`
  ${hideVisually};
`

export default CasesProgress
