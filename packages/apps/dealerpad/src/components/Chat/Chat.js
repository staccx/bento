import React from "react"
import styled from "styled-components"
import { Input, Button, Box, theming } from "@staccx/base"
import chatStore from "../../data/store/chatStore"

class Chat extends React.Component {
  constructor(props) {
    super(props)
    this.state = { message: "", sendDisabled: true }
    this.handleInput = this.handleInput.bind(this)
    this.sendMessage = this.sendMessage.bind(this)
    this.appendText = this.appendText.bind(this)
  }

  sendMessage() {
    chatStore.sendMessage(this.state.message)
    this.setState({ message: "", sendDisabled: true })
  }

  handleInput(e) {
    this.setState({
      message: e.target.value,
      sendDisabled: e.target.value.length === 0
    })
  }

  appendText(text) {
    return () =>
      this.setState({
        message: this.state.message + text,
        sendDisabled: false
      })
  }

  scrollToBottom() {
    this.messagesEnd.scrollIntoView({ behavior: "smooth" })
  }

  componentDidUpdate() {
    this.scrollToBottom()
  }

  componentDidMount() {
    this.scrollToBottom()
  }

  render() {
    return (
      <Box variant="chat">
        <ChatWrapper>
          {this.props.children}
          <div
            style={{ float: "left", clear: "both" }}
            ref={e => (this.messagesEnd = e)}
          />
        </ChatWrapper>
        <ChatInput>
          <Input
            onChange={this.handleInput}
            variant="chat"
            placeholder="Beskjed"
            id="chatinput"
            value={this.state.message}
          />
          <Emojis>
            <Button onClick={this.appendText("👍")} variant="emoji">
              <span role="img" aria-label="thumbs up">
                👍
              </span>
            </Button>
            <Button onClick={this.appendText("🤞")} variant="emoji">
              <span role="img" aria-label="cross fingers">
                🤞
              </span>
            </Button>
            <Button onClick={this.appendText("😊")} variant="emoji">
              <span role="img" aria-label="smile">
                😊
              </span>
            </Button>
          </Emojis>
          <Button
            disabled={this.state.sendDisabled}
            onClick={this.sendMessage}
            variant="chat"
          >
            Send
          </Button>
        </ChatInput>
      </Box>
    )
  }
}

const ChatWrapper = styled.div`
  overflow-y: auto;
  overflow-x: hidden;
  padding: ${theming.spacing.medium} ${theming.spacing.small} 104px;

  @media only screen and (min-width: 750px) {
    max-height: 370px;
  }
`

const ChatInput = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: ${theming.spacing.large};
  border-top: 1px solid ${theming.color.bg};
`

const Emojis = styled.div`
  position: absolute;
  text-align: center;
  width: 100%;
  height: ${theming.spacing.large};
  transform: translateY(-200%);
`

export default Chat