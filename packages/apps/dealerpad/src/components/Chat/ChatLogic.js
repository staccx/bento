import React from "react"
import Chat from "./Chat"
import ChatBubble from "./ChatBubble"
import { Layout } from "@staccx/base"
import userStore from "../../data/store/userStore"

const ChatLogic = ({ messages, caseNumber }) => (
  <Chat>
    {messages && (
      <Layout rowGap="small">
        {messages.map((message, index) => (
          <ChatBubble
            key={message.createdAt}
            body={message.text}
            time={message.createdAt}
            from={message.name}
            date={message.createdAt}
            currentUser={message.senderId === userStore.user.id}
            index={index}
          />
        ))}
      </Layout>
    )}
    {!messages && (
      <div>Start en ny samtale med Nordea Finans på sak {caseNumber}</div>
    )}
  </Chat>
)

export default ChatLogic
