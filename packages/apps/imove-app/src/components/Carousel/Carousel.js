import React from "react"
import Carousel from "nuka-carousel"
import styled from "styled-components"
import { color, spacing } from "@staccx/theme"
import { opacity } from "@staccx/color"

const ImageCarousel = ({ images }) => (
  <Outer>
    <Carousel
      initialSlideWidth={100}
      renderCenterRightControls={({ nextSlide, slideCount, currentSlide }) => {
        if (currentSlide + 1 >= slideCount) {
          return null
        }
        return <NextSlide onClick={nextSlide}>Neste</NextSlide>
      }}
      renderCenterLeftControls={({
        previousSlide,
        slideCount,
        currentSlide
      }) => {
        if (currentSlide === 0 || slideCount === 0) {
          return null
        }
        return <PrevSlide onClick={previousSlide}>Forrige</PrevSlide>
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

const Outer = styled.div`
  position: relative;
  overflow: hidden;
  padding-bottom: ${spacing.large};
`

const NextSlide = styled.button``
const PrevSlide = styled.button``

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
