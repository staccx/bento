import React from "react"
import Chat from "./Chat"
import styled from "styled-components"
import ChatBubble from "./ChatBubble"
import { Layout, ThemeComponent, theming } from "@staccx/base"
import userStore from "../../data/store/userStore"

const ChatLogic = ({ messages, caseNumber }) => (
  <Chat>
    {messages.length > 0 && (
      <Layout rowGap="small">
        {messages.map((message, index) => (
          <ChatBubble
            key={message.createdAt}
            body={message.text}
            dateTime={message.createdAt}
            from={message.name}
            currentUser={message.senderId === userStore.user.id}
            index={index}
          />
        ))}
      </Layout>
    )}
    {messages.length === 0 && (
      <EmptyChat>
        <ThemeComponent tagName={"ChatStart"} />
        <div>Start en ny samtale med Nordea Finans på sak {caseNumber}</div>
      </EmptyChat>
    )}
  </Chat>
)

const EmptyChat = styled.div`
  text-align: center;
  color: ${theming.color.gray};
  max-width: 240px;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 210px;
  svg {
    margin-bottom: ${theming.spacing.small};
  }
`

export default ChatLogic
