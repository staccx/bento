import PropTypes from "prop-types"
import React from "react"
import styled, { css } from "styled-components"
import { observable } from "mobx"
import { inject, observer } from "mobx-react"
import { easeOutQuad } from "easing-utils"
import { clamp, lerp } from "@staccx/math"
import { theming, ThemeComponent } from "@staccx/base"
import { FadeInFromTop } from "@staccx/animations"
import QuestionLead from "../components/QuestionLead"

const DefaultRiskComponent = ({
  data,
  handleHover,
  handleClick,
  current,
  hovered
}) => (
  <WaveWrapper onMouseLeave={() => handleHover(1000)}>
    {data.map((e, index) => (
      <WaveContainer
        index={index}
        key={index}
        onClick={() => handleClick(index)}
        onMouseEnter={() => handleHover(index)}
        distanceFromSelected={
          current !== null ? Math.abs(current - index) : null
        }
        distanceFromHovered={
          hovered !== null ? Math.abs(hovered - index) : null
        }
      >
        <WaveBar />
      </WaveContainer>
    ))}
  </WaveWrapper>
)
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

  @observable
  current = null
  @observable
  hovered = null

  @observable
  bodyText = null

  constructor(props, context) {
    super(props, context)
    this.handleClick = this.handleClick.bind(this)
    this.handleHover = this.handleHover.bind(this)
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
        <ThemeComponent
          tagName={"risk"}
          fallback={DefaultRiskComponent}
          data={waveArray}
          handleClick={this.handleClick}
          handleHover={this.handleHover}
          current={this.current}
          hovered={this.hovered}
        />

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
  color: ${p =>
    p.current ? theming.color.secondary : theming.color("waveDefault")};
  flex-basis: 25%;
  text-align: center;
  padding: ${theming.spacing.tiny};
  cursor: pointer;
  transition: opacity 0.2s ease;

  @media (max-width: ${theming.wrapper.small}) {
    font-size: ${theming.font.tiny};
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
    background-color: ${theming.color.line};
  }

  &::after {
    left: auto;
    right: 0;
  }
`

const LabelWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: ${theming.spacing.medium};
`

const WaveWrapper = styled.div`
  display: flex;
  justify-content: stretch;
  margin-bottom: ${theming.spacing.medium};
`

const WaveBar = styled.i`
  position: relative;
  width: 3px;
  background-color: ${theming.color("waveDefault")};
  height: 32px;
  border-radius: 1px;
  display: block;
  transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  @media (max-width: ${theming.wrapper.medium}) {
    width: 1px;
  }
`

const waveStyler = (distanceFromSelected, distanceFromHovered) => {
  switch (distanceFromSelected) {
    case 0:
      return css`
        background-color: ${theming.color("waveSelected0")};
        transform: scaleY(1.8);
      `

    case 1:
      return css`
        background-color: ${theming.color("waveSelected1")};
        transform: scaleY(1.4);
      `

    case 2:
      return css`
        background-color: ${theming.color("waveSelected2")};
        transform: scaleY(1.1);
      `

    default:
      switch (distanceFromHovered) {
        case 0:
          return css`
            background-color: ${theming.color("waveHovered0")};
            transform: scaleY(0.6);
          `

        case 1:
          return css`
            background-color: ${theming.color("waveHovered1")};
            transform: scaleY(0.7);
          `

        case 2:
          return css`
            background-color: ${theming.color("waveHovered2")};
            transform: scaleY(0.9);
          `

        default:
          return css`
            background-color: ${theming.color("waveDefault")};
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
        : `background-color: ${theming.color(
            "waveDefault"
          )}; transform: scaleY(1);`};
  }
`

const BodyTextWrapper = styled.div`
  margin: ${theming.spacing.medium} 0;
`

const BodyText = styled.span`
  display: block;
  width: 100%;
  text-align: center;
  color: ${theming.color.gray};
  animation: ${FadeInFromTop} 0.5s ease-out forwards 1;
`

export default Risk
