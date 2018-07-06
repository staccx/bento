import React from "react"
import Chat from "./Chat"
import ChatBubble from "./ChatBubble"
import { Layout } from "@staccx/base"

const ChatLogic = ({ messages, caseNumber }) => (
  <Chat>
    {messages && (
      <Layout rowGap="small">
        {messages.map(message => (
          <ChatBubble
            key={message.time + message.date}
            body={message.body}
            time={message.time}
            from={message.from}
            date={message.date}
            currentUser={false}
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
