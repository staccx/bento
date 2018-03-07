import React from "react"
import styled, { css } from "styled-components"
import debounce from "lodash/debounce"

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
class Risk extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.state = { selected: 0, hovered: 0 }

    this.handleHover = this.handleHover.bind(this)

    this.incrementWave = this.incrementWave.bind(this)
  }

  incrementWave = incrementTo => {
    let nextIncrement = incrementTo
    if (this.state.selected > incrementTo) {
      nextIncrement = this.state.selected - 1
    } else if (this.state.selected < incrementTo) {
      nextIncrement = this.state.selected + 1
    }

    this.setState(
      {
        selected: nextIncrement
      },
      () => {
        if (this.state.selected !== this.state.hovered) {
          console.log(nextIncrement)
          this.incrementWave(this.state.hovered)
        }
      }
    )
  }

  handleHover = index => {
    if (this.state.hovered !== index) {
      this.setState({
        hovered: index
      })
    }

    this.incrementWave(index)
  }

  render() {
    const waves = 100
    const waveArray = [...Array(waves)]
    return (
      <Space>
        <LabelWrapper>
          {content.answers.map(e => <Label key={e.id}>{e.heading}</Label>)}
        </LabelWrapper>
        <WaveWrapper>
          {waveArray.map((e, index) => (
            <WaveHover
              index={index}
              key={index}
              onMouseEnter={() => this.handleHover(index)}
              selected={this.state.selected === index}
            >
              <WaveElement />
            </WaveHover>
          ))}
        </WaveWrapper>
      </Space>
    )
  }
}

const Space = styled.div`
  margin-top: 48px;
  margin-bottom: 48px;
`
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

const WaveThing = css`
  width: 3px;
  background-color: #2f80ed;
  height: 32px;
  border-radius: 1px;
  display: block;
`

const WaveElement = styled.i`
  ${WaveThing};
  transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
`

const WavePseudo = css`
  content: "";
  position: absolute;
  left: -100%;
  top: 0;
  z-index: -1;
  transition: 0.6s transform cubic-bezier(0.175, 0.885, 0.32, 1.275);
`

const WaveHover = styled.span`
  position: relative;
  display: block;
  flex-grow: 1;
  cursor: pointer;
  ${WaveElement} {
    transform: ${p => p.selected && "scaleY(1.8)"};
  }
`

export default Risk
