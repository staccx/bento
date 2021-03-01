import { useRef } from "react"
import styled, { css, keyframes } from "styled-components"
import { lerp } from "../math"

export const wait = (time = 100) =>
  new Promise(resolve => setTimeout(resolve, time))

export const useTypingEffect = ({ el }) => {
  const text = useRef("")

  const getTypeInterval = (min = 50, max = 100) => {
    return lerp(min, max, Math.random())
  }

  const type = async t => {
    for (const char of t) {
      text.current += char
      if (el?.current) {
        el.current.innerText = text.current
      }
      await wait(getTypeInterval())
    }
  }

  const typeRemove = async t => {
    for (let i = 0; i < t.length; i++) {
      text.current = text.current.slice(0, text.current.length - 1)
      if (el?.current) {
        el.current.innerText = text.current
      }
      await wait(getTypeInterval())
    }
  }

  const set = t => {
    text.current = t
  }

  return { type, typeRemove, set }
}

// class TypeAsync extends HTMLSpanElement {
//   get text() {
//     return this.innerText
//   }
//
//   set text(value) {
//     return (this.innerHTML = value)
//   }
//
//   get typeInterval() {
//     const randomMs = 100 * Math.random()
//     return randomMs < 50 ? 10 : randomMs
//   }
//
//   async type(text) {
//     for (let character of text) {
//       this.text += character
//       await sleep(this.typeInterval)
//     }
//   }
//
//   async delete(text) {
//     for (let character of text) {
//       this.text = this.text.slice(0, this.text.length - 1)
//       await sleep(this.typeInterval)
//     }
//   }
// }

const blinkAnimation = keyframes`
  to {
    visibility: hidden;
  }
`

export const blinkStyle = css`
  user-select: none;
  animation: ${blinkAnimation} 1s steps(2, start) infinite;
`

export const Blink = styled.span`
  ${blinkStyle}
`
