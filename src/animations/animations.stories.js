import styled, {css} from "styled-components";
import { AppearIn } from './Appear';
import { BounceIn, BounceOut } from './Bounce';
import { FadeIn, FadeInFromTop } from './Fade';
import { ScaleIn, ScaleInY, ScaleInX } from './Scale';
import { SlideInFromTop, SlideInFromLeft, SlideInFromRight } from './Slide';
import { Draw } from './Draw';
import {
  color,
  borderRadius,
  spacing,
  targetSize,
  font,
  fontFamily,
  fontWeight,
} from "../theming"

export default {
  title: "Styling/Animations",
  component: {AppearIn, BounceIn, BounceOut, FadeIn, FadeInFromTop, ScaleIn, ScaleInY, ScaleInX, SlideInFromTop, SlideInFromLeft, SlideInFromRight, Draw},
  parameters: {
    docs: {
      description: {
        component: 'This story contains several animations that can be used as a global variable in our styled components. \n\n' +
          'Protip: Remember to set the initial placing of the component in addition to the values from the imported keyframe animation! Sometimes when the code is used in production, the animation can "glitch" and make the overall impression bad. \n\n' +
          'Example of import-statement for an animation: \n\n' +
          '     import { AppearIn } from \'./Appear\'; \n\n '+
          '\n\n' +
          'The AppearIn component would look like this: \n\n ' +
          '     import { keyframes } from "styled-components"\n\n' +
          '\n\n' +
          '       export const AppearIn = keyframes`\n\n' +
          '           from {\n\n' +
          '             transform: translateX(-100px);\n\n' +
          '           }\n\n' +
          '           to {\n\n' +
          '             transform: translateX(0);\n\n' +
          '           }\n\n' +
          '       `'
      },
    }
  },
}
const commonCSS = css`
    background-color: ${color.primary};
    color: ${color.white};
    border-width: 0;
    border-radius: ${borderRadius};
    padding: ${spacing.tiny} ${spacing.medium};
    min-height: ${targetSize.normal};
    text-decoration: none;
    text-align: center;
    display: flex;
    font-size: ${font.base};
    font-family: ${fontFamily.body};
    line-height: 32px;
    font-weight: ${fontWeight.bold};
    white-space: nowrap;
    justify-content: center;
    align-items: center;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
`

const drawCSS = css`
  stroke-dasharray: 1000;
  stroke-dashoffset: 1000;
  animation: ${Draw} 5s linear alternate infinite;
`


export const Example = () => {
  const AppearComp = styled.div`
    animation: ${AppearIn} 2s ease-out forwards;
    transform: translateX(-100px);
    ${commonCSS};
  `
  return (
    <AppearComp>Example</AppearComp>
  )
}

export const AppearInAnimation = () => {
  const AppearComp = styled.div`
    animation: ${AppearIn} 2s ease-out forwards;
    transform: translateX(-100px);
    ${commonCSS};
  `
  return (
    <AppearComp>AppearIn</AppearComp>
  )
}

export const BounceInAnimation = () => {
  const BounceInComp = styled.div`
    animation: ${BounceIn} 2s ease-out forwards;
    transform: translateY(-12px);
    ${commonCSS};
  `

  return (
    <BounceInComp>BounceIn</BounceInComp>
  )
}

export const BounceOutAnimation = () => {
  const BounceOutComp = styled.div`
    animation: ${BounceOut} 2s ease-out forwards;
    transform: translateY(0);
    ${commonCSS};
  `

  return (
    <BounceOutComp>BounceOut</BounceOutComp>
  )
}

export const FadeInAnimation = () => {
  const FadeInComp = styled.div`
    animation: ${FadeIn} 2s ease-in forwards;
    opacity: 0;
    ${commonCSS};
  `

  return (
    <FadeInComp>FadeIn</FadeInComp>
  )
}

export const FadeInFromTopAnimation = () => {
  const FadeInFromTopComp = styled.div`
    animation: ${FadeInFromTop} 2s ease-in forwards;
    opacity: 0;
    transform: translateY(-100%);
    ${commonCSS};
  `

  return (
    <FadeInFromTopComp>FadeInFromTop</FadeInFromTopComp>
  )
}

export const ScaleInAnimation = () => {
  const ScaleInComp = styled.div`
    animation: ${ScaleIn} 2s ease-in forwards;
    transform: scale(0);
    ${commonCSS};
  `

  return (
    <ScaleInComp>ScaleIn</ScaleInComp>
  )
}

export const ScaleInYAnimation = () => {
  const ScaleInYComp = styled.div`
    animation: ${ScaleInY} 2s ease-in forwards;
    transform: scale(0);
    ${commonCSS};
  `

  return (
    <ScaleInYComp>ScaleInY</ScaleInYComp>
  )
}

export const ScaleInXAnimation = () => {
  const ScaleInXComp = styled.div`
    animation: ${ScaleInX} 2s ease-in forwards;
    transform: scale(0);
    ${commonCSS};
  `

  return (
    <ScaleInXComp>ScaleInX</ScaleInXComp>
  )
}

export const SlideInFromRightAnimation = () => {
  const SlideInFromRightComp = styled.div`
    animation: ${SlideInFromRight} 2s ease-in forwards;
    opacity: 0;
    transform: translateX(100%);
    ${commonCSS};
  `


  return (
    <SlideInFromRightComp>SlideInFromRight</SlideInFromRightComp>
  )
}


export const SlideInFromLeftAnimation = () => {
  const SlideInFromLeftComp = styled.div`
    animation: ${SlideInFromLeft} 2s ease-in forwards;
    opacity: 0;
    transform: translateX(-100%);
    ${commonCSS};
  `


  return (
    <SlideInFromLeftComp>SlideInFromLeft</SlideInFromLeftComp>
  )
}


export const DrawAnimation = () => {
  const StyledPath = styled.path`
    stroke-dasharray: 1000;
    stroke-dashoffset: 1000;
    animation: ${Draw} 5s linear alternate infinite;
    ${drawCSS};
  `

  return (
    <svg width="264" height="325" viewBox="0 0 164 225" fill="none" xmlns="http://www.w3.org/2000/svg">
      <StyledPath d="M3.94112 74.204C10.6301 69.1124 12.6962 61.9332 14.2145 53.9277C14.5851 51.9734 15.9727 45.6918 14.4224 43.8831C13.6438 42.9747 12.5512 42.8523 12.1764 44.0703C10.1481 50.6622 9.18177 57.8459 9.18177 64.7209C9.18177 71.951 10.3244 78.3672 11.9685 85.4132C13.4234 91.6484 14.8726 97.9029 15.5454 104.275C16.0378 108.938 15.9696 113.65 15.9198 118.334C15.8914 121.001 15.2388 122.157 12.7795 123.2C7.26261 125.54 7.59587 118.399 7.14374 114.653C6.63503 110.438 6.39081 105.17 7.85081 101.114C9.46038 96.6433 13.0279 92.7465 15.7742 88.9485C18.095 85.7389 20.753 82.82 23.2816 79.7774C26.5816 75.8066 29.45 71.5144 32.8063 67.5908C37.0505 62.6292 41.624 56.4576 44.0986 50.3299C46.1411 45.2725 47.8335 36.793 40.792 34.9823C36.5696 33.8965 33.855 56.1301 33.6797 58.3573C33.0924 65.8199 33.5134 73.4589 33.5134 80.942C33.5134 89.2718 33.7102 97.7156 35.0523 105.96C35.6008 109.33 36.5077 112.657 37.7142 115.838C38.3089 117.406 40.2894 117.808 41.7279 118.167C47.115 119.514 53.6049 119.183 57.7202 115.131C62.0522 110.866 64.8787 101.701 58.2609 98.2029C57.1407 97.6108 53.6733 95.6781 52.3963 96.9551C50.0089 99.3425 49.9001 103.786 49.6928 106.896C49.2421 113.656 51.154 119.804 54.4967 125.654C56.5262 129.205 59.7355 132.972 64.0422 133.64C67.2319 134.134 69.2808 131.155 70.7802 128.732C73.9667 123.581 75.4106 117.389 76 111.429C76.7111 104.24 77.0774 96.6561 76.104 89.4684C75.8548 87.6276 74.9114 81.0673 72.2775 80.5885C69.0519 80.002 69.0463 97.9947 69.0749 99.617C69.1743 105.247 70.9183 111.076 72.839 116.358C73.9824 119.502 75.2263 122.659 77.1022 125.446C81.5392 132.038 85.9493 120.579 86.4398 116.919C87.7528 107.122 87.4172 96.8441 87.4172 86.9729C87.4172 86.8214 86.7882 83.064 86.003 84.4773C84.7995 86.6438 84.6247 89.9393 84.0482 92.3175C82.0691 100.481 82.9305 110.493 85.5247 118.438C86.0739 120.119 86.7523 122.779 88.5818 123.408C91.2005 124.308 94.3674 124.467 97.1082 124.365C105.412 124.053 105.025 110.708 105.759 105.107C106.538 99.174 106.107 91.9754 113.038 89.9468C115.065 89.3536 121.472 89.5516 119.36 89.5516C115.143 89.5516 112.002 92.906 109.482 95.9777C103.063 103.801 100.105 116.596 108.588 124.115C111.433 126.637 117.376 127.92 120.92 126.299C127.259 123.398 128.188 114.691 127.679 108.643C127.268 103.762 124.786 99.98 122.979 95.5617C122.824 95.1843 120.124 90.1163 120.317 90.0091C121.196 89.5205 123.297 89.9389 124.227 89.8636C129.18 89.4619 132.879 86.543 135.935 82.7721C141.87 75.4472 144.085 65.1513 146.562 56.2361" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  )
}
