import React, { useState, useEffect } from "react"
import styled, { css } from "styled-components"
import useInterval from "../../../hooks/useInterval"
// Also add applyVariants:
import { color, font, spacing } from "../../../theming"
import Loading from "../../DataViz/Loading/Loading"

const FullScreenLoader = ({ messages, delay = 5000, animation = 1000 }) => {
  // state variables
  const [count, setCount] = useState(0)
  const [currentMsg, setCurrentMsg] = useState(messages[0])
  const [previousMsg, setPreviousMsg] = useState("")
  const [hasLooped, setHasLooped] = useState(false)

  // variables
  const maxCount = messages.length - 1

  const handleLooped = () => {
    setCount(0)
    setHasLooped(true)
  }

  // hooks
  useInterval(() => {
    maxCount > count ? setCount(count + 1) : handleLooped()
  }, delay)

  useEffect(() => {
    setCurrentMsg(messages[count])
    if (count === 0 && hasLooped) {
      setPreviousMsg(messages[maxCount])
    } else if (count > 0) {
      setPreviousMsg(messages[count - 1])
    }
  }, [count, hasLooped])

  return (
    <FullScreenDiv>
      <Container>
        <Loading />
        <LoadingMessage>
          {previousMsg && (
            <PreviousMsg key={previousMsg} animation={animation}>
              {previousMsg}
            </PreviousMsg>
          )}
          {currentMsg && (
            <CurrentMsg key={currentMsg} animation={animation}>
              {currentMsg}
            </CurrentMsg>
          )}
        </LoadingMessage>
      </Container>
    </FullScreenDiv>
  )
}

const FullScreenDiv = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  z-index: 999;
  background-color: ${color.black};
  display: flex;
  justify-content: center;
  align-items: center;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`

const LoadingMessage = styled.div`
  color: ${color.white};
  font-size: ${font.h2};
  padding-top: ${spacing.large} ${spacing.medium} 0;
  position: relative;
  width: 100%;
`

const messageStyle = css`
  text-align: center;
  position: absolute;
  top: 48px;
  left: 0;
  right: 0;
`

const PreviousMsg = styled.div`
  ${messageStyle};

  animation: fadeout ${p => p.animation}ms linear;
  animation-fill-mode: forwards;
  @keyframes fadeout {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`

const CurrentMsg = styled.div`
  ${messageStyle};

  animation: fadein ${p => p.animation}ms linear;
  @keyframes fadein {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`

export default FullScreenLoader
