import PropTypes from "prop-types"
import React from "react"
import styled, { css } from "styled-components"
import { observable } from "mobx"
import { inject, observer } from "mobx-react"
import { easeOutQuad } from "easing-utils"
import { Animations, clamp, lerp } from "@staccx/base"
import QuestionLead from "../components/QuestionLead"

@inject("apiStore", "uiStore")
@observer
class Risk extends React.Component {
  static defaultProps = {
    easingFunction: easeOutQuad,
    waves: 100
  }

  static propTypes = {
    easingFunction: PropTypes.func,
    apiStore: PropTypes.any,
    waves: PropTypes.number
  }

  @observable current = null
  @observable hovered = null
  @observable bodyText = null

  constructor(props, context) {
    super(props, context)
    this.handleClick = this.handleClick.bind(this)
    this.incrementWave = this.incrementWave.bind(this)
    this.getContentBody = this.getContentBody.bind(this)
    this.timeout = null
    this.tick = 0
    this.ticks = 100
  }

  componentWillMount() {
    this.current = this.props.apiStore.currentRisk
  }

  incrementWave() {
    const { currentRisk } = this.props.apiStore
    if (this.tick >= this.ticks) {
      clearTimeout(this.timeout)
      window.cancelAnimationFrame(this._frameId)
      this.current = currentRisk
      this.bodyText = this.getContentBody(this.current)
      return
    }

    const t = this.props.easingFunction(this.tick / this.ticks)
    this.current = Math.round(lerp(this.start, this.end, t))
    this.timeout = setTimeout(() => {
      this._frameId = window.requestAnimationFrame(this.incrementWave)
    })
    this.tick++
  }

  handleClick(index) {
    index = clamp(0, this.props.waves - 1, Math.round(index))
    clearTimeout(this.timeout)
    window.cancelAnimationFrame(this._frameId)
    if (this.current !== index) {
      const { setRisk } = this.props.apiStore
      this.start = this.current
      this.bodyText = null
      this.end = index
      this.tick = 0
      this.ticks = Math.abs(this.start - this.end)
      setRisk(index)
      this.incrementWave(index)
    }
  }

  handleHover(index) {
    this.hovered = index
  }

  getContentBody(index) {
    const { translate, cmsRisk } = this.props.uiStore
    const currentContent = cmsRisk.answers.find(item => {
      const value = item.value[0]
      const { low, high } = value
      return low <= index && high >= index
    })
    return translate(currentContent.body)
  }

  render() {
    const { translate, cmsRisk } = this.props.uiStore
    const waveArray = [...Array(this.props.waves)]
    return (
      <div>
        <QuestionLead question={translate(cmsRisk.title)}>
          {translate(cmsRisk.lead)}
        </QuestionLead>
        <LabelWrapper>
          {cmsRisk.answers.map((answer, i) => {
            const value = answer.value[0]
            const { low, high } = value
            return (
              <RangeLabel
                onClick={() => this.handleClick(Math.floor((low + high) / 2))}
                key={answer._key}
                current={this.current > low && this.current < high}
              >
                {translate(answer.heading)}
              </RangeLabel>
            )
          })}
        </LabelWrapper>
        <WaveWrapper onMouseLeave={() => this.handleHover(1000)}>
          {waveArray.map((e, index) => (
            <WaveContainer
              index={index}
              key={index}
              onClick={() => this.handleClick(index)}
              onMouseEnter={() => this.handleHover(index)}
              distanceFromSelected={
                this.current !== null ? Math.abs(this.current - index) : null
              }
              distanceFromHovered={
                this.hovered !== null ? Math.abs(this.hovered - index) : null
              }
            >
              <WaveBar />
            </WaveContainer>
          ))}
        </WaveWrapper>
        <BodyTextWrapper>
          {this.bodyText ? (
            <BodyText>{this.bodyText}</BodyText>
          ) : (
            <span>&nbsp;</span>
          )}
        </BodyTextWrapper>
      </div>
    )
  }
}

const RangeLabel = styled.label`
  position: relative;
  font-weight: bold;
  color: ${p => (p.current ? p.theme.color.secondary : "#2f80ed")};
  flex-basis: 25%;
  text-align: center;
  padding: ${p => p.theme.spacing.tiny};
  cursor: pointer;
  transition: opacity 0.2s ease;

  @media (max-width: ${p => p.theme.wrapper.small}) {
    font-size: ${p => p.theme.font.size.tiny};
  }

  &:hover,
  &:focus {
    opacity: ${p => (p.current ? "1" : "0.7")};
  }

  &::before,
  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 1px;
    height: 12px;
    background-color: ${p => p.theme.color.line};
  }

  &::after {
    left: auto;
    right: 0;
  }
`

const LabelWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: ${p => p.theme.spacing.medium};
`

const WaveWrapper = styled.div`
  display: flex;
  justify-content: stretch;
  margin-bottom: ${p => p.theme.spacing.medium};
`

const WaveBar = styled.i`
  position: relative;
  width: 3px;
  background-color: #2f80ed;
  height: 32px;
  border-radius: 1px;
  display: block;
  transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  @media (max-width: ${p => p.theme.wrapper.medium}) {
    width: 1px;
  }
`

const waveStyler = (distanceFromSelected, distanceFromHovered) => {
  switch (distanceFromSelected) {
    case 0:
      return css`
        background-color: #ff00c8;
        transform: scaleY(1.8);
      `

    case 1:
      return css`
        background-color: #c030ff;
        transform: scaleY(1.4);
      `

    case 2:
      return css`
        background-color: #9d32ff;
        transform: scaleY(1.1);
      `

    default:
      switch (distanceFromHovered) {
        case 0:
          return css`
            background-color: #4cf7ff;
            transform: scaleY(0.6);
          `

        case 1:
          return css`
            background-color: #3bbdf8;
            transform: scaleY(0.7);
          `

        case 2:
          return css`
            background-color: #2f92f3;
            transform: scaleY(0.9);
          `

        default:
          return css`
            background-color: #2f80ed;
            transform: scaleY(1);
          `
      }
  }
}

const WaveContainer = styled.span`
  position: relative;
  display: block;
  flex-grow: 1;
  cursor: pointer;
  ${WaveBar} {
    ${p =>
      p.distanceFromSelected < 3 || p.distanceFromHovered < 3
        ? waveStyler(p.distanceFromSelected, p.distanceFromHovered)
        : "background-color: #2f80ed; transform: scaleY(1);"};
  }
`

const BodyTextWrapper = styled.div`
  margin: ${p => p.theme.spacing.medium} 0;
`

const BodyText = styled.span`
  display: block;
  width: 100%;
  text-align: center;
  color: ${p => p.theme.color.gray};
  animation: ${Animations.FadeInFromTop} 0.5s ease-out forwards 1;
`

export default Risk
