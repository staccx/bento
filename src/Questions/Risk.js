import PropTypes from "prop-types"
import React from "react"
import styled, { css } from "styled-components"
import { observable } from "mobx"
import { inject, observer } from "mobx-react"
import { easeOutQuad } from "easing-utils"
import { lerp, clamp } from "@staccx/base"
import QuestionLead from "../components/QuestionLead"

const content = {
  title: "What do you do if there is a strong market decline?",
  lead:
    "Funds and stocks are affected by fluctuations in the market globally and nationally. A strong market decline is a fall of more than 20%, which has happened seven times on Oslo Stock Exchange over the past 20 years. In the two most extreme cases, the IT bubble and the financial crisis, Oslo Børs had a decline of over 40%.",
  answers: [
    {
      id: "fsdfds2",
      heading: "I sell everything",
      value: "very-low",
      range: [0, 24]
    },
    {
      id: "fdsfd4447",
      heading: "I get uneasy",
      body: "I worry, but keep the night sleep. Keep calm with my investments.",
      value: "low",
      range: [24, 49]
    },
    {
      id: "fdsa23118",
      heading: "I keep the calm",
      body: "Do not care what the papers write. Keep calm with my investments.",
      value: "medium",
      range: [50, 74]
    },
    {
      id: "fdsafds14477",
      heading: "An excellent opportunity",
      body:
        "I do not worry at all. This is a golden opportunity, stocks become cheaper!",
      value: "medium-plus",
      range: [75, 100]
    }
  ]
}

@inject("apiStore")
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

  constructor(props, context) {
    super(props, context)
    this.state = { hovered: null }

    this.handleClick = this.handleClick.bind(this)
    this.incrementWave = this.incrementWave.bind(this)
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
    console.log(index)
    index = clamp(0, this.props.waves - 1, Math.round(index))
    clearTimeout(this.timeout)
    window.cancelAnimationFrame(this._frameId)
    if (this.current !== index) {
      const { setRisk } = this.props.apiStore
      this.start = this.current
      this.end = index
      this.tick = 0
      this.ticks = Math.abs(this.start - this.end)
      setRisk(index)
      this.incrementWave(index)
    }
  }

  handleHover(index) {
    this.setState({ hovered: index })
  }

  render() {
    const waveArray = [...Array(this.props.waves)]
    return (
      <div>
        <QuestionLead question={content.title}>{content.lead}</QuestionLead>
        <LabelWrapper>
          {content.answers.map((label, i) => (
            <RangeLabel
              onClick={() =>
                this.handleClick(
                  Math.floor((label.range[0] + label.range[1]) / 2)
                )
              }
              key={label.id}
              current={
                this.current > label.range[0] && this.current < label.range[1]
              }
            >
              {label.heading}
            </RangeLabel>
          ))}
        </LabelWrapper>
        <WaveWrapper onMouseLeave={() => this.setState({ hovered: 1000 })}>
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
                this.state.hovered !== null
                  ? Math.abs(this.state.hovered - index)
                  : null
              }
            >
              <WaveBar />
            </WaveContainer>
          ))}
        </WaveWrapper>
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

  @media (max-width: ${p => p.theme.wrapper.small}) {
    font-size: ${p => p.theme.font.size.tiny};
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
            transform: scaleY(0.8);
          `

        case 1:
          return css`
            background-color: #3bbdf8;
            transform: scaleY(0.9);
          `

        case 2:
          return css`
            background-color: #2f92f3;
            transform: scaleY(0.95);
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

export default Risk
