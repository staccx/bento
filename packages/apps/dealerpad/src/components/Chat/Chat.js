import React from "react"
import styled from "styled-components"
import { color, spacing, targetSize } from "@staccx/theme"
import { Input, Button, Box } from "@staccx/base"

const Chat = ({ children }) => (
  <Box variant="chat">
    <ChatWrapper>{children}</ChatWrapper>
    <ChatInput>
      <Input variant="chat" placeholder="Beskjed" id="chatinput" />
      <Button variant="chat">Send</Button>
    </ChatInput>
  </Box>
)

const ChatWrapper = styled.div`
  overflow-y: auto;
  overflow-x: hidden;
  padding: ${spacing.medium} ${spacing.small} 56px;

  @media only screen and (min-width: 750px) {
    max-height: 370px;
  }
`

const ChatInput = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: ${spacing.large};
  border-top: 1px solid ${color.bg};
`

export default Chat
