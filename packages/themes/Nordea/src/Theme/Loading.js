import React from "react"
import styled, { keyframes } from "styled-components"
import { Loading, theming } from "@staccx/base"

const NordeaLoader = () => (
  <svg xmlns="http://www.w3.org/2000/Svg" viewBox="0 0 292 292" width="72">
    <g fill="#0000A0" fillRule="evenodd">
      <Path d="M11.2,160.2 C5.2,160.2 0.3,155.3 0.3,149.3 L0.3,134.7 C0.3,128.7 5.2,123.8 11.2,123.8 C17.2,123.8 22.1,128.7 22.1,134.7 L22.1,149.3 C22.1,155.4 17.2,160.2 11.2,160.2 Z" />
      <Path d="M54.9,162.1 C44.9,162.1 36.7,154 36.7,143.9 L36.7,89.4 C36.7,79.4 44.8,71.2 54.9,71.2 C64.9,71.2 73.1,79.3 73.1,89.4 L73.1,143.9 C73,153.9 64.9,162.1 54.9,162.1 Z" />
      <Path d="M113.9,203.9 C101.4,203.9 91.2,193.7 91.2,181.2 L91.2,23.1 C91.2,10.6 101.4,0.4 113.9,0.4 C126.4,0.4 136.6,10.6 136.6,23.1 L136.6,181.2 C136.6,193.7 126.5,203.9 113.9,203.9 Z" />
      <Path d="M177.5,283.8 C165,283.8 154.8,273.6 154.8,261.1 L154.8,103 C154.8,90.5 165,80.3 177.5,80.3 C190,80.3 200.2,90.5 200.2,103 L200.2,261.1 C200.2,273.6 190.1,283.8 177.5,283.8 Z" />
      <Path d="M236.6,212.9 C226.6,212.9 218.4,204.8 218.4,194.7 L218.4,140.2 C218.4,130.2 226.5,122 236.6,122 C246.6,122 254.8,130.1 254.8,140.2 L254.8,194.7 C254.7,204.8 246.6,212.9 236.6,212.9 Z" />
      <Path
        fillRule="nonzero"
        d="M280.2,160.2 C274.2,160.2 269.3,155.3 269.3,149.3 L269.3,134.7 C269.3,128.7 274.2,123.8 280.2,123.8 C286.2,123.8 291.1,128.7 291.1,134.7 L291.1,149.3 C291.1,155.4 286.2,160.2 280.2,160.2 Z"
      />
    </g>
  </svg>
)

export const ScaleInY = keyframes`
  0%, 60% {
    transform: scaleY(0) scaleX(0.3);
  }

  20%,
  40%{
    transform: scaleY(1) scaleX(1);
  }
`

const Path = styled.path`
  animation: ${ScaleInY} 3s cubic-bezier(0.59, 0.24, 0.33, 1.1) forwards
    infinite;
  transform: scaleY(0) scaleX(0.3);
  transform-origin: center;
  &:nth-child(1) {
    transform-origin: 5% center;
  }
  &:nth-child(2) {
    transform-origin: 20% center;
    animation-delay: 0.1s;
  }
  &:nth-child(3) {
    transform-origin: 40% center;
    animation-delay: 0.2s;
  }
  &:nth-child(4) {
    transform-origin: 55% center;
    animation-delay: 0.3s;
  }
  &:nth-child(5) {
    transform-origin: 75% center;
    animation-delay: 0.4s;
  }
  &:nth-child(6) {
    transform-origin: 90% center;
    animation-delay: 0.5s;
  }
`

export const LoadingStyle = theming.createVariants(
  { [theming.VARIANT_DEFAULT]: NordeaLoader },
  Loading.themeProps.component
)
