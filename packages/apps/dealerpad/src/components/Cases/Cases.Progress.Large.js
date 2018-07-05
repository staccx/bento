import React from "react"
import styled, { css } from "styled-components"
import { color, spacing, ThemeComponent } from "@staccx/theme"
import { Text, hideVisually } from "@staccx/base"
import getStatus from "../../helpers/getStatus"

const CasesProgressLarge = ({ progress, max, inverted }) => {
  const progressArray = [...Array(max)].map((e, index) => index < progress)

  return (
    <Outer inverted={inverted}>
      {progressArray.map((dot, index) => {
        return index === progress - 1 ? (
          <ProgressItem status="current" key={getStatus(progress)}>
            <Text>{getStatus(progress)}</Text>
            <ArrowWrapper>
              <ThemeComponent tagName="ArrowRight" />
            </ArrowWrapper>
          </ProgressItem>
        ) : dot ? (
          <ProgressItem status="completed" key={getStatus(progress)}>
            <Completed>
              <IconWrapper>
                <ThemeComponent tagName="Checkmark" />
              </IconWrapper>
            </Completed>
            <ArrowWrapper>
              <ThemeComponent tagName="ArrowRight" />
            </ArrowWrapper>
          </ProgressItem>
        ) : (
          <ProgressItem status="next" key={getStatus(progress)}>
            <Text>{getStatus(index + 1)}</Text>
            {index + 1 !== progressArray.length && (
              <ArrowWrapper>
                <ThemeComponent tagName="ArrowRight" />
              </ArrowWrapper>
            )}
          </ProgressItem>
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
  align-items: center;
  background-color: ${color.white};
  border-radius: 3px;
`

const ProgressItem = styled.div`
  position: relative;
  flex-grow: ${p => (p.status === "completed" ? 0 : 1)};
  flex-basis: ${p => (p.status === "completed" ? "52px" : "33%")};
  align-self: stretch;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${spacing.small};
  color: ${p => (p.status === "current" ? color("primary") : color("wcag"))};
`

const dotStyle = css`
  position: relative;
  height: 16px;
  width: 16px;
  border-radius: 50%;
  z-index: 2;
`

const Completed = styled.div`
  background-color: ${color("a3")};
  ${dotStyle};
`

const IconWrapper = styled.div`
  padding: ${p => (p.large ? "1px" : "3px")};
  svg {
    display: block;
    width: 100%;
    height: auto;
    fill: ${color.white};
  }
`

const ArrowWrapper = styled.div`
  position: absolute;
  top: 0;
  right: -${spacing.tiny};
  height: 100%;
  width: 12px;

  svg {
    display: block;
    width: 100%;
    height: 100%;
    fill: ${color("bg1")};
  }
`

const HiddenText = styled.span`
  ${hideVisually};
`

export default CasesProgressLarge
