import React from "react"
import styled from "styled-components"
import { color, spacing, font } from "@staccx/theme"
import { Flag, fontSmoothing } from "@staccx/base"
import AvatarInitials from "./AvatarInitials"

const ChatBubble = ({ from, body, date, time }) => (
  <Flag top small img={<AvatarInitials name={from} />}>
    <Bubble>
      {body}
      <Time>
        {date} {time}
      </Time>
    </Bubble>
  </Flag>
)

const Bubble = styled.div`
  background-color: ${color("b2")};
  color: ${color.white};
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
