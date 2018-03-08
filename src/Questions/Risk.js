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
      value: "very-low"
    },
    {
      id: "fdsfd4447",
      heading: "I get uneasy",
      body: "I worry, but keep the night sleep. Keep calm with my investments.",
      value: "low"
    },
    {
      id: "fdsa23118",
      heading: "I keep the calm",
      body: "Do not care what the papers write. Keep calm with my investments.",
      value: "medium"
    },
    {
      id: "fdsafds14477",
      heading: "An excellent opportunity",
      body:
        "I do not worry at all. This is a golden opportunity, stocks become cheaper!",
      value: "medium-plus"
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

  @observable current = 0

  constructor(props, context) {
    super(props, context)

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

  render() {
    const waveArray = [...Array(this.props.waves)]
    return (
      <div>
        <QuestionLead question={content.title}>{content.lead}</QuestionLead>
        <LabelWrapper>
          {content.answers.map((e, i) => (
            <Label
              onClick={() =>
                this.handleClick(
                  i * (this.props.waves / (content.answers.length - 1))
                )
              }
              key={e.id}
            >
              {e.heading}
            </Label>
          ))}
        </LabelWrapper>
        <WaveWrapper>
          {waveArray.map((e, index) => (
            <WaveHover
              index={index}
              key={index}
              onClick={() => this.handleClick(index)}
              neighbor={
                this.current === index - 1 || this.current === index + 1
              }
              nextDoorNeighbor={
                this.current === index - 2 || this.current === index + 2
              }
              selected={this.current === index}
            >
              <WaveElement />
            </WaveHover>
          ))}
        </WaveWrapper>
      </div>
    )
  }
}

const Label = styled.label`
  font-weight: bold;
  color: #2f80ed;
`

const LabelWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: ${p => p.theme.spacing.medium};
`

const WaveWrapper = styled.div`
  display: flex;
  justify-content: stretch;
`

const WaveElement = styled.i`
  width: 3px;
  background-color: #2f80ed;
  height: 32px;
  border-radius: 1px;
  display: block;
  transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
`

const WaveHover = styled.span`
  position: relative;
  display: block;
  flex-grow: 1;
  cursor: pointer;
  ${WaveElement} {
    transform: ${p =>
      p.selected ? "scaleY(1.8)" : p.neighbor ? "scaleY(1.4)" : "scaleY(1)"};
    background-color: ${p =>
      p.selected
        ? "#FF00C8"
        : p.neighbor ? "#C030FF" : p.nextDoorNeighbor ? "#9D32FF" : "#2f80ed"};
  }
`

export default Risk
