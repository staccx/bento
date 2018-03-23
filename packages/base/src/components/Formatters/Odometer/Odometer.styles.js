import { css } from "styled-components"
import hideVisually from "../../../Styles/hideVisually"

const OdometerAnimating = css`
  ${p => (!p.isAnimating ? hideVisually : "")};
  display: flex;
`
const OdometerStatic = css`
  ${p => (p.isAnimating ? hideVisually : "")};
  display: flex;
`

const OdometerContainer = css`
  position: relative;
`

const OdometerWrapper = css`
  font-size: ${p => p.size}px;
  line-height: 1;
  display: inline-block;
`

const DigitWrapper = css`
  height: ${p => p.size}px;
  width: ${p => (p.isEmpty ? p.size / 2 : p.size / 1.5)}px;
  overflow: hidden;
`

const DigitContainer = css`
  font-size: ${p => p.size}px;
  ${p =>
    !p.single &&
    `
    animationname: slide${p.digit};
    transform: translateY(-${p.digit}em);
    transition: transform ${p.speed}ms cubic-bezier(0, 0, 0.2, 1);
    `};
`

export default {
  OdometerAnimating,
  OdometerStatic,
  OdometerContainer,
  OdometerWrapper,
  DigitWrapper,
  DigitContainer
}
