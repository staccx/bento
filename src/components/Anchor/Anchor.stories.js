import React from "react"
import Anchor from "./Anchor"

export default {
  title: "Components/Anchor",
  component: Anchor
}

export const AnchorStandard = () => (
  <Anchor href="www.stacc.com"> Check out our page! </Anchor>
)

export const AnchorInline = () => {
  return (
    <p>
      this text contains an Anchor tag, that you can click to get more
      information about the subject,
      <Anchor href="https://www.stacc.com"> check out our page!</Anchor>
    </p>
  )
}

export const Multiple = () => {
  return (
    <>
      <Anchor href="https://www.stacc.com">This is a link</Anchor>
      <Anchor href="https://www.stacc.com">This is another</Anchor>
      <Anchor href="https://www.stacc.com">this is a third </Anchor>
    </>
  )
}
