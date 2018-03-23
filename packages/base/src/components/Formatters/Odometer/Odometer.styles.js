import { css } from "styled-components"
import hideVisually from "../../../Styles/hideVisually"

export const OdometerAnimatingStyle = css`
  ${p => (!p.isAnimating ? hideVisually : "")};
  display: flex;
`
export const OdometerStaticStyle = css`
  ${p => (p.isAnimating ? hideVisually : "")};
  display: flex;
`

export const OdometerContainerStyle = css`
  position: relative;
`

export const OdometerWrapperStyle = css`
  font-size: ${p => p.size}px;
  line-height: 1;
  display: inline-block;
`

export const DigitWrapperStyle = css`
  height: ${p => p.size}px;
  width: ${p => (p.isEmpty ? p.size / 2 : p.size / 1.5)}px;
  overflow: hidden;
`

export const DigitContainerStyle = css`
  font-size: ${p => p.size}px;
  ${p =>
    !p.single &&
    `
    animationname: slide${p.digit};
    transform: translateY(-${p.digit}em);
    transition: transform ${p.speed}ms cubic-bezier(0, 0, 0.2, 1);
    `};
`
