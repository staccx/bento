import React from "react"
import styled, { css } from "styled-components"

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
            <WaveHover href="#" index={index}>
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

const WaveHover = styled.a`
  position: relative;
  display: block;
  flex-grow: 1;
  cursor: pointer;

  &::before {
    ${WaveThing};
    ${WavePseudo};
    left: -100%;
  }
  &::after {
    ${WaveThing};
    ${WavePseudo};
    left: 100%;
  }
  &:hover,
  &:active,
  &:focus {
    outline: none;
    ${WaveElement} {
      transform: scaleY(1.8);
    }
    &:before,
    &:after {
      transform: scaleY(1.3);
    }
  }
`

export default Risk
