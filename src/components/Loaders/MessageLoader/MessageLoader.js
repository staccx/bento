import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import styled, { css } from "styled-components"
import useInterval from "../../../hooks/useInterval"
import { applyVariants, color, font, mapProp, spacing } from "../../../theming"
import Loading from "../Loading/Loading"
import themeProps from "./MessageLoader.themeProps"

const MessageLoader = ({
  messages = [],
  delay = 5000,
  animation = 500,
  randomOrder = false,
  messagePosition = "bottom",
  textColor,
  variant
}) => {
  const [message, setMessage] = useState(null)
  const [lastMessage, setLastMessage] = useState(null)
  const [index, setIndex] = useState(
    randomOrder ? Math.floor(Math.random() * messages.length) : 0
  )
  useEffect(() => {
    setLastMessage(message)
    setMessage(messages[index])
  }, [messages, index])

  useInterval(() => {
    if (randomOrder) {
      setIndex(Math.floor(Math.random() * messages.length))
    } else if (index + 1 >= messages.length) {
      setIndex(0)
    } else {
      setIndex(index + 1)
    }
  }, delay)
  return (
    <Container messagePosition={messagePosition} variant={variant}>
      <Loading idleTime={0} />
      <MessagesContainer variant={variant}>
        {lastMessage && (
          <PreviousMsg
            textColor={textColor}
            key={lastMessage}
            animation={animation}
            variant={variant}
          >
            {lastMessage}
          </PreviousMsg>
        )}
        {message && (
          <CurrentMsg
            textColor={textColor}
            key={message}
            animation={animation}
            variant={variant}
          >
            {message}
          </CurrentMsg>
        )}
      </MessagesContainer>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: ${mapProp(
    "messagePosition",
    {
      bottom: "column",
      top: "column-reverse",
      left: "row",
      right: "row-reverse"
    },
    "column"
  )};
  width: 100%;
  align-items: center;
  ${applyVariants(themeProps.innerContainer)};
`

const MessagesContainer = styled.div`
  margin: ${spacing.small} 0 ${spacing.large} 0;
  position: relative;
  width: 100%;
  ${applyVariants(themeProps.messagesContainer)};
`

const messageStyle = css`
  color: ${p => p.textColor ?? color.text};
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

MessageLoader.propTypes = {
  /**
   * Messages to be displayed
   */
  messages: PropTypes.array,
  /**
   * Where will the message be placed
   */
  messagePosition: PropTypes.oneOf(["bottom", "top", "left", "right"]),
  /**
   * How long between each message to display
   */
  delay: PropTypes.number,
  /**
   * How many ms of animation in transition between messages
   */
  animation: PropTypes.number,
  /**
   * Variant
   */
  variant: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.string,
    PropTypes.func,
    PropTypes.object
  ]),
  /**
   * Should the messages ble played randomdly?
   */
  randomOrder: PropTypes.bool
}
MessageLoader.themeProps = themeProps

export default MessageLoader
