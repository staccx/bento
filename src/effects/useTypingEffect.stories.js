import { Blink, blinkStyle, useTypingEffect, wait } from "./useTypingEffect"
import { useEffect, useRef } from "react"
import styled from "styled-components"

export default {
  title: "effects/Typing effects",
  component: Blink
}

const HeadingBlinker = styled.h2`
  ${blinkStyle}
`

const Container = styled.div`
  display: flex;
  flex-direction: row;
`

export const BlinkingCursor = () => (
  <div>
    <span>Here is some text</span>
    <Blink>_</Blink>
  </div>
)

export const Typing = args => {
  const el = useRef(null)
  const { type } = useTypingEffect({ el, text: args.text })

  useEffect(() => {
    if (el) {
      type("This will be added to the end")
    }
  }, [el])

  return (
    <div>
      <span ref={el}></span>
      <Blink>_</Blink>
    </div>
  )
}

Typing.args = {
  text: "We start with this"
}

export const TypeAndRemove = args => {
  const el = useRef(null)
  const { type, typeRemove } = useTypingEffect({ el, text: args.text })

  useEffect(() => {
    if (el) {
      routine()
    }
  }, [el])

  const routine = async () => {
    await wait(1000)
    await type("This will be added to teh end")
    await wait(1000)
    await typeRemove("teh end")
    await wait(400)
    await type("the end")
  }

  return (
    <div>
      <span ref={el}></span>
      <Blink>_</Blink>
    </div>
  )
}

TypeAndRemove.args = {
  text: ""
}

export const TypeAndRemoveHeading = args => {
  const elHeading = useRef(null)
  const { type, typeRemove } = useTypingEffect({
    el: elHeading,
    text: args.text
  })

  useEffect(() => {
    if (elHeading) {
      routine()
    }
  }, [elHeading])

  const routine = async () => {
    await wait(1000)
    await type("This will be added to teh end")
    await wait(1000)
    await typeRemove("teh end")
    await wait(400)
    await type("the end")
  }

  return (
    <Container>
      <h2 ref={elHeading}></h2>
      <HeadingBlinker>_</HeadingBlinker>
    </Container>
  )
}

TypeAndRemoveHeading.args = {
  text: ""
}
