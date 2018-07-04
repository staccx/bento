import React from "react"
import styled from "styled-components"
import { color, spacing, targetSize } from "@staccx/theme"
import { Input, Button } from "@staccx/base"

const Chat = ({ children }) => (
  <ChatBox variant="Chat">
    <ChatWrapper>{children}</ChatWrapper>
    <ChatInput>
      <Input variant="chat" placeholder="beskjed" />
      <Button variant="chat">Send</Button>
    </ChatInput>
  </ChatBox>
)

const ChatBox = styled.div`
  background-color: ${color.white};
  height: 100%;
  position: relative;
`

const ChatWrapper = styled.div`
  overflow-y: auto;
  overflow-x: hidden;
  padding: ${spacing.medium} ${spacing.small} ${targetSize.normal};
  max-height: 370px;
`

const ChatInput = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: ${targetSize.normal};
  border-top: 1px solid ${color.bg};
`

export default Chat
