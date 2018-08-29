import React from "react"
import styled from "styled-components"
import { color, spacing, font } from "@staccx/theme"
import { Flag, fontSmoothing } from "@staccx/base"
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
      ? color("chatBubbleBgCurrentUser")
      : color("chatBubbleBgOtherUser")};
  color: ${p =>
    p.currentUser
      ? color("chatBubbleBgCurrentUserText")
      : color("chatBubbleBgOtherUserText")};
  padding: ${spacing.small};
  font-size: ${font.tiny};
  border-radius: 4px;
  ${fontSmoothing};
`

const Time = styled.div`
  font-size: 10px;
  margin-top: ${spacing.tiny};
`

export default ChatBubble
