import React from "react"
import Carousel from "nuka-carousel"
import styled, { css } from "styled-components"
import { color, spacing } from "@staccx/theme"
import { opacity } from "@staccx/color"
import ArrowRight from "../Icons/ArrowRight"
import ArrowLeft from "../Icons/ArrowLeft"

class ImageCarousel extends React.Component {
  componentDidUpdate() {
    setTimeout(() => {
      window.dispatchEvent(new Event("resize")) // Fix for some weird height issues
    }, 0)
  }
  render() {
    const { images } = this.props
    return (
      <Outer>
        <Carousel
          initialSlideWidth={100}
          heightMode="max"
          wrapAround
          renderCenterRightControls={({
            nextSlide,
            slideCount,
            currentSlide
          }) => {
            return (
              <NextSlide onClick={nextSlide}>
                <ArrowRight />
              </NextSlide>
            )
          }}
          renderCenterLeftControls={({
            previousSlide,
            slideCount,
            currentSlide
          }) => {
            if (currentSlide === 0 || slideCount === 0) {
              return null
            }
            return (
              <PrevSlide onClick={previousSlide}>
                <ArrowLeft />
              </PrevSlide>
            )
          }}
          renderBottomCenterControls={({ slideCount, currentSlide }) => {
            return (
              <DotsContainer>
                {[...Array(slideCount)].map((e, index) => (
                  <Dot key={index} highlighted={currentSlide === index} />
                ))}
              </DotsContainer>
            )
          }}
        >
          {images.map(image => (
            <img key={image} src={image} alt="" />
          ))}
        </Carousel>
      </Outer>
    )
  }
}

const Outer = styled.div`
  position: relative;
  overflow: hidden;
  padding-bottom: ${spacing.large};
  min-height: 188px;
`

const btnReset = css`
  padding: 0;
  border: 0;
  background: transparent;

  &:focus,
  &:active,
  &:hover {
    border: 0;
    background: transparent;
    outline: none;
  }
`
const NextSlide = styled.button`
  ${btnReset};
  padding-right: ${spacing.small};
`
const PrevSlide = styled.button`
  ${btnReset};
  padding-left: ${spacing.small};
`

const DotsContainer = styled.div`
  position: absolute;
  bottom: -32px;
  left: 50%;
  display: flex;
  align-items: center;
  transform: translateX(-50%);
`

const Dot = styled.span`
  display: block;
  width: ${p => (p.highlighted ? "15px" : "10px")};
  height: ${p => (p.highlighted ? "15px" : "10px")};
  background-color: ${p =>
    p.highlighted ? color("primary")(p) : opacity(color("primary")(p), 0.4)};
  border-radius: 50%;
  transition: all 0.2s ease;

  &:not(:last-child) {
    margin-right: ${spacing.tiny};
  }
`

export default ImageCarousel
