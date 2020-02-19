import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import styled, { css } from "styled-components"
import useInterval from "../../../hooks/useInterval"
import { applyVariants, color, font, spacing } from "../../../theming"
import Loading from "../Loading/Loading"
import themeProps from "./FullScreenLoader.themeProps"

const FullScreenLoader = ({
  messages,
  delay = 50000,
  animation = 1000,
  variant
}) => {
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
    <FullScreenContainer variant={variant}>
      <InnerContainer variant={variant}>
        <Loading />
        <MessagesContainer variant={variant}>
          {previousMsg && (
            <PreviousMsg
              key={previousMsg}
              animation={animation}
              variant={variant}
            >
              {previousMsg}
            </PreviousMsg>
          )}
          {currentMsg && (
            <CurrentMsg
              key={currentMsg}
              animation={animation}
              variant={variant}
            >
              {currentMsg}
            </CurrentMsg>
          )}
        </MessagesContainer>
      </InnerContainer>
    </FullScreenContainer>
  )
}

const FullScreenContainer = styled.div`
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
  ${applyVariants(themeProps.mainContainer)};
`

const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  ${applyVariants(themeProps.innerContainer)};
`

const MessagesContainer = styled.div`
  margin-top: ${spacing.large};
  position: relative;
  width: 100%;
  ${applyVariants(themeProps.messagesContainer)};
`

const messageStyle = css`
  color: ${color.white};
  font-size: ${font.h2};
  text-align: center;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding: 0 ${spacing.medium};

  @media (max-width: 425px) {
    font-size: ${font.input};
  }

  ${applyVariants(themeProps.message)};
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
  ${applyVariants(themeProps.previousMessage)};
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
  ${applyVariants(themeProps.currentMessage)};
`

FullScreenLoader.propTypes = {
  messages: PropTypes.array.isRequired
}
FullScreenContainer.themeProps = themeProps

export default FullScreenLoader
