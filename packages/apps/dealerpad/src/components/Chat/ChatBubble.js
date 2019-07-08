import React from "react"
import styled from "styled-components"
import { Flag, fontSmoothing, theming } from "@staccx/base"
import AvatarInitials from "./AvatarInitials"
import { SlideInFromLeft } from "@staccx/animations"
import { formatDate } from "@staccx/formatting"

const ChatBubble = ({ from, body, dateTime, currentUser, index = 1 }) => (
  <AnimatedFlag top small img={<AvatarInitials name={from} delay={index} />}>
    <Bubble currentUser={currentUser}>
      {body}
      <Time>{formatDate(dateTime, "dd.MM.yyyy HH:mm")}</Time>
    </Bubble>
  </AnimatedFlag>
)

const AnimatedFlag = styled(Flag)`
  opacity: 0;
  transform: translateX(-100%);
  animation: ${SlideInFromLeft} forwards ease-out 300ms 1;
  animation-delay: 600ms;
  &:nth-last-child(3) {
    animation-delay: 700ms;
  }
  &:nth-last-child(2) {
    animation-delay: 800ms;
  }
  &:nth-last-child(1) {
    animation-delay: 900ms;
  }
`

const Bubble = styled.div`
  background-color: ${p =>
    p.currentUser
      ? theming.color("chatBubbleBgCurrentUser")
      : theming.color("chatBubbleBgOtherUser")};
  color: ${p =>
    p.currentUser
      ? theming.color("chatBubbleBgCurrentUserText")
      : theming.color("chatBubbleBgOtherUserText")};
  padding: ${theming.spacing.small};
  font-size: ${theming.font.tiny};
  border-radius: 4px;
  ${fontSmoothing};
`

const Time = styled.div`
  font-size: 10px;
  margin-top: ${theming.spacing.tiny};
`

export default ChatBubble